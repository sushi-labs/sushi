import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const TRIBE_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0xc7283b66Eb1EB5FB86327f08e1B5816b0720212B',
} as const

export const TRIBE = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'TRIBE',
    name: 'Tribe',
  },
  TRIBE_ADDRESS,
)
