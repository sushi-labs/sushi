import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../../address-map-to-token-map.js'

export const ETHEREUM_CRV_USD_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0xf939E0A03FB07F59A73314E73794Be0E57ac1b4E',
} as const

export const ETHEREUM_CRV_USD = addressMapToTokenMap(
  { symbol: 'crvUSD', name: 'Curve.Fi USD Stablecoin', decimals: 18 },
  ETHEREUM_CRV_USD_ADDRESS,
)
