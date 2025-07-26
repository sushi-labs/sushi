import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const KLIMA_ADDRESS = {
  [EvmChainId.POLYGON]: '0x4e78011ce80ee02d2c3e649fb657e45898257815',
} as const

export const KLIMA = addressMapToTokenMap(
  {
    decimals: 9,
    symbol: 'KLIMA',
    name: 'Klima DAO',
  },
  KLIMA_ADDRESS,
)
