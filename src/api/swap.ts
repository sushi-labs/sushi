import type { Address } from 'viem'
import type { Hex } from 'viem'
import type { RouteStatus } from '../router/route-status.js'
import type { TransferValue } from '../router/transfer-value.js'

export interface SwapRequest {
  chainId: number
  tokenIn: Address
  tokenOut: Address
  amount: bigint
  maxSlippage: number
  maxPriceImpact?: number
  gasPrice?: bigint
  to?: Address
  enableFee?: boolean
  feeReceiver?: Address
  fee?: bigint
  feeBy?: TransferValue
  includeTransaction?: boolean
}

export type SwapResponse =
  | { status: typeof RouteStatus.NoWay }
  | {
      status: typeof RouteStatus.Success | typeof RouteStatus.Partial
      swapPrice: number
      priceImpact: number
      amountIn: string
      assumedAmountOut: string
      tx: { from: Address; to: Address; data: Hex; value: bigint }
    }

export async function getSwap(params: SwapRequest, options?: RequestInit) {
  // TODO: VALIDATE PARAMS
  const url = new URL(`swap/v5/${params.chainId}`, 'https://api.sushi.com')
  url.searchParams.append('tokenIn', params.tokenIn)
  url.searchParams.append('tokenOut', params.tokenOut)
  url.searchParams.append('amount', params.amount.toString())
  url.searchParams.append('maxSlippage', params.maxSlippage.toString())
  if (params?.maxPriceImpact)
    url.searchParams.append('maxPriceImpact', params.maxPriceImpact.toString())
  if (params?.gasPrice)
    url.searchParams.append('gasPrice', params.gasPrice.toString())
  if (params?.to) url.searchParams.append('to', params.to)
  if (params?.enableFee && params?.fee && params?.feeReceiver) {
    url.searchParams.append('enableFee', params.enableFee.toString())
    url.searchParams.append('fee', params.fee.toString())
    url.searchParams.append('feeReceiver', params.feeReceiver)
    if (params?.feeBy) url.searchParams.append('feeBy', params.feeBy)
  }
  if (params?.includeTransaction)
    url.searchParams.append(
      'includeTransaction',
      params.includeTransaction.toString(),
    )
  const res = await fetch(url.toString(), options)
  return res.json() as Promise<SwapResponse>
}
