import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const RNDR_ADDRESS = {
  [EvmChainId.POLYGON]: '0x61299774020da444af134c82fa83e3810b309991',
} as const

export const RNDR = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'RNDR',
    name: 'Render Token',
  },
  RNDR_ADDRESS,
)
