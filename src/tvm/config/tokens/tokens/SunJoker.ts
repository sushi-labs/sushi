import { TvmChainId } from '~tvm/chain/chains.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const SunJoker_ADDRESS = {
  [TvmChainId.TRON]: 'TRGEYcmBSAz3PswhtAHcUPjGbuGr1H9Fza',
} as const

export const SunJoker = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'SunJoker',
    name: 'SunJoker',
    //logoURI: 'https://cdn.sunpump.meme/public/logo/SunJoker_TM2wL8_WsJV6iyQA2Fr.jpg',
  },
  SunJoker_ADDRESS,
)
