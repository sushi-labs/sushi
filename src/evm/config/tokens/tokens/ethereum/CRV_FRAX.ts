import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../../address-map-to-token-map.js'

export const ETHEREUM_CRV_FRAX_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0x3175Df0976dFA876431C2E9eE6Bc45b65d3473CC',
} as const

export const ETHEREUM_CRV_FRAX = addressMapToTokenMap(
  { symbol: 'crvFRAX', name: 'Curve.fi FRAX/USDC', decimals: 18 },
  ETHEREUM_CRV_FRAX_ADDRESS,
)
