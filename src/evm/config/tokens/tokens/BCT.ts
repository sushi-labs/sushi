import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const BCT_ADDRESS = {
  [EvmChainId.POLYGON]: '0x2f800db0fdb5223b3c3f354886d907a671414a7f',
} as const

export const BCT = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'BCT',
    name: 'Toucan Protocol: Base Carbon Tonne',
  },
  BCT_ADDRESS,
)
