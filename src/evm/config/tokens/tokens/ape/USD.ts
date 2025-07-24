import { EvmChainId } from '../../../../chain/index.js'
import { addressMapToTokenMap } from '../../address-map-to-token-map.js'

export const APE_USD_ADDRESS = {
  [EvmChainId.APE]: '0xa2235d059f80e176d931ef76b6c51953eb3fbef4',
} as const

export const APE_USD = addressMapToTokenMap(
  { symbol: 'ApeUSD', name: 'Ape USD', decimals: 18 },
  APE_USD_ADDRESS,
)
