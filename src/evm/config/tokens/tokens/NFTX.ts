import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const NFTX_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0x87d73E916D7057945c9BcD8cdd94e42A6F47f776',
} as const

export const NFTX = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'NFTX',
    name: 'NFTX',
  },
  NFTX_ADDRESS,
)
