import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const OPTICS_USDC_ADDRESS = {
  [EvmChainId.CELO]: '0xef4229c8c3250c675f21bcefa42f58efbff6002a',
} as const

export const OPTICS_USDC = addressMapToTokenMap(
  {
    decimals: 6,
    symbol: 'USDC',
    name: 'USD Coin (Optics)',
  },
  OPTICS_USDC_ADDRESS,
)
