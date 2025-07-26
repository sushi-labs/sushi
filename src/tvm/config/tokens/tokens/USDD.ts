import { TvmChainId } from '../../../chain/chains.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const USDD_ADDRESS = {
  [TvmChainId.TRON]: 'TPYmHEhy5n8TCEfYGqW2rPxsghSfzghPDn',
} as const

export const USDD = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'USDD',
    name: 'Decentralized USD',
    //logoURI: 'https://static.tronscan.org/production/upload/logo/TPYmHEhy5n8TCEfYGqW2rPxsghSfzghPDn.png',
  },
  USDD_ADDRESS,
)
