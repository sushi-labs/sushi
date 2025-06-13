import { TvmChainId } from '~tvm/chain/chains.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const SUNDOGE_ADDRESS = {
  [TvmChainId.TRON]: 'TAz6oGWhsmHPp7Ap6khmAYxjfHFYokqdQ4',
} as const

export const SUNDOGE = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'SUNDOGE',
    name: 'SUNDOGE',
    //logoURI: 'https://cdn.sunpump.meme/public/logo/SUNDOGE_THL9Hf_XQ7Lq2GubqOE.PNG',
  },
  SUNDOGE_ADDRESS,
)
