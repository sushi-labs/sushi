import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../../address-map-to-token-map.js'

export const APE_ETH_ADDRESS = {
  [EvmChainId.APE]: '0xcF800F4948D16F23333508191B1B1591daF70438',
} as const

export const APE_ETH = addressMapToTokenMap(
  { symbol: 'ApeETH', name: 'Ape ETH', decimals: 18 },
  APE_ETH_ADDRESS,
)
