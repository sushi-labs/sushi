import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const NFTX_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0x87d73e916d7057945c9bcd8cdd94e42a6f47f776',
} as const

export const NFTX = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'NFTX',
    name: 'NFTX',
  },
  NFTX_ADDRESS,
)
