import { TvmChainId } from '~tvm/chain/chains.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const BTC_ADDRESS = {
  [TvmChainId.TRON]: 'TN3W4H6rK2ce4vX9YnFQHwKENnHjoxb3m9',
} as const

export const BTC = addressMapToTokenMap(
  {
    decimals: 8,
    symbol: 'BTC',
    name: 'Bitcoin',
    //logoURI: 'https://static.tronscan.org/production/logo/TN3W4H6rK2ce4vX9YnFQHwKENnHjoxb3m9.png',
  },
  BTC_ADDRESS,
)
