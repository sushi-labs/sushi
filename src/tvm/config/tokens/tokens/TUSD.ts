import { TvmChainId } from '~tvm/chain/chains.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const TUSD_ADDRESS = {
  [TvmChainId.TRON]: 'TUpMhErZL2fhh4sVNULAbNKLokS4GjC1F4',
} as const

export const TUSD = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'TUSD',
    name: 'TrueUSD',
    //logoURI: 'https://static.tronscan.org/production/logo/TUpMhErZL2fhh4sVNULAbNKLokS4GjC1F4.png',
  },
  TUSD_ADDRESS,
)
