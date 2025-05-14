import type { Address } from 'viem'
import { EvmChainId } from '../../chain/evm/index.js'

export const PANCAKESWAP_INFINITY_CL_POOL_MANAGER: Record<
  PancakeSwapInfinityChainId,
  Address
> = {
  [EvmChainId.BSC]: '0xa0FfB9c1CE1Fe56963B0321B32E7A0302114058b',
} as const

export const PANCAKESWAP_INFINITY_SUPPORTED_CHAIN_IDS = [
  EvmChainId.BSC,
] as const

export const PancakeSwapInfinityChainIds =
  PANCAKESWAP_INFINITY_SUPPORTED_CHAIN_IDS

export type PancakeSwapInfinityChainId =
  (typeof PANCAKESWAP_INFINITY_SUPPORTED_CHAIN_IDS)[number]

export const isPancakeSwapInfinityChainId = (
  chainId: EvmChainId,
): chainId is PancakeSwapInfinityChainId =>
  PANCAKESWAP_INFINITY_SUPPORTED_CHAIN_IDS.includes(
    chainId as PancakeSwapInfinityChainId,
  )
