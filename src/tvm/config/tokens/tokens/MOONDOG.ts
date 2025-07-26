import { TvmChainId } from '../../../chain/chains.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const MOONDOG_ADDRESS = {
  [TvmChainId.TRON]: 'TMWD9A3N3EhhEhiTCkEESBrVTosNmMJy8T',
} as const

export const MOONDOG = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'MOONDOG',
    name: 'MOONDOG',
    //logoURI: 'https://cdn.sunpump.meme/public/logo/MOONDOG_TQXe52_BoDeNysxsme5.png',
  },
  MOONDOG_ADDRESS,
)
