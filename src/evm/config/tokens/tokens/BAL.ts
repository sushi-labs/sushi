import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const BAL_ADDRESS = {
  [EvmChainId.POLYGON]: '0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3',
} as const

export const BAL = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'BAL',
    name: 'Balancer',
  },
  BAL_ADDRESS,
)
