import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const TUSD_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0x0000000000085d4780b73119b644ae5ecd22b376',
} as const

export const TUSD = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'TUSD',
    name: 'TrueUSD',
  },
  TUSD_ADDRESS,
)
