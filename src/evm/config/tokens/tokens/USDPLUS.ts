import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const USDPLUS_ADDRESS = {
  [EvmChainId.BLAST]: '0x4fEE793d435c6D2c10C135983BB9d6D4fC7B9BBd',
} as const

export const USDPLUS = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'USD+',
    name: 'USD+',
  },
  USDPLUS_ADDRESS,
)
