import type { ChainId } from '../chain/chains.js'

export type ID<
  TChainId extends ChainId = ChainId,
  TAddress extends string = string,
  TIncludeNative extends boolean = false,
> =
  | `${TChainId}:${TAddress}`
  | (TIncludeNative extends true ? `${TChainId}:NATIVE` : never)
