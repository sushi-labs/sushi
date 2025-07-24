import { EvmChainId } from '../../../../chain/index.js'
import { addressMapToTokenMap } from '../../address-map-to-token-map.js'

export const ETHEREUM_CRV_FRAX_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0x3175df0976dfa876431c2e9ee6bc45b65d3473cc',
} as const

export const ETHEREUM_CRV_FRAX = addressMapToTokenMap(
  { symbol: 'crvFRAX', name: 'Curve.fi FRAX/USDC', decimals: 18 },
  ETHEREUM_CRV_FRAX_ADDRESS,
)
