import type { ID } from '../../generic/types/id.js'
import type { StellarAddress } from '../address.js'
import type { StellarChainId } from '../chain/chains.js'

export type StellarID<TIncludeNative extends boolean = false> = ID<
  StellarChainId,
  StellarAddress,
  TIncludeNative
>
