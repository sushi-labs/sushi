import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const AERO_ADDRESS = {
  [EvmChainId.BASE]: '0x940181a94a35a4569e4529a3cdfb74e38fd98631',
} as const

export const AERO = addressMapToTokenMap(
  { name: 'Aerodrome', symbol: 'stETH', decimals: 18 },
  AERO_ADDRESS,
)
