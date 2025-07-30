import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const USD_PLUS_ADDRESS = {
  [EvmChainId.BASE]: '0xb79dd08ea68a908a97220c76d19a6aa9cbde4376',
} as const

export const USD_PLUS = addressMapToTokenMap(
  {
    decimals: 6,
    symbol: 'USD+',
    name: 'USD+',
  },
  USD_PLUS_ADDRESS,
)
