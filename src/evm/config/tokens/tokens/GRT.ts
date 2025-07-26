import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const GRT_ADDRESS = {
  [EvmChainId.POLYGON]: '0x5fe2b58c013d7601147dcdd68c143a77499f5531',
} as const

export const GRT = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'GRT',
    name: 'Graph Token',
  },
  GRT_ADDRESS,
)
