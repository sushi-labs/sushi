import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const OCEAN_ADDRESS = {
  [EvmChainId.POLYGON]: '0x282d8efCe846A88B159800bd4130ad77443Fa1A1',
} as const

export const OCEAN = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'OCEAN',
    name: 'Ocean Token',
  },
  OCEAN_ADDRESS,
)
