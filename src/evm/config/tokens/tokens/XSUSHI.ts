import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const XSUSHI_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272',
  [EvmChainId.POLYGON]: '0x6811079E3c63ED96Eb005384d7E7ec8810E3D521',
} as const

export const XSUSHI = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'XSUSHI',
    name: 'SushiBar',
  },
  XSUSHI_ADDRESS,
)
