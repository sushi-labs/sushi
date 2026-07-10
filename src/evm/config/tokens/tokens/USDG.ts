import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const USDG_ADDRESS = {
  [EvmChainId.ROBINHOOD]: '0x5fc5360d0400a0fd4f2af552add042d716f1d168',
} as const

export const USDG = addressMapToTokenMap(
  {
    decimals: 6,
    symbol: 'USDG',
    name: 'Global Dollar',
  },
  USDG_ADDRESS,
)
