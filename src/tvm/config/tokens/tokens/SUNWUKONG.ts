import { TvmChainId } from '~tvm/chain/chains.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const SUNWUKONG_ADDRESS = {
  [TvmChainId.TRON]: 'TP3prcvQknVthrVnn281cKST56eWiLgJJM',
} as const

export const SUNWUKONG = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'SUNWUKONG',
    name: 'SunWukong',
    //logoURI: 'https://cdn.sunpump.meme/public/logo/SUNWUKONG_TCyGhb_xSV6IxtwuU33.png',
  },
  SUNWUKONG_ADDRESS,
)
