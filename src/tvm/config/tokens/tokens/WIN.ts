import { TvmChainId } from '../../../chain/chains.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const WIN_ADDRESS = {
  [TvmChainId.TRON]: 'TLa2f6VPqDgRE67v1736s7bJ8Ray5wYjU7',
} as const

export const WIN = addressMapToTokenMap(
  {
    decimals: 6,
    symbol: 'WIN',
    name: 'WINK',
    //logoURI: 'https://static.tronscan.org/profile_images/JKtJTydD_400x400.jpg',
  },
  WIN_ADDRESS,
)
