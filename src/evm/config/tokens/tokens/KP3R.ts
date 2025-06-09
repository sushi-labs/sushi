import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const KP3R_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0x1cEB5cB57C4D4E2b2433641b95Dd330A33185A44',
} as const

export const KP3R = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'KP3R',
    name: 'Keep3rV1',
  },
  KP3R_ADDRESS,
)
