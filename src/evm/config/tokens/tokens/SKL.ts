import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const SKL_ADDRESS = {
  [EvmChainId.SKALE_EUROPA]: '0xe0595a049d02b7674572b0d59cd4880db60edc50',
} as const

export const SKL = addressMapToTokenMap(
  { name: 'SKALE', symbol: 'SKL', decimals: 18 },
  SKL_ADDRESS,
)
