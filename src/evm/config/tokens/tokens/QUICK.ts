import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const QUICK_ADDRESS = {
  [EvmChainId.POLYGON]: '0x831753dd7087cac61ab5644b308642cc1c33dc13',
} as const

export const QUICK = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'QUICK',
    name: 'Quickswap',
  },
  QUICK_ADDRESS,
)
