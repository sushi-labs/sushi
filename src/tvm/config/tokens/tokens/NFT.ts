import { TvmChainId } from '../../../chain/chains.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const NFT_ADDRESS = {
  [TvmChainId.TRON]: 'TFczxzPhnThNSqr5by8tvxsdCFRRz6cPNq',
} as const

export const NFT = addressMapToTokenMap(
  {
    decimals: 6,
    symbol: 'NFT',
    name: 'APENFT',
    //logoURI: 'https://static.tronscan.org/production/upload/logo/TFczxzPhnThNSqr5by8tvxsdCFRRz6cPNq.png',
  },
  NFT_ADDRESS,
)
