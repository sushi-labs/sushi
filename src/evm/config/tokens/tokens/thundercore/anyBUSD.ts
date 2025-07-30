import { EvmChainId } from '../../../../chain/index.js'
import { addressMapToTokenMap } from '../../address-map-to-token-map.js'

export const THUNDERCORE_ANY_BUSD_ADDRESS = {
  [EvmChainId.THUNDERCORE]: '0xb12c13e66ade1f72f71834f2fc5082db8c091358',
} as const

export const THUNDERCORE_ANY_BUSD = addressMapToTokenMap(
  { decimals: 18, symbol: 'anyBUSD', name: 'Any BUSD Token' },
  THUNDERCORE_ANY_BUSD_ADDRESS,
)
