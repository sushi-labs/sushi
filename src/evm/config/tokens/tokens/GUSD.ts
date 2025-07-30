import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const GUSD_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0x056fd409e1d7a124bd7017459dfea2f387b6d5cd',
} as const

export const GUSD = addressMapToTokenMap(
  { symbol: 'GUSD', name: 'Gemini dollar', decimals: 2 },
  GUSD_ADDRESS,
)
