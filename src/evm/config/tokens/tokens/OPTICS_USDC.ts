import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const OPTICS_USDC_ADDRESS = {
  [EvmChainId.CELO]: '0xef4229c8c3250C675F21BCefa42f58EfbfF6002a',
} as const

export const OPTICS_USDC = addressMapToTokenMap(
  {
    decimals: 6,
    symbol: 'USDC',
    name: 'USD Coin (Optics)',
  },
  OPTICS_USDC_ADDRESS,
)
