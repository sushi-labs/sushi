import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const MKR_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2',
  [EvmChainId.POLYGON]: '0x6f7C932e7684666C9fd1d44527765433e01fF61d',
  [EvmChainId.AVALANCHE]: '0x88128fd4b259552a9a1d457f435a6527aab72d42',
  [EvmChainId.ARBITRUM]: '0x2e9a6Df78E42a30712c10a9Dc4b1C8656f8F2879',
} as const

export const MKR = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'MKR',
    name: 'Maker',
  },
  MKR_ADDRESS,
)
