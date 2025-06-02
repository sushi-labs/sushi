import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../../address-map-to-token-map.js'

export const BASE_USDbC_ADDRESS = {
  [EvmChainId.BASE]: '0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA',
} as const

export const BASE_USDbC = addressMapToTokenMap(
  { decimals: 6, symbol: 'USDbC', name: 'USD Base Coin' },
  BASE_USDbC_ADDRESS,
)
