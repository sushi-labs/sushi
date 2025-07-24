import { TvmChainId } from '../../../chain/chains.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const WHALE_ADDRESS = {
  [TvmChainId.TRON]: 'TWP6GgtstiuYbpygSFcZLzJQrj9eDVQcq2',
} as const

export const WHALE = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'WHALE',
    name: 'Crypto Whale',
    //logoURI: 'https://cdn.sunpump.meme/public/logo/WHALE_TDnHMp_YlFkVV8WBOWL.png',
  },
  WHALE_ADDRESS,
)
