import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const ANKR_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0x8290333ceF9e6D528dD5618Fb97a76f268f3EDD4',
} as const

export const ANKR = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'ANKR',
    name: 'Anker Network',
  },
  ANKR_ADDRESS,
)
