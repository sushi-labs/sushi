import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const FRAX_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0x853d955aCEf822Db058eb8505911ED77F175b99e',
  [EvmChainId.FANTOM]: '0xdc301622e621166BD8E82f2cA0A26c13Ad0BE355',
  [EvmChainId.BSC]: '0x90C97F71E18723b0Cf0dfa30ee176Ab653E89F40',
  [EvmChainId.ARBITRUM]: '0x17FC002b466eEc40DaE837Fc4bE5c67993ddBd6F',
  [EvmChainId.AVALANCHE]: '0xD24C2Ad096400B6FBcd2ad8B24E7acBc21A1da64',
  [EvmChainId.POLYGON]: '0x45c32fA6DF82ead1e2EF74d17b76547EDdFaFF89',
  [EvmChainId.HARMONY]: '0xFa7191D292d5633f702B0bd7E3E3BcCC0e633200',
  [EvmChainId.BOBA]: '0xAb2AF3A98D229b7dAeD7305Bb88aD0BA2c42f9cA',
  [EvmChainId.OPTIMISM]: '0x2E3D870790dC77A83DD1d18184Acc7439A53f475',
  [EvmChainId.POLYGON_ZKEVM]: '0xFf8544feD5379D9ffa8D47a74cE6b91e632AC44D',
} as const

export const FRAX = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'FRAX',
    name: 'Frax',
  },
  FRAX_ADDRESS,
)
