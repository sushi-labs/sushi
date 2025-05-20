import { TvmChainId } from './id.js'

export const TvmChainKey = {
  [TvmChainId.TRON]: 'tron',
} as const satisfies Record<TvmChainId, string>
export type TvmChainKey = (typeof TvmChainKey)[keyof typeof TvmChainKey]
