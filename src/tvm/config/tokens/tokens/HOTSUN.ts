import { TvmChainId } from '~tvm/chain/chains.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const HOTSUN_ADDRESS = {
  [TvmChainId.TRON]: 'TCXTVfR7pFH8voLyqhbUGXdiYaBkTDmYCQ',
} as const

export const HOTSUN = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'HOTSUN',
    name: 'HOTSUN',
    //logoURI: 'https://cdn.sunpump.meme/public/logo/HOTSUN_TUueYg_emDoYuKXklz4.jpeg',
  },
  HOTSUN_ADDRESS,
)
