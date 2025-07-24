import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const XSUSHI_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0x8798249c2e607446efb7ad49ec89dd1865ff4272',
  [EvmChainId.POLYGON]: '0x6811079e3c63ed96eb005384d7e7ec8810e3d521',
} as const

export const XSUSHI = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'XSUSHI',
    name: 'SushiBar',
  },
  XSUSHI_ADDRESS,
)
