import { TvmChainId } from '../../../chain/chains.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const USDCOLD_ADDRESS = {
  [TvmChainId.TRON]: 'TEkxiTehnzSmSe2XqrBj4w32RUN966rdz8',
} as const

export const USDCOLD = addressMapToTokenMap(
  {
    decimals: 6,
    symbol: 'USDCOLD',
    name: 'USD Coin Old',
    //logoURI: 'https://static.tronscan.org/production/upload/logo/TEkxiTehnzSmSe2XqrBj4w32RUN966rdz81.png',
  },
  USDCOLD_ADDRESS,
)
