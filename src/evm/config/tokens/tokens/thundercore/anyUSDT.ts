import { EvmChainId } from '../../../../chain/index.js'
import { addressMapToTokenMap } from '../../address-map-to-token-map.js'

export const THUNDERCORE_ANY_USDT_ADDRESS = {
  [EvmChainId.THUNDERCORE]: '0x0dcb0cb0120d355cde1ce56040be57add0185baa',
} as const

export const THUNDERCORE_ANY_USDT = addressMapToTokenMap(
  { decimals: 6, symbol: 'anyUSDT', name: 'Any Tether USD' },
  THUNDERCORE_ANY_USDT_ADDRESS,
)
