import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const STONE_ADDRESS = {
  [EvmChainId.MANTA]: '0xEc901DA9c68E90798BbBb74c11406A32A70652C3',
} as const

export const STONE = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'STONE',
    name: 'StakeStone Ether',
  },
  STONE_ADDRESS,
)
