import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const UDSP_ADDRESS = {
  [EvmChainId.SKALE_EUROPA]: '0x73d22d8a2d1f59bf5bcf62ca382481a2073faf58',
} as const

export const USDP = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'USDP',
    name: 'Pax Dollar',
  },
  UDSP_ADDRESS,
)
