import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../../address-map-to-token-map.js'

export const APE_USD_ADDRESS = {
  [EvmChainId.APE]: '0xA2235d059F80e176D931Ef76b6C51953Eb3fBEf4',
} as const

export const APE_USD = addressMapToTokenMap(
  { symbol: 'ApeUSD', name: 'Ape USD', decimals: 18 },
  APE_USD_ADDRESS,
)
