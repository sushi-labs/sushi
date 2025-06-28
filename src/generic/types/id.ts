import type { ChainId } from '../chain/chains.js'

export type ID<
  TChainId extends ChainId = ChainId,
  TAddress extends string = string,
> = `${TChainId}:${TAddress}` | `${TChainId}:NATIVE`
