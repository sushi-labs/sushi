import { EvmChainId } from '../../../../chain/index.js'
import { addressMapToTokenMap } from '../../address-map-to-token-map.js'

export const ETHEREUM_THREE_CRV_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0x6c3f90f043a72fa612cbac8115ee7e52bde6e490',
} as const

export const ETHEREUM_THREE_CRV = addressMapToTokenMap(
  { symbol: '3Crv', name: 'Curve.fi DAI/USDC/USDT', decimals: 18 },
  ETHEREUM_THREE_CRV_ADDRESS,
)
