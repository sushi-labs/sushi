import type { Address } from 'viem'
import type { TransferValue } from '../router/transfer-value.js'
import { request } from './request.js'

export interface SwapRequest {
  chainId: number
  tokenIn: Address
  tokenOut: Address
  amount: bigint
  maxSlippage: number
  gasPrice: bigint
  to?: Address
  enableFee?: boolean
  feeReceiver?: Address
  fee?: bigint
  feeBy?: TransferValue
}

export async function getSwap(params: SwapRequest, options?: RequestInit) {
  const url = new URL(`swap/v5/${params.chainId}`, 'https://api.sushi.com')
  url.searchParams.append('tokenIn', params.tokenIn)
  url.searchParams.append('tokenOut', params.tokenOut)
  url.searchParams.append('amount', params.amount.toString())
  url.searchParams.append('maxSlippage', params.maxSlippage.toString())
  url.searchParams.append('gasPrice', params.gasPrice.toString())
  if (params?.to) url.searchParams.append('to', params.to)
  if (params?.enableFee)
    url.searchParams.append('enableFee', params.enableFee.toString())
  if (params?.feeReceiver)
    url.searchParams.append('feeReceiver', params.feeReceiver)
  if (params?.fee) url.searchParams.append('fee', params.fee.toString())
  if (params?.feeBy) url.searchParams.append('feeBy', params.feeBy)
  url.searchParams.append('includeTransaction', 'true')
  return request(url.toString(), options)
}
