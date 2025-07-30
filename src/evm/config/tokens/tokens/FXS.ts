import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const FXS_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0',
  [EvmChainId.FANTOM]: '0x7d016eec9c25232b01f23ef992d98ca97fc2af5a',
  [EvmChainId.BSC]: '0xe48a3d7d0bc88d552f730b62c006bc925eadb9ee',
  [EvmChainId.ARBITRUM]: '0x9d2f299715d94d8a7e6f5eaa8e654e8c74a988a7',
  [EvmChainId.AVALANCHE]: '0x214db107654ff987ad859f34125307783fc8e387',
  [EvmChainId.POLYGON]: '0x3e121107f6f22da4911079845a470757af4e1a1b',
  [EvmChainId.HARMONY]: '0x0767d8e1b05efa8d6a301a65b324b6b66a1cc14c',
  [EvmChainId.BOBA]: '0xdc1664458d2f0b6090bea60a8793a4e66c2f1c00',
  [EvmChainId.OPTIMISM]: '0x67ccea5bb16181e7b4109c9c2143c24a1c2205be',
} as const

export const FXS = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'FXS',
    name: 'Frax Share',
  },
  FXS_ADDRESS,
)
