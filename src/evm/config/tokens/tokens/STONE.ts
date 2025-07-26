import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const STONE_ADDRESS = {
  [EvmChainId.MANTA]: '0xec901da9c68e90798bbbb74c11406a32a70652c3',
} as const

export const STONE = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'STONE',
    name: 'StakeStone Ether',
  },
  STONE_ADDRESS,
)
