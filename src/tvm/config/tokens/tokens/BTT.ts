import { TvmChainId } from '../../../chain/chains.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const BTT_ADDRESS = {
  [TvmChainId.TRON]: 'TAFjULxiVgT4qWk6UZwjqwZXTSaGaqnVp4',
} as const

export const BTT = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'BTT',
    name: 'BitTorrent',
    //logoURI: 'https://static.tronscan.org/production/logo/1002000.png',
  },
  BTT_ADDRESS,
)
