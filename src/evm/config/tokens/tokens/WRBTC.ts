import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const WRBTC_ADDRESS = {
  [EvmChainId.ROOTSTOCK]: '0x542fda317318ebf1d3deaf76e0b632741a7e677d',
} as const

export const WRBTC = addressMapToTokenMap(
  {
    decimals: 18,
    name: 'Wrapped BTC',
    symbol: 'WRBTC',
  },
  WRBTC_ADDRESS,
)
