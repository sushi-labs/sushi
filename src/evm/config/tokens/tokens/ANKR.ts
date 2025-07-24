import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const ANKR_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0x8290333cef9e6d528dd5618fb97a76f268f3edd4',
} as const

export const ANKR = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'ANKR',
    name: 'Anker Network',
  },
  ANKR_ADDRESS,
)
