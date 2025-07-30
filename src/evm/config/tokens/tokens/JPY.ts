import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const JPY_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0x431d5dff03120afa4bdf332c61a6e1766ef37bdb',
  [EvmChainId.POLYGON]: '0x6ae7dfc73e0dde2aa99ac063dcf7e8a63265108c',
  [EvmChainId.AVALANCHE]: '0x431d5dff03120afa4bdf332c61a6e1766ef37bdb',
  [EvmChainId.GNOSIS]: '0x431d5dff03120afa4bdf332c61a6e1766ef37bdb',
} as const

export const JPY = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'JPYC',
    name: 'JPY Coin',
  },
  JPY_ADDRESS,
)
