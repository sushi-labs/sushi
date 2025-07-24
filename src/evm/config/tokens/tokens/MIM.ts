import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const MIM_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0x99d8a9c45b2eca8864373a26d1459e3dff1e17f3',
  [EvmChainId.FANTOM]: '0x82f0b8b456c1a451378467398982d4834b6829c1',
  [EvmChainId.BSC]: '0xfe19f0b51438fd612f6fd59c1dbb3ea319f433ba',
  [EvmChainId.ARBITRUM]: '0xfea7a6a0b346362bf88a9e4a88416b77a57d6c2a',
  [EvmChainId.AVALANCHE]: '0x130966628846bfd36ff31a822705796e8cb8c18d',
  [EvmChainId.POLYGON]: '0x49a0400587a7f65072c87c4910449fdcc5c47242',
} as const

export const MIM = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'MIM',
    name: 'Magic Internet Money',
  },
  MIM_ADDRESS,
)
