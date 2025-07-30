import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const SAND_ADDRESS = {
  [EvmChainId.POLYGON]: '0xbbba073c31bf03b8acf7c28ef0738decf3695683',
} as const

export const SAND = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'SAND',
    name: 'SAND',
  },
  SAND_ADDRESS,
)
