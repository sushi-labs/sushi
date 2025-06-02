import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const OP_ADDRESS = {
  [EvmChainId.OPTIMISM]: '0x4200000000000000000000000000000000000042',
} as const

export const OP = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'OP',
    name: 'Optimism',
  },
  OP_ADDRESS,
)
