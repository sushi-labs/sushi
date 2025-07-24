import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const MKR_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
  [EvmChainId.POLYGON]: '0x6f7c932e7684666c9fd1d44527765433e01ff61d',
  [EvmChainId.AVALANCHE]: '0x88128fd4b259552a9a1d457f435a6527aab72d42',
  [EvmChainId.ARBITRUM]: '0x2e9a6df78e42a30712c10a9dc4b1c8656f8f2879',
} as const

export const MKR = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'MKR',
    name: 'Maker',
  },
  MKR_ADDRESS,
)
