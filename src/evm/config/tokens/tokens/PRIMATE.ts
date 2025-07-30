import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const PRIMATE_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0x46e98ffe40e408ba6412beb670507e083c8b95ff',
} as const

export const PRIMATE = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'PRIMATE',
    name: 'PRIMATE',
  },
  PRIMATE_ADDRESS,
)
