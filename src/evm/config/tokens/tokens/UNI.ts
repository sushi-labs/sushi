import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const UNI_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
  [EvmChainId.GNOSIS]: '0x4537e328bf7e4efa29d05caea260d7fe26af9d74',
  [EvmChainId.OPTIMISM]: '0x6fd9d7ad17242c41f7131d257212c54a0e816691',
  [EvmChainId.AVALANCHE]: '0x8ebaf22b6f053dffeaf46f4dd9efa95d89ba8580',
  [EvmChainId.BSC]: '0xbf5140a22578168fd562dccf235e5d43a02ce9b1',
  [EvmChainId.POLYGON]: '0xb33eaad8d922b1083446dc23f610c2567fb5180f',
  [EvmChainId.HARMONY]: '0x90d81749da8867962c760414c1c25ec926e889b6',
  [EvmChainId.ARBITRUM]: '0xfa7f8980b0f1e64a2062791cc3b0871572f1f7f0',
} as const

export const UNI = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'UNI',
    name: 'Uniswap',
  },
  UNI_ADDRESS,
)
