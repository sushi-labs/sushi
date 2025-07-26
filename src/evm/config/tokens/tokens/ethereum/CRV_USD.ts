import { EvmChainId } from '../../../../chain/index.js'
import { addressMapToTokenMap } from '../../address-map-to-token-map.js'

export const ETHEREUM_CRV_USD_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0xf939e0a03fb07f59a73314e73794be0e57ac1b4e',
} as const

export const ETHEREUM_CRV_USD = addressMapToTokenMap(
  { symbol: 'crvUSD', name: 'Curve.Fi USD Stablecoin', decimals: 18 },
  ETHEREUM_CRV_USD_ADDRESS,
)
