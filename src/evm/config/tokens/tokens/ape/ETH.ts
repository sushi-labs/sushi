import { EvmChainId } from '../../../../chain/index.js'
import { addressMapToTokenMap } from '../../address-map-to-token-map.js'

export const APE_ETH_ADDRESS = {
  [EvmChainId.APE]: '0xcf800f4948d16f23333508191b1b1591daf70438',
} as const

export const APE_ETH = addressMapToTokenMap(
  { symbol: 'ApeETH', name: 'Ape ETH', decimals: 18 },
  APE_ETH_ADDRESS,
)
