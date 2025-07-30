import { TvmChainId } from '../../../chain/chains.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const MEOWKA_ADDRESS = {
  [TvmChainId.TRON]: 'TYpSKB5hfaKpRDwS2p7bait3xuCKYnwDKJ',
} as const

export const MEOWKA = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'MEOWKA',
    name: 'Meowka Neko',
    //logoURI: 'https://cdn.sunpump.meme/public/logo/MEOWKA_TFD7X8_2AtEA0p50jde.PNG',
  },
  MEOWKA_ADDRESS,
)
