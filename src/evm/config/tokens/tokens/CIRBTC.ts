import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const CIRBTC_ADDRESS = {
  [EvmChainId.ARC]: '0x171a4217b86a807a64eb94757db6849fb4bdbaa0',
} as const

export const CIRBTC = addressMapToTokenMap(
  {
    decimals: 8,
    symbol: 'CIRBTC',
    name: 'Circle Wrapped BTC',
  },
  CIRBTC_ADDRESS,
)
