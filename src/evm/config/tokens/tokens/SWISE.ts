import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const SWISE_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0x48c3399719b582dd63eb5aadf12a40b4c3f52fa2',
} as const

export const SWISE = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'SWISE',
    name: 'StakeWise',
  },
  SWISE_ADDRESS,
)
