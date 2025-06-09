import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const COMP_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0xc00e94Cb662C3520282E6f5717214004A7f26888',
} as const

export const COMP = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'COMP',
    name: 'Compound ',
  },
  COMP_ADDRESS,
)
