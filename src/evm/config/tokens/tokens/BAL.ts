import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const BAL_ADDRESS = {
  [EvmChainId.POLYGON]: '0x9a71012B13CA4d3D0Cdc72A177DF3ef03b0E76A3',
} as const

export const BAL = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'BAL',
    name: 'Balancer',
  },
  BAL_ADDRESS,
)
