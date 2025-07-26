import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const FEI_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0x956f47f50a910163d8bf957cf5846d573e7f87ca',
} as const

export const FEI = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'FEI',
    name: 'Fei USD',
  },
  FEI_ADDRESS,
)
