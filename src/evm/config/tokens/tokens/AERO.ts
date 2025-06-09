import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const AERO_ADDRESS = {
  [EvmChainId.BASE]: '0x940181a94A35A4569E4529A3CDfB74e38FD98631',
} as const

export const AERO = addressMapToTokenMap(
  { name: 'Aerodrome', symbol: 'stETH', decimals: 18 },
  AERO_ADDRESS,
)
