import type { Address } from 'viem'
import * as z from 'zod'
import { sz } from '../../generic/validate/zod.js'
import { version } from '../../version.js'
import {
  isSwapApiSupportedChainId,
  type SwapApiSupportedChainId,
} from '../config/index.js'
import { szevm } from '../validate/zod.js'
import { RouterLiquiditySource, RouteStatus, TransferValue } from './types.js'

export type SwapTarget = 'RP' | 'routeCode'

export type SwapRequest<
  Simulate extends boolean = true,
  Target extends SwapTarget | undefined = SwapTarget | undefined,
> = {
  chainId: SwapApiSupportedChainId
  tokenIn: Address
  tokenOut: Address
  amount: bigint
  sender: Address
  maxSlippage: number
  maxPriceImpact?: number
  /** Surplus share in thousandths, from 0 to 1000. Defaults to the API's value. */
  takeSurplus?: number
  target?: Target
  source?: RouterLiquiditySource
  fee?: number
  feeReceiver?: Address
  feeBy?: TransferValue
  referrer?: string
  baseUrl?: string
  recipient?: Address
  simulate?: Simulate
  validate?: boolean
  apiKey?: string
}

const swapRequestSchema = z
  .object({
    chainId: z.number().int().refine(isSwapApiSupportedChainId),
    tokenIn: szevm.address(),
    tokenOut: szevm.address(),
    amount: z.bigint().positive(),
    sender: szevm.address(),
    maxSlippage: z.number().gte(0).lt(1),
    maxPriceImpact: z.number().positive().lte(1).optional(),
    takeSurplus: z.number().int().min(0).max(1000).optional(),
    target: z.enum(['RP', 'routeCode']).optional(),
    source: z.enum(RouterLiquiditySource).optional(),
    fee: z.number().gte(0).lte(0.5).optional(),
    feeReceiver: szevm.address().optional(),
    feeBy: z.enum(TransferValue).optional(),
    referrer: z.string().min(1).optional(),
    baseUrl: z.url().optional(),
    recipient: szevm.address().optional(),
    simulate: z.boolean().optional(),
    validate: z.boolean().optional(),
    apiKey: z.string().min(1).optional(),
  })
  .superRefine((params, ctx) => {
    if (params.fee && !params.feeReceiver) {
      ctx.addIssue({
        code: 'custom',
        message: 'Fee receiver is required when fee is set',
        path: ['feeReceiver'],
      })
    }
    if (params.feeReceiver && !params.fee) {
      ctx.addIssue({
        code: 'custom',
        message: 'Fee is required when fee receiver is set',
        path: ['fee'],
      })
    }
  })

function swapResponseSchema<
  Simulate extends boolean,
  Target extends SwapTarget | undefined = undefined,
>(simulate?: Simulate, target?: Target) {
  const tokenSchema = z.object({
    address: szevm.address(),
    decimals: z.number(),
    symbol: z.string(),
    name: z.string(),
  })

  const txSchema = z.object({
    from: szevm.address(),
    to: szevm.address(),
    gasPrice: z.number(),
    data: sz.hex(),
    value: z
      .string()
      .optional()
      .transform((value) => BigInt(value || 0)),
  })

  const baseSuccessPartialObject = z.object({
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

  const baseSuccessPartial = baseSuccessPartialObject.transform((data) => ({
    ...data,
    tokenFrom: data.tokens[data.tokenFrom]!,
    tokenTo: data.tokens[data.tokenTo]!,
  }))

  const baseNoWay = z.object({
    status: z.literal(RouteStatus.NoWay),
  })

  const baseSchema = baseSuccessPartial.or(baseNoWay)
  const rpSchema = baseSuccessPartialObject
    .extend({ tx: txSchema.omit({ gasPrice: true }) })
    .transform((data) => ({
      ...data,
      tokenFrom: data.tokens[data.tokenFrom]!,
      tokenTo: data.tokens[data.tokenTo]!,
    }))
    .or(baseNoWay)
  const routeCodeSchema = z.object({ routeCode: sz.hex() }).or(baseNoWay)
  const baseSimulateSchema = baseSchema
    .and(z.object({ tx: txSchema.extend({ gas: z.string() }) }))
    .or(baseNoWay)
  type Schema = Target extends 'routeCode'
    ? typeof routeCodeSchema
    : Target extends 'RP'
      ? typeof rpSchema
      : Simulate extends true
        ? typeof baseSimulateSchema
        : typeof baseSchema

  return (
    target === 'routeCode'
      ? routeCodeSchema
      : target === 'RP'
        ? rpSchema
        : simulate
          ? baseSimulateSchema
          : baseSchema
  ) as Schema
}

export type SwapResponse<
  Simulate extends boolean = true,
  Target extends SwapTarget | undefined = undefined,
> = z.infer<ReturnType<typeof swapResponseSchema<Simulate, Target>>>

export async function getSwap<
  Simulate extends boolean = true,
  Target extends SwapTarget | undefined = undefined,
>(
  params: SwapRequest<Simulate, Target>,
  options?: RequestInit,
): Promise<SwapResponse<Simulate, Target>> {
  params = swapRequestSchema.parse(params) as SwapRequest<Simulate, Target>
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

  if (params.takeSurplus !== undefined) {
    url.searchParams.append('takeSurplus', params.takeSurplus.toString())
  }

  if (params.target !== undefined) {
    url.searchParams.append('target', params.target)
  }

  if (params.recipient) {
    url.searchParams.append('recipient', params.recipient)
  }

  if (
    typeof params.fee === 'number' &&
    params.fee > 0 &&
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

  return swapResponseSchema(params.simulate, params.target).parse(
    await res.json(),
  ) as SwapResponse<Simulate, Target>
}
