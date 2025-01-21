import { EvmChainId } from '../chain/evm/index.js'
import { LDO } from '../currency/index.js'

export const GOVERNANCE = {
  [EvmChainId.ETHEREUM]: [LDO[EvmChainId.ETHEREUM]],
} as const
