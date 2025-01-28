import { EvmChainId } from './evm/id.js'
import { AptosChainId } from './non-evm/aptos/id.js'
import { TronChainId } from './non-evm/tron/id.js'

export const ChainId = {
  ...EvmChainId,
  ...AptosChainId,
  ...TronChainId,
} as const

export const chainIdSet = new Set(Object.values(ChainId))

export type ChainId = (typeof ChainId)[keyof typeof ChainId]

export const isChainId = (chainId: number): chainId is ChainId =>
  chainIdSet.has(chainId as ChainId)
