import { TvmChainId } from '~tvm/chain/chains.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const WBTC_ADDRESS = {
  [TvmChainId.TRON]: 'TXpw8XeWYeTUd4quDskoUqeQPowRh4jY65',
} as const

export const WBTC = addressMapToTokenMap(
  {
    decimals: 8,
    symbol: 'WBTC',
    name: 'Wrapped BTC',
    //logoURI: 'https://static.tronscan.org/production/logo/TXpw8XeWYeTUd4quDskoUqeQPowRh4jY65.png',
  },
  WBTC_ADDRESS,
)
