import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const FXS_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0',
  [EvmChainId.FANTOM]: '0x7d016eec9c25232b01F23EF992D98ca97fc2AF5a',
  [EvmChainId.BSC]: '0xe48A3d7d0Bc88d552f730B62c006bC925eadB9eE',
  [EvmChainId.ARBITRUM]: '0x9d2F299715D94d8A7E6F5eaa8E654E8c74a988A7',
  [EvmChainId.AVALANCHE]: '0x214DB107654fF987AD859F34125307783fC8e387',
  [EvmChainId.POLYGON]: '0x3e121107F6F22DA4911079845a470757aF4e1A1b',
  [EvmChainId.HARMONY]: '0x0767D8E1b05eFA8d6A301a65b324B6b66A1CC14c',
  [EvmChainId.BOBA]: '0xdc1664458d2f0B6090bEa60A8793A4E66c2F1c00',
  [EvmChainId.OPTIMISM]: '0x67CCEA5bb16181E7b4109c9c2143c24a1c2205Be',
} as const

export const FXS = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'FXS',
    name: 'Frax Share',
  },
  FXS_ADDRESS,
)
