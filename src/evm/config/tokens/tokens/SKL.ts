import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const SKL_ADDRESS = {
  [EvmChainId.SKALE_EUROPA]: '0xE0595a049d02b7674572b0d59cd4880Db60EDC50',
} as const

export const SKL = addressMapToTokenMap(
  { name: 'SKALE', symbol: 'SKL', decimals: 18 },
  SKL_ADDRESS,
)
