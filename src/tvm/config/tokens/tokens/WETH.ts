import { TvmChainId } from '../../../chain/chains.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const WETH_ADDRESS = {
  [TvmChainId.TRON]: 'TXWkP3jLBqRGojUih1ShzNyDaN5Csnebok',
} as const

export const WETH = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'WETH',
    name: 'Wrapped ETH',
    //logoURI: 'https://static.tronscan.org/production/logo/TXWkP3jLBqRGojUih1ShzNyDaN5Csnebok.png',
  },
  WETH_ADDRESS,
)
