import { TvmChainId } from '../../../chain/chains.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const WTRX_ADDRESS = {
  [TvmChainId.TRON]: 'TNUC9Qb1rRpS5CbWLmNMxXBjyFoydXjWFR',
} as const

export const WTRX = addressMapToTokenMap(
  {
    decimals: 6,
    symbol: 'WTRX',
    name: 'Wrapped TRX',
    //logoURI: 'https://static.tronscan.org/production/upload/logo/TNUC9Qb1rRpS5CbWLmNMxXBjyFoydXjWFR.png',
  },
  WTRX_ADDRESS,
)
