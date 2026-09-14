import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const EURC_ADDRESS = {
  [EvmChainId.ARC]: '0x89b50855aa3be2f677cd6303cec089b5f319d72a',
} as const

export const EURC = addressMapToTokenMap(
  {
    decimals: 6,
    symbol: 'EURC',
    name: 'EURC',
  },
  EURC_ADDRESS,
)
