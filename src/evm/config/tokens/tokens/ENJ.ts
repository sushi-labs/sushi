import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const ENJ_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0xF629cBd94d3791C9250152BD8dfBDF380E2a3B9c',
  [EvmChainId.HARMONY]: '0xadbd41bFb4389dE499535C14A8a3A12Fead8F66A',
} as const

export const ENJ = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'ENJ',
    name: 'Enjin Coin',
  },
  ENJ_ADDRESS,
)
