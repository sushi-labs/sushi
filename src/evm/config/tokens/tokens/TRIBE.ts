import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const TRIBE_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0xc7283b66eb1eb5fb86327f08e1b5816b0720212b',
} as const

export const TRIBE = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'TRIBE',
    name: 'Tribe',
  },
  TRIBE_ADDRESS,
)
