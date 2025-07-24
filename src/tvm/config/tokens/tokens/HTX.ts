import { TvmChainId } from '../../../chain/chains.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const HTX_ADDRESS = {
  [TvmChainId.TRON]: 'TUPM7K8REVzD2UdV4R5fe5M8XbnR2DdoJ6',
} as const

export const HTX = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'HTX',
    name: 'HTX',
    //logoURI: 'https://static.tronscan.org/production/upload/logo/new/HTX.png',
  },
  HTX_ADDRESS,
)
