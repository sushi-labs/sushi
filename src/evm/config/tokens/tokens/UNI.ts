import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const UNI_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
  [EvmChainId.GNOSIS]: '0x4537e328Bf7e4eFA29D05CAeA260D7fE26af9D74',
  [EvmChainId.OPTIMISM]: '0x6fd9d7AD17242c41f7131d257212c54A0e816691',
  [EvmChainId.AVALANCHE]: '0x8eBAf22B6F053dFFeaf46f4Dd9eFA95D89ba8580',
  [EvmChainId.BSC]: '0xBf5140A22578168FD562DCcF235E5D43A02ce9B1',
  [EvmChainId.POLYGON]: '0xb33EaAd8d922B1083446DC23f610c2567fB5180f',
  [EvmChainId.HARMONY]: '0x90D81749da8867962c760414C1C25ec926E889b6',
  [EvmChainId.ARBITRUM]: '0xFa7F8980b0f1E64A2062791cc3b0871572f1F7f0',
} as const

export const UNI = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'UNI',
    name: 'Uniswap',
  },
  UNI_ADDRESS,
)
