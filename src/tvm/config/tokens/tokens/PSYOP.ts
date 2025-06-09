import { TvmChainId } from '~tvm/chain/chains.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const PSYOP_ADDRESS = {
  [TvmChainId.TRON]: 'TBFr8v7HkKGydiHAjDL8NzqYf7cJqNsTVY',
} as const

export const PSYOP = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'PSYOP',
    name: 'PSYOPTRON',
    //logoURI: 'https://cdn.sunpump.meme/public/logo/PSYOP_TEX3q5_JlNNNeGizAHQ.png',
  },
  PSYOP_ADDRESS,
)
