import { TvmChainId } from '~tvm/chain/chains.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const DRGN_ADDRESS = {
  [TvmChainId.TRON]: 'TV5yB8f4AdoAfVVUdkytyZnX5e7SeGAZr2',
} as const

export const DRGN = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'DRGN',
    name: 'Dragon Sun',
    //logoURI: 'https://cdn.sunpump.meme/public/logo/DRGN_TUcY9d_GmJcXp1VNNqz.jpg',
  },
  DRGN_ADDRESS,
)
