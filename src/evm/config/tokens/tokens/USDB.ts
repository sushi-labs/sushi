import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const USDB_ADDRESS = {
  [EvmChainId.BLAST]: '0x4300000000000000000000000000000000000003',
} as const

export const USDB = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'USDB',
    name: 'USD Blast',
  },
  USDB_ADDRESS,
)
