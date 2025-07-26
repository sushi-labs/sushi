import { TvmChainId } from '../../../chain/chains.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const SUNCAT_ADDRESS = {
  [TvmChainId.TRON]: 'TAwAg9wtQzTMFsijnSFotJrpxhMm3AqW1d',
} as const

export const SUNCAT = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'SUNCAT',
    name: 'SUNCAT',
    //logoURI: 'https://cdn.sunpump.meme/public/logo/SUNCAT_TWj3Mp_ynpQjPlfRZu9.jpeg',
  },
  SUNCAT_ADDRESS,
)
