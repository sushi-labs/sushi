import { TvmChainId } from '~tvm/chain/chains.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const TWX_ADDRESS = {
  [TvmChainId.TRON]: 'TTFreuJ4pYDaCeEMEtiR1GQDwPPrS4jKFk',
} as const

export const TWX = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'TWX',
    name: 'Twiskers',
    //logoURI: 'https://cdn.sunpump.meme/public/logo/TWX_TF8z6B_bQu1A9s9Wox2.png',
  },
  TWX_ADDRESS,
)
