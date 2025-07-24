import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const FRAX_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0x853d955acef822db058eb8505911ed77f175b99e',
  [EvmChainId.FANTOM]: '0xdc301622e621166bd8e82f2ca0a26c13ad0be355',
  [EvmChainId.BSC]: '0x90c97f71e18723b0cf0dfa30ee176ab653e89f40',
  [EvmChainId.ARBITRUM]: '0x17fc002b466eec40dae837fc4be5c67993ddbd6f',
  [EvmChainId.AVALANCHE]: '0xd24c2ad096400b6fbcd2ad8b24e7acbc21a1da64',
  [EvmChainId.POLYGON]: '0x45c32fa6df82ead1e2ef74d17b76547eddfaff89',
  [EvmChainId.HARMONY]: '0xfa7191d292d5633f702b0bd7e3e3bccc0e633200',
  [EvmChainId.BOBA]: '0xab2af3a98d229b7daed7305bb88ad0ba2c42f9ca',
  [EvmChainId.OPTIMISM]: '0x2e3d870790dc77a83dd1d18184acc7439a53f475',
  [EvmChainId.POLYGON_ZKEVM]: '0xff8544fed5379d9ffa8d47a74ce6b91e632ac44d',
} as const

export const FRAX = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'FRAX',
    name: 'Frax',
  },
  FRAX_ADDRESS,
)
