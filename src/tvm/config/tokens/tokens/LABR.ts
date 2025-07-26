import { TvmChainId } from '../../../chain/chains.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const LABR_ADDRESS = {
  [TvmChainId.TRON]: 'TMEvVHCUngZ6JfuvnH74cX8UFw1KedAuhR',
} as const

export const LABR = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'LABR',
    name: 'Labrador',
    //logoURI: 'https://cdn.sunpump.meme/public/logo/LABR_TTGSZE_HG9I7qi3BY11.png',
  },
  LABR_ADDRESS,
)
