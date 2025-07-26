import { TvmChainId } from '../../chain/chains.js'
import type { TvmAddress } from '../../currency/token.js'

export const SWAP_SUPPORTED_CHAIN_IDS = [TvmChainId.TRON] as const

export const SwapChainIds = SWAP_SUPPORTED_CHAIN_IDS

export type SwapChainId = (typeof SWAP_SUPPORTED_CHAIN_IDS)[number]

export const isSwapChainId = (chainId: number): chainId is SwapChainId =>
  SWAP_SUPPORTED_CHAIN_IDS.includes(chainId as SwapChainId)

export const SWAP_FACTORY_ADDRESS: Record<SwapChainId, TvmAddress> = {
  [TvmChainId.TRON]: 'TPA5vJu579Ub5BRXETiEYZUs1SmGh7cDia',
}

export const SWAP_ROUTER_ADDRESS: Record<SwapChainId, TvmAddress> = {
  [TvmChainId.TRON]: 'TGXuuKAb4bnrn137u39EKbYzKNXvdCes98',
}
