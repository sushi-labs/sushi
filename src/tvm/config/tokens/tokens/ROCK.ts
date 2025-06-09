import { TvmChainId } from '~tvm/chain/chains.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const ROCK_ADDRESS = {
  [TvmChainId.TRON]: 'TJvwMR3RjHc8jA9QwwjWGANrR3Y4scLSZm',
} as const

export const ROCK = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'ROCK',
    name: 'ROCK',
    //logoURI: 'https://cdn.sunpump.meme/public/logo/ROCK_TK157u_SW8560kjmR1W.jpeg',
  },
  ROCK_ADDRESS,
)
