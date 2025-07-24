import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const JUGNI_ADDRESS = {
  [EvmChainId.POLYGON]: '0xe313bcb77dba15f39ff0b9ceabe140cedd0953cb',
} as const

export const JUGNI = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'JUGNI',
    name: 'Jugni',
  },
  JUGNI_ADDRESS,
)
