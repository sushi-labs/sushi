import { TvmChainId } from '~tvm/chain/chains.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const stUSDT_ADDRESS = {
  [TvmChainId.TRON]: 'TThzxNRLrW2Brp9DcTQU8i4Wd9udCWEdZ3',
} as const

export const stUSDT = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'stUSDT',
    name: 'Staked USDT',
    //logoURI: 'https://static.tronscan.org/production/upload/logo/new/stUSDT_logo.png',
  },
  stUSDT_ADDRESS,
)
