import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const GALA_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0x15d4c048f83bd7e37d49ea4c83a07267ec4203da',
} as const

export const GALA = addressMapToTokenMap(
  {
    decimals: 8,
    symbol: 'GALA',
    name: 'Gala',
  },
  GALA_ADDRESS,
)
