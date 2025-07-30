import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const ENJ_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c',
  [EvmChainId.HARMONY]: '0xadbd41bfb4389de499535c14a8a3a12fead8f66a',
} as const

export const ENJ = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'ENJ',
    name: 'Enjin Coin',
  },
  ENJ_ADDRESS,
)
