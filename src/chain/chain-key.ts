import { EvmChainKey } from './evm/index.js'
import type { ChainId } from './id.js'
import { MvmChainKey, TvmChainKey } from './non-evm/index.js'

export const ChainKey = {
  ...EvmChainKey,
  ...MvmChainKey,
  ...TvmChainKey,
} as const satisfies Record<ChainId, string>
export type ChainKey = (typeof ChainKey)[keyof typeof ChainKey]

export const ChainNetworkNameKey = Object.fromEntries(
  Object.entries(ChainKey).map(([key, value]) => [value, Number(key)]),
) as { [key in ChainKey]: ChainId }

export const isChainNetworkNameKey = (key: string): key is ChainKey =>
  Object.keys(ChainNetworkNameKey).includes(key)
