import { TvmChainId } from '../../chain/chains.js'
import type { TvmAddress } from '../../currency/token.js'

export const MULTICALL_SUPPORTED_CHAIN_IDS = [TvmChainId.TRON] as const

export const MulticallChainIds = MULTICALL_SUPPORTED_CHAIN_IDS

export type MulticallChainId = (typeof MULTICALL_SUPPORTED_CHAIN_IDS)[number]

export const isMulticallChainId = (
  chainId: number,
): chainId is MulticallChainId =>
  MULTICALL_SUPPORTED_CHAIN_IDS.includes(chainId as MulticallChainId)

export const MULTICALL_ADDRESS: Record<MulticallChainId, TvmAddress> = {
  [TvmChainId.TRON]: 'TGXuuKAb4bnrn137u39EKbYzKNXvdCes98',
}
