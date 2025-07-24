import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const RBTC_ADDRESS = {
  [EvmChainId.ROOTSTOCK]: '0x542fda317318ebf1d3deaf76e0b632741a7e677d',
} as const

export const RBTC = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'RBTC',
    name: 'Rootstock Smart Bitcoin',
  },
  RBTC_ADDRESS,
)
