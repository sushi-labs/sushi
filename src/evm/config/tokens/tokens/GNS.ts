import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const GNS_ADDRESS = {
  [EvmChainId.POLYGON]: '0xe5417af564e4bfda1c483642db72007871397896',
} as const

export const GNS = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'GNS',
    name: 'Gains Network',
  },
  GNS_ADDRESS,
)
