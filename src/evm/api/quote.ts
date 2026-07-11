import type { Address } from 'viem'
import * as z from 'zod'
import { version } from '../../version.js'
import {
  isSwapApiSupportedChainId,
  type SwapApiSupportedChainId,
} from '../config/index.js'
import { szevm } from '../validate/zod.js'
import { RouteStatus, TransferValue } from './types.js'

export type QuoteRequest<Vizualize extends boolean = false> = {
  chainId: SwapApiSupportedChainId
  tokenIn: Address
  tokenOut: Address
  amount: bigint
  maxSlippage: number
  maxPriceImpact?: number
  fee?: number
  feeBy?: TransferValue
  referrer?: string
  visualize?: Vizualize
  baseUrl?: string
}

const quoteRequestSchema = z.object({
  chainId: z.number().int().refine(isSwapApiSupportedChainId),
  tokenIn: szevm.address(),
  tokenOut: szevm.address(),
  amount: z.bigint().positive(),
  maxSlippage: z.number().gte(0).lt(1),
  maxPriceImpact: z.number().positive().lte(1).optional(),
  fee: z.number().gte(0).lte(0.5).optional(),
  feeBy: z.enum(TransferValue).optional(),
  referrer: z.string().min(1).optional(),
  visualize: z.boolean().optional(),
  baseUrl: z.url().optional(),
})

function quoteResponseSchema<Visualize extends boolean>(visualize?: Visualize) {
  const tokenSchema = z.object({
    address: szevm.address(),
    decimals: z.number(),
    symbol: z.string(),
    name: z.string(),
  })

  const baseSuccessPartial = z
    .object({
      status: z.literal(RouteStatus.Success).or(z.literal(RouteStatus.Partial)),
      tokens: z.array(tokenSchema),
      tokenFrom: z.number(),
      tokenTo: z.number(),

      swapPrice: z.number(),
      priceImpact: z.number(),

      amountIn: z.string(),
      assumedAmountOut: z.string(),
    })
    .transform((data) => ({
      ...data,
      tokenFrom: data.tokens[data.tokenFrom]!,
      tokenTo: data.tokens[data.tokenTo]!,
    }))

  const baseNoWay = z.object({
    status: z.literal(RouteStatus.NoWay),
  })

  const baseSchema = baseSuccessPartial.or(baseNoWay)

  const baseVisualizeSchema = baseSchema
    .and(
      z.object({
        visualization: z.object({
          liquidityProviders: z.array(z.string()),
          nodes: z.array(tokenSchema),
          links: z.array(
            z.object({
              source: z.number(),
              target: z.number(),
              liquidityProvider: z.number(),
              amountIn: z.string(),
              amountOut: z.string(),
              value: z.number(),
            }),
          ),
        }),
      }),
    )
    .or(baseNoWay)

  type Schema = Visualize extends true
    ? typeof baseVisualizeSchema
    : typeof baseSchema

  return (visualize ? baseVisualizeSchema : baseSchema) as Schema
}

export type QuoteResponse<Visualize extends boolean = false> = z.infer<
  ReturnType<typeof quoteResponseSchema<Visualize>>
>

export async function getQuote<Visualize extends boolean = false>(
  params: QuoteRequest<Visualize>,
  options?: RequestInit,
): Promise<QuoteResponse<Visualize>> {
  params = quoteRequestSchema.parse(params) as QuoteRequest<Visualize>
  const url = new URL(
    `quote/v7/${params.chainId}`,
    params.baseUrl ?? 'https://api.sushi.com',
  )

  url.searchParams.append('tokenIn', params.tokenIn)
  url.searchParams.append('tokenOut', params.tokenOut)
  url.searchParams.append('amount', params.amount.toString())
  url.searchParams.append('maxSlippage', params.maxSlippage.toString())

  if (params.maxPriceImpact) {
    url.searchParams.append('maxPriceImpact', params.maxPriceImpact.toString())
  }

  if (params.fee !== undefined && params.fee > 0) {
    url.searchParams.append('fee', params.fee.toString())
    if (params.feeBy !== undefined) {
      url.searchParams.append('feeBy', params.feeBy)
    }
  }

  if (params?.visualize) {
    url.searchParams.append('visualize', params.visualize.toString())
  }

  if (params.referrer) {
    url.searchParams.append('referrer', params.referrer)
  } else {
    url.searchParams.append('referrer', `sushi-sdk/${version}`)
  }

  const res = await fetch(url.toString(), options)

  if (!res.ok) {
    throw new Error(`Failed to fetch quote: ${await res.text()}`)
  }

  return quoteResponseSchema(params.visualize).parse(
    await res.json(),
  ) as QuoteResponse<Visualize>
}
