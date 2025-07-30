import { TvmChainId } from '../../../chain/chains.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const FOFAR_ADDRESS = {
  [TvmChainId.TRON]: 'TUFonyWZ4Tza5MzgDj6g2u5rfdGoRVYG7g',
} as const

export const FOFAR = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'FOFAR',
    name: 'FOFAR',
    //logoURI: 'https://cdn.sunpump.meme/public/logo/FOFAR_THQg9C_IavjUsY3Wun7.jpg',
  },
  FOFAR_ADDRESS,
)
