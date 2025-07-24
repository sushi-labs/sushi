import { TvmChainId } from '../../../chain/chains.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const SUNDOG_ADDRESS = {
  [TvmChainId.TRON]: 'TXL6rJbvmjD46zeN1JssfgxvSo99qC8MRT',
} as const

export const SUNDOG = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'SUNDOG',
    name: 'Sundog',
    //logoURI: 'https://cdn.sunpump.meme/public/logo/SUNDOG_TXr7if_EzxfYukzq9ZU.png',
  },
  SUNDOG_ADDRESS,
)
