import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const TEL_ADDRESS = {
  [EvmChainId.POLYGON]: '0xdf7837de1f2fa4631d716cf2502f8b230f1dcc32',
} as const

export const TEL = addressMapToTokenMap(
  {
    decimals: 2,
    symbol: 'TEL',
    name: 'Telcoin',
  },
  TEL_ADDRESS,
)
