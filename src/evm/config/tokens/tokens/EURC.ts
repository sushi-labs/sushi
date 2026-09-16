import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const EURC_ADDRESS = {
  [EvmChainId.ARC]: '0xbef5f6d51cb62b58e6a8f77868681825c6fe21c1',
} as const

export const EURC = addressMapToTokenMap(
  {
    decimals: 6,
    symbol: 'EURC',
    name: 'EURC',
  },
  EURC_ADDRESS,
)
