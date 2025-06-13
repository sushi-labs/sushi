import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const JUGNI_ADDRESS = {
  [EvmChainId.POLYGON]: '0xE313bcB77dbA15F39Ff0B9cEABe140cedD0953cB',
} as const

export const JUGNI = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'JUGNI',
    name: 'Jugni',
  },
  JUGNI_ADDRESS,
)
