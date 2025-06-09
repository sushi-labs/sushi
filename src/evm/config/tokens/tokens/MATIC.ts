import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const MATIC_ADDRESS = {
  [EvmChainId.POLYGON_ZKEVM]: '0xa2036f0538221a77A3937F1379699f44945018d0',
} as const

export const MATIC = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'MATIC',
    name: 'Matic Token',
  },
  MATIC_ADDRESS,
)
