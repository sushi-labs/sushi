import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const USDPLUS_ADDRESS = {
  [EvmChainId.BLAST]: '0x4fee793d435c6d2c10c135983bb9d6d4fc7b9bbd',
} as const

export const USDPLUS = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'USD+',
    name: 'USD+',
  },
  USDPLUS_ADDRESS,
)
