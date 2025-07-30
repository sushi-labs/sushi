import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const WAVAX_ADDRESS = {
  [EvmChainId.POLYGON]: '0x2c89bbc92bd86f8075d1decc58c7f4e0107f286b',
} as const

export const WAVAX = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'WAVAX',
    name: 'Wrapped Avalanche Token',
  },
  WAVAX_ADDRESS,
)
