import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const KP3R_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0x1ceb5cb57c4d4e2b2433641b95dd330a33185a44',
} as const

export const KP3R = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'KP3R',
    name: 'Keep3rV1',
  },
  KP3R_ADDRESS,
)
