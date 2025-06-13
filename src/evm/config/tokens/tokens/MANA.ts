import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const MANA_ADDRESS = {
  [EvmChainId.POLYGON]: '0xA1c57f48F0Deb89f569dFbE6E2B7f46D33606fD4',
} as const

export const MANA = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'MANA',
    name: 'Decentraland',
  },
  MANA_ADDRESS,
)
