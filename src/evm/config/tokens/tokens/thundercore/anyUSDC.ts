import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../../address-map-to-token-map.js'

export const THUNDERCORE_ANY_USDC_ADDRESS = {
  [EvmChainId.THUNDERCORE]: '0xdc42728b0ea910349ed3c6e1c9dc06b5fb591f98',
} as const

export const THUNDERCORE_ANY_USDC = addressMapToTokenMap(
  { decimals: 18, symbol: 'anyUSDC', name: 'Any USD Coin' },
  THUNDERCORE_ANY_USDC_ADDRESS,
)
