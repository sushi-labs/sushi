import { TvmChainId } from '~tvm/chain/chains.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const SUNOLD_ADDRESS = {
  [TvmChainId.TRON]: 'TKkeiboTkxXKJpbmVFbv4a8ov5rAfRDMf9',
} as const

export const SUNOLD = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'SUNOLD',
    name: 'SUNOLD',
    //logoURI: 'https://static.tronscan.org/production/logo/SUNLogo.178d4636.png',
  },
  SUNOLD_ADDRESS,
)
