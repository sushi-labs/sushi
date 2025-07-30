import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const KNCv2_ADDRESS = {
  [EvmChainId.POLYGON]: '0x1c954e8fe737f99f68fa1ccda3e51ebdb291948c',
} as const

export const KNCv2 = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'KNCv2',
    name: 'Kyber Network Crystal V2',
  },
  KNCv2_ADDRESS,
)
