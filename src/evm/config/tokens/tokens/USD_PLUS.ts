import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const USD_PLUS_ADDRESS = {
  [EvmChainId.BASE]: '0xB79DD08EA68A908A97220C76d19A6aA9cBDE4376',
} as const

export const USD_PLUS = addressMapToTokenMap(
  {
    decimals: 6,
    symbol: 'USD+',
    name: 'USD+',
  },
  USD_PLUS_ADDRESS,
)
