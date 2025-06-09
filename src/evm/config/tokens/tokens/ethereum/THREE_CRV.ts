import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../../address-map-to-token-map.js'

export const ETHEREUM_THREE_CRV_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490',
} as const

export const ETHEREUM_THREE_CRV = addressMapToTokenMap(
  { symbol: '3Crv', name: 'Curve.fi DAI/USDC/USDT', decimals: 18 },
  ETHEREUM_THREE_CRV_ADDRESS,
)
