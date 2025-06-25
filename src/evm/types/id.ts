import type { ID } from '~/generic/types/id.js'
import type { EvmChainId } from '../chain/chains.js'
import type { EvmAddress } from '../currency/token.js'

export type EvmID = ID<EvmChainId, EvmAddress>
