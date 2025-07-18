import { TvmChainId } from '~tvm/chain/chains.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const WBTT_ADDRESS = {
  [TvmChainId.TRON]: 'TKfjV9RNKJJCqPvBtK8L7Knykh7DNWvnYt',
} as const

export const WBTT = addressMapToTokenMap(
  {
    decimals: 6,
    symbol: 'WBTT',
    name: 'Wrapped BitTorrent',
    //logoURI: 'https://static.tronscan.org/production/logo/TKfjV9RNKJJCqPvBtK8L7Knykh7DNWvnYt.png',
  },
  WBTT_ADDRESS,
)
