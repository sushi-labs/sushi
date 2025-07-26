import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const OCEAN_ADDRESS = {
  [EvmChainId.POLYGON]: '0x282d8efce846a88b159800bd4130ad77443fa1a1',
} as const

export const OCEAN = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'OCEAN',
    name: 'Ocean Token',
  },
  OCEAN_ADDRESS,
)
