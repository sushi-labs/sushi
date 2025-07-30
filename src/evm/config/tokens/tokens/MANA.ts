import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const MANA_ADDRESS = {
  [EvmChainId.POLYGON]: '0xa1c57f48f0deb89f569dfbe6e2b7f46d33606fd4',
} as const

export const MANA = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'MANA',
    name: 'Decentraland',
  },
  MANA_ADDRESS,
)
