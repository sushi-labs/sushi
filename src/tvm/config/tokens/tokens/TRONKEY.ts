import { TvmChainId } from '~tvm/chain/chains.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const TRONKEY_ADDRESS = {
  [TvmChainId.TRON]: 'TRHsKfoPJxFHnJ4wJ8Zc9nmSNAyaNYqff7',
} as const

export const TRONKEY = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'TRONKEY',
    name: 'TRONKEY',
    //logoURI: 'https://cdn.sunpump.meme/public/logo/TRONKEY_TVFkWK_9m3fDI3ioDiW.jpeg',
  },
  TRONKEY_ADDRESS,
)
