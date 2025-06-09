import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const SAND_ADDRESS = {
  [EvmChainId.POLYGON]: '0xBbba073C31bF03b8ACf7c28EF0738DeCF3695683',
} as const

export const SAND = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'SAND',
    name: 'SAND',
  },
  SAND_ADDRESS,
)
