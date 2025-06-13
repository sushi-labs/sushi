import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const GNS_ADDRESS = {
  [EvmChainId.POLYGON]: '0xE5417Af564e4bFDA1c483642db72007871397896',
} as const

export const GNS = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'GNS',
    name: 'Gains Network',
  },
  GNS_ADDRESS,
)
