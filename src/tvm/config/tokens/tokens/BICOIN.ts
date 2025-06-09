import { TvmChainId } from '~tvm/chain/chains.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const BICOIN_ADDRESS = {
  [TvmChainId.TRON]: 'TF7ixydn7nfCgj9wQj3fRdKRAvsZ8egHcx',
} as const

export const BICOIN = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'BICOIN',
    name: 'B1COIN',
    //logoURI: 'https://cdn.sunpump.meme/public/logo/BICOIN_TJvQmL_cpZkc8sGaKuC.png',
  },
  BICOIN_ADDRESS,
)
