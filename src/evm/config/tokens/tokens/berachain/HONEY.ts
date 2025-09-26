import { EvmChainId } from '../../../../chain/index.js'
import { addressMapToTokenMap } from '../../address-map-to-token-map.js'

export const BERACHAIN_HONEY_ADDRESS = {
  [EvmChainId.BERACHAIN]: '0xfcbd14dc51f0a4d49d5e53c2e0950e0bc26d0dce',
} as const

export const BERACHAIN_HONEY = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'HONEY',
    name: 'Honey',
  },
  BERACHAIN_HONEY_ADDRESS,
)
