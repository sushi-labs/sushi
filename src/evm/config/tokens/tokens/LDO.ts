import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const LDO_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0x5a98fcbea516cf06857215779fd812ca3bef1b32',
} as const

export const LDO = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'LDO',
    name: 'Lido DAO Token',
  },
  LDO_ADDRESS,
)
