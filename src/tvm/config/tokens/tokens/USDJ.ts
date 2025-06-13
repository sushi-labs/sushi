import { TvmChainId } from '~tvm/chain/chains.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const USDJ_ADDRESS = {
  [TvmChainId.TRON]: 'TMwFHYXLJaRUPeW6421aqXL4ZEzPRFGkGT',
} as const

export const USDJ = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'USDJ',
    name: 'JUST Stablecoin v1.0',
    //logoURI: 'https://static.tronscan.org/production/logo/usdj.png',
  },
  USDJ_ADDRESS,
)
