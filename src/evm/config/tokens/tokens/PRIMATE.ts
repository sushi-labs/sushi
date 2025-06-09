import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const PRIMATE_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0x46e98FFE40E408bA6412bEb670507e083C8B95ff',
} as const

export const PRIMATE = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'PRIMATE',
    name: 'PRIMATE',
  },
  PRIMATE_ADDRESS,
)
