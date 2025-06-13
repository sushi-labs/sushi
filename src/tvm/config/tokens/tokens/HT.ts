import { TvmChainId } from '~tvm/chain/chains.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const HT_ADDRESS = {
  [TvmChainId.TRON]: 'TDyvndWuvX5xTBwHPYJi7J3Yq8pq8yh62h',
} as const

export const HT = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'HT',
    name: 'HuobiToken',
    //logoURI: 'https://static.tronscan.org/production/logo/TDyvndWuvX5xTBwHPYJi7J3Yq8pq8yh62h.png',
  },
  HT_ADDRESS,
)
