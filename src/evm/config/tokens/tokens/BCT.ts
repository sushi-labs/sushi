import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const BCT_ADDRESS = {
  [EvmChainId.POLYGON]: '0x2F800Db0fdb5223b3C3f354886d907A671414A7F',
} as const

export const BCT = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'BCT',
    name: 'Toucan Protocol: Base Carbon Tonne',
  },
  BCT_ADDRESS,
)
