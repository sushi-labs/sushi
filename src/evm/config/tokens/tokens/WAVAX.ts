import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const WAVAX_ADDRESS = {
  [EvmChainId.POLYGON]: '0x2C89bbc92BD86F8075d1DEcc58C7F4E0107f286b',
} as const

export const WAVAX = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'WAVAX',
    name: 'Wrapped Avalanche Token',
  },
  WAVAX_ADDRESS,
)
