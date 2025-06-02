import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const TEL_ADDRESS = {
  [EvmChainId.POLYGON]: '0xdF7837DE1F2Fa4631D716CF2502f8b230F1dcc32',
} as const

export const TEL = addressMapToTokenMap(
  {
    decimals: 2,
    symbol: 'TEL',
    name: 'Telcoin',
  },
  TEL_ADDRESS,
)
