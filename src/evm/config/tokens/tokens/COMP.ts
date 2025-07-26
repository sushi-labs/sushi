import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const COMP_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0xc00e94cb662c3520282e6f5717214004a7f26888',
} as const

export const COMP = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'COMP',
    name: 'Compound ',
  },
  COMP_ADDRESS,
)
