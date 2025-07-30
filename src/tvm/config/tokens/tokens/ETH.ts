import { TvmChainId } from '../../../chain/chains.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const ETH_ADDRESS = {
  [TvmChainId.TRON]: 'TRFe3hT5oYhjSZ6f3ji5FJ7YCfrkWnHRvh',
} as const

export const ETH = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'ETH',
    name: 'Ethereum',
    //logoURI: 'https://static.tronscan.org/production/logo/TRFe3hT5oYhjSZ6f3ji5FJ7YCfrkWnHRvh.png',
  },
  ETH_ADDRESS,
)
