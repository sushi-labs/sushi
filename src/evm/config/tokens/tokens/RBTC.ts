import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const RBTC_ADDRESS = {
  [EvmChainId.ROOTSTOCK]: '0x542fDA317318eBF1d3DEAf76E0b632741A7e677d',
} as const

export const RBTC = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'RBTC',
    name: 'Rootstock Smart Bitcoin',
  },
  RBTC_ADDRESS,
)
