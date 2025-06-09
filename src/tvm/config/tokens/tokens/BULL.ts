import { TvmChainId } from '~tvm/chain/chains.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const BULL_ADDRESS = {
  [TvmChainId.TRON]: 'TAt4ufXFaHZAEV44ev7onThjTnF61SEaEM',
} as const

export const BULL = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'BULL',
    name: 'Tron Bull',
    //logoURI: 'https://cdn.sunpump.meme/public/logo/BULL_TYvwPp_negdGNxhFCpp.png',
  },
  BULL_ADDRESS,
)
