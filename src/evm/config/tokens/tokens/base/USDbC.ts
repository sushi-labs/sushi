import { EvmChainId } from '../../../../chain/index.js'
import { addressMapToTokenMap } from '../../address-map-to-token-map.js'

export const BASE_USDbC_ADDRESS = {
  [EvmChainId.BASE]: '0xd9aaec86b65d86f6a7b5b1b0c42ffa531710b6ca',
} as const

export const BASE_USDbC = addressMapToTokenMap(
  { decimals: 6, symbol: 'USDbC', name: 'USD Base Coin' },
  BASE_USDbC_ADDRESS,
)
