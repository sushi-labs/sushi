import { TvmChainId } from '../../../chain/chains.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const Tcat_ADDRESS = {
  [TvmChainId.TRON]: 'TVgHqeP41s3qMDH3oKBsScEUzvyXw6bKAm',
} as const

export const Tcat = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'Tcat',
    name: 'Tron Cat',
    //logoURI: 'https://cdn.sunpump.meme/public/logo/Tcat_TXv3PZ_f4HN7mpJqQ9V.png',
  },
  Tcat_ADDRESS,
)
