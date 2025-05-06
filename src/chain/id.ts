import { EvmChainId } from './evm/id.js'
import { MvmChainId } from './non-evm/mvm/id.js'
import { TvmChainId } from './non-evm/tvm/id.js'

export const ChainId = {
  ...EvmChainId,
  ...MvmChainId,
  ...TvmChainId,
} as const

export type ChainId = (typeof ChainId)[keyof typeof ChainId]

export const isChainId = (chainId: number | string): chainId is ChainId =>
  Object.values(ChainId).includes(chainId as ChainId)
