import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const GUSD_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0x056Fd409E1d7A124BD7017459dFEa2F387b6d5Cd',
} as const

export const GUSD = addressMapToTokenMap(
  { symbol: 'GUSD', name: 'Gemini dollar', decimals: 2 },
  GUSD_ADDRESS,
)
