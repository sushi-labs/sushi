import type { Address } from 'viem'
import { z } from 'zod'
import type { ExtractorSupportedChainId } from '../config/index.js'
import { RouteStatus } from '../router/route-status.js'
import type { TransferValue } from '../router/transfer-value.js'
import { sz } from '../validate/zod.js'
import { version } from '../version.js'

export type QuoteRequest<Vizualize extends boolean = false> = {
  chainId: ExtractorSupportedChainId
  tokenIn: Address
  tokenOut: Address
  amount: bigint
  maxSlippage: number
  maxPriceImpact?: number
  fee?: bigint
  feeReceiver?: Address
  feeBy?: TransferValue
  referrer?: string
  visualize?: Vizualize
  baseUrl?: string
}

function quoteResponseSchema<Visualize extends boolean>(visualize?: Visualize) {
  const tokenSchema = z.object({
    address: sz.address(),
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
  // TODO: VALIDATE PARAMS
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

  if (
    typeof params.fee === 'bigint' &&
    params.fee > 0n &&
    params.feeReceiver !== undefined
  ) {
    url.searchParams.append('fee', params.fee.toString())
    url.searchParams.append('feeReceiver', params.feeReceiver)
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

  return quoteResponseSchema(params.visualize).parse(await res.json())
}
