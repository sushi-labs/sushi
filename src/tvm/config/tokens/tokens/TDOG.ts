import { TvmChainId } from '../../../chain/chains.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const TDOG_ADDRESS = {
  [TvmChainId.TRON]: 'TAPxMfHHgFyZMHuuz8wL56pi54eB2xkK2q',
} as const

export const TDOG = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'TDOG',
    name: 'Tron Dog',
    //logoURI: 'https://cdn.sunpump.meme/public/logo/TDOG_TW2UbF_SHNKw5HVdKEF.PNG',
  },
  TDOG_ADDRESS,
)
