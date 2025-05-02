import type { Address } from 'viem'
import { z } from 'zod'
import type { ExtractorSupportedChainId } from '../config/index.js'
import { RouteStatus } from '../router/route-status.js'
import type { TransferValue } from '../router/transfer-value.js'
import { sz } from '../validate/zod.js'
import { version } from '../version.js'

type Fee<Enabled extends boolean> = Enabled extends true
  ? {
      enableFee: Enabled
      fee: bigint
      feeReceiver: Address
      feeBy?: TransferValue
    }
  : {
      enableFee?: Enabled
      fee?: bigint
      feeReceiver?: Address
      feeBy?: TransferValue
    }

export type QuoteRequest<EnableFee extends boolean> = {
  chainId: ExtractorSupportedChainId
  tokenIn: Address
  tokenOut: Address
  amount: bigint
  maxSlippage: number
  maxPriceImpact?: number
  fee?: Fee<EnableFee>
  referrer?: string
  vizualize?: boolean
  baseUrl?: string
}

function quoteResponseSchema<Vizualize extends boolean>(vizualize?: Vizualize) {
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

  const baseVizualizeSchema = baseSchema
    .and(
      z.object({
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
    )
    .or(baseNoWay)

  type Schema = Vizualize extends true
    ? typeof baseVizualizeSchema
    : typeof baseSchema

  return (vizualize ? baseVizualizeSchema : baseSchema) as Schema
}

export type QuoteResponse<Vizualize extends boolean = true> = z.infer<
  ReturnType<typeof quoteResponseSchema<Vizualize>>
>

export async function getQuote<
  Vizualize extends boolean = true,
  EnableFee extends boolean = false,
>(
  params: QuoteRequest<EnableFee>,
  options?: RequestInit,
): Promise<QuoteResponse<Vizualize>> {
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

  if (params.fee?.enableFee) {
    url.searchParams.append('fee', params.fee.fee.toString())
    url.searchParams.append('feeReceiver', params.fee.feeReceiver)
    if (params.fee.feeBy) {
      url.searchParams.append('feeBy', params.fee.feeBy)
    }
  }

  if (params?.vizualize) {
    url.searchParams.append('vizualize', params.vizualize.toString())
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

  return quoteResponseSchema(params.vizualize).parse(await res.json())
}
