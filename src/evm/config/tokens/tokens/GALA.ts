import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const GALA_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0x15D4c048F83bd7e37d49eA4C83a07267Ec4203dA',
} as const

export const GALA = addressMapToTokenMap(
  {
    decimals: 8,
    symbol: 'GALA',
    name: 'Gala',
  },
  GALA_ADDRESS,
)
