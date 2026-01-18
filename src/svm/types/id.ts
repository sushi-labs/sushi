import type { ID } from '../../generic/types/id.js'
import type { SvmChainId } from '../chain/chains.js'
import type { SvmAddress } from '../currency/token.js'

export type SvmID<TIncludeNative extends boolean = false> = ID<
  SvmChainId,
  SvmAddress,
  TIncludeNative
>
