import { TvmChainId } from '../../../chain/chains.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const USDT_ADDRESS = {
  [TvmChainId.TRON]: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t',
} as const

export const USDT = addressMapToTokenMap(
  {
    decimals: 6,
    symbol: 'USDT',
    name: 'Tether USD',
    //logoURI: 'https://static.tronscan.org/production/logo/usdtlogo.png',
  },
  USDT_ADDRESS,
)
