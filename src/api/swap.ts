import type { Address } from 'viem'
import { z } from 'zod'
import type { ExtractorSupportedChainId } from '../config/index.js'
import { RouteStatus } from '../router/route-status.js'
import type { RouterLiquiditySource } from '../router/router-liquidity-source.js'
import type { TransferValue } from '../router/transfer-value.js'
import { sz } from '../validate/zod.js'
import { version } from '../version.js'

export type SwapRequest<Simulate extends boolean = true> = {
  chainId: ExtractorSupportedChainId
  tokenIn: Address
  tokenOut: Address
  amount: bigint
  sender: Address
  maxSlippage: number
  maxPriceImpact?: number
  source?: RouterLiquiditySource
  fee?: bigint
  feeReceiver?: Address
  feeBy?: TransferValue
  referrer?: string
  baseUrl?: string
  recipient?: Address
  simulate?: Simulate
  validate?: boolean
  apiKey?: string
}

function swapResponseSchema<Simulate extends boolean>(simulate?: Simulate) {
  const tokenSchema = z.object({
    address: sz.address(),
    decimals: z.number(),
    symbol: z.string(),
    name: z.string(),
  })

  const txSchema = z.object({
    from: sz.address(),
    to: sz.address(),
    gasPrice: z.number(),
    data: sz.hex(),
    value: z
      .string()
      .optional()
      .transform((value) => BigInt(value || 0)),
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

      tx: txSchema,
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
  const baseSimulateSchema = baseSchema
    .and(z.object({ tx: txSchema.extend({ gas: z.string() }) }))
    .or(baseNoWay)
  type Schema = Simulate extends true
    ? typeof baseSimulateSchema
    : typeof baseSchema

  return (simulate ? baseSimulateSchema : baseSchema) as Schema
}

export type SwapResponse<Simulate extends boolean = true> = z.infer<
  ReturnType<typeof swapResponseSchema<Simulate>>
>

export async function getSwap<Simulate extends boolean = true>(
  params: SwapRequest<Simulate>,
  options?: RequestInit,
): Promise<SwapResponse<Simulate>> {
  // TODO: VALIDATE PARAMS
  const url = new URL(
    `swap/v7/${params.chainId}`,
    params.baseUrl ?? 'https://api.sushi.com',
  )

  url.searchParams.append('tokenIn', params.tokenIn)
  url.searchParams.append('tokenOut', params.tokenOut)
  url.searchParams.append('sender', params.sender)
  url.searchParams.append('amount', params.amount.toString())
  url.searchParams.append('maxSlippage', params.maxSlippage.toString())

  if (params.source) {
    url.searchParams.append('source', params.source)
  }

  if (params.maxPriceImpact) {
    url.searchParams.append('maxPriceImpact', params.maxPriceImpact.toString())
  }

  if (params.recipient) {
    url.searchParams.append('recipient', params.recipient)
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

  if (params.referrer) {
    url.searchParams.append('referrer', params.referrer)
  } else {
    url.searchParams.append('referrer', `sushi-sdk/${version}`)
  }

  if (params.simulate !== undefined) {
    url.searchParams.append('simulate', params.simulate.toString())
    if (params.validate !== undefined) {
      url.searchParams.append('validate', params.validate.toString())
    }
  }

  if (params.apiKey !== undefined) {
    url.searchParams.append('apiKey', params.apiKey)
  }

  const res = await fetch(url.toString(), options)

  if (!res.ok) {
    throw new Error(`Failed to fetch swap: ${await res.text()}`)
  }

  return swapResponseSchema(params.simulate).parse(await res.json())
}
