import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const KNCv2_ADDRESS = {
  [EvmChainId.POLYGON]: '0x1C954E8fe737F99f68Fa1CCda3e51ebDB291948C',
} as const

export const KNCv2 = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'KNCv2',
    name: 'Kyber Network Crystal V2',
  },
  KNCv2_ADDRESS,
)
