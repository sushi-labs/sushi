import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const MIM_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0x99D8a9C45b2ecA8864373A26D1459e3Dff1e17F3',
  [EvmChainId.FANTOM]: '0x82f0B8B456c1A451378467398982d4834b6829c1',
  [EvmChainId.BSC]: '0xfE19F0B51438fd612f6FD59C1dbB3eA319f433Ba',
  [EvmChainId.ARBITRUM]: '0xFEa7a6a0B346362BF88A9e4A88416B77a57D6c2A',
  [EvmChainId.AVALANCHE]: '0x130966628846BFd36ff31a822705796e8cb8C18D',
  [EvmChainId.POLYGON]: '0x49a0400587A7F65072c87c4910449fDcC5c47242',
} as const

export const MIM = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'MIM',
    name: 'Magic Internet Money',
  },
  MIM_ADDRESS,
)
