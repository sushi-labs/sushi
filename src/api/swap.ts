import type { Address } from 'viem'
import { z } from 'zod'
import type { ExtractorSupportedChainId } from '../config/index.js'
import { version } from '../package.json'
import { RouteStatus } from '../router/route-status.js'
import type { TransferValue } from '../router/transfer-value.js'
import { sz } from '../validate/zod.js'

type To<Required extends boolean> = Required extends true
  ? { to: Address }
  : { to?: Address }

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

export type SwapRequest<
  IncludeTransaction extends boolean,
  EnableFee extends boolean,
> = {
  chainId: ExtractorSupportedChainId
  tokenIn: Address
  tokenOut: Address
  amount: bigint
  maxSlippage: number
  maxPriceImpact?: number
  includeTransaction?: IncludeTransaction
  fee?: Fee<EnableFee>
  referrer?: string
} & To<IncludeTransaction>

function swapResponseSchema<IncludeTransaction extends boolean>(
  includeTransaction?: IncludeTransaction,
) {
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

  const txSchema = z.object({
    from: sz.address(),
    to: sz.address(),
    data: sz.hex(),
    value: z.string().optional(),
  })

  const baseSchema = baseSuccessPartial.or(baseNoWay)
  const baseTxSchema = baseSchema.and(z.object({ tx: txSchema })).or(baseNoWay)

  type Schema = IncludeTransaction extends true
    ? typeof baseTxSchema
    : typeof baseSchema

  return (includeTransaction ? baseTxSchema : baseSchema) as Schema
}

export type SwapResponse<IncludeTransaction extends boolean = true> = z.infer<
  ReturnType<typeof swapResponseSchema<IncludeTransaction>>
>

export async function getSwap<
  IncludeTransaction extends boolean = false,
  EnableFee extends boolean = false,
>(
  params: SwapRequest<IncludeTransaction, EnableFee>,
  options?: RequestInit,
): Promise<SwapResponse<IncludeTransaction>> {
  // TODO: VALIDATE PARAMS
  const url = new URL(`swap/v5/${params.chainId}`, 'https://api.sushi.com')

  url.searchParams.append('tokenIn', params.tokenIn)
  url.searchParams.append('tokenOut', params.tokenOut)
  url.searchParams.append('amount', params.amount.toString())
  url.searchParams.append('maxSlippage', params.maxSlippage.toString())

  if (params.maxPriceImpact) {
    url.searchParams.append('maxPriceImpact', params.maxPriceImpact.toString())
  }

  if (params.to) {
    url.searchParams.append('to', params.to)
  }

  if (params.fee?.enableFee) {
    url.searchParams.append('enableFee', params.fee.enableFee.toString())
    url.searchParams.append('fee', params.fee.fee.toString())
    url.searchParams.append('feeReceiver', params.fee.feeReceiver)

    if (params.fee.feeBy) {
      url.searchParams.append('feeBy', params.fee.feeBy)
    }
  }

  if (params.includeTransaction) {
    url.searchParams.append(
      'includeTransaction',
      params.includeTransaction.toString(),
    )
  }

  url.searchParams.append('referrer', params.referrer ?? `sushi-sdk/${version}`)

  const res = await fetch(url.toString(), options)

  if (!res.ok) {
    throw new Error(`Failed to fetch swap: ${await res.text()}`)
  }

  return swapResponseSchema(params.includeTransaction).parse(await res.json())
}
