import { TvmChainId } from '../../../chain/chains.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const BOG_ADDRESS = {
  [TvmChainId.TRON]: 'TYteXtNLyZb9D6vZatpwvkq52YrdSMP4Y1',
} as const

export const BOG = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'BOG',
    name: 'Birddog',
    //logoURI: 'https://cdn.sunpump.meme/public/logo/BOG_TEuGom_vb57Hpv7PKdK.jpeg',
  },
  BOG_ADDRESS,
)
