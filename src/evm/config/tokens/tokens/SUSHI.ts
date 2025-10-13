import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const SUSHI_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2',
  [EvmChainId.FANTOM]: '0xae75a438b2e0cb8bb01ec1e1e376de11d44477cc',
  [EvmChainId.POLYGON]: '0x0b3f868e0be5597d5db7feb59e1cadbb0fdda50a',
  [EvmChainId.GNOSIS]: '0x2995d1317dcd4f0ab89f4ae60f3f020a4f17c7ce',
  [EvmChainId.BSC]: '0x986cdf0fd180b40c4d6aeaa01ab740b996d8b782',
  [EvmChainId.ARBITRUM]: '0xd4d42f0b6def4ce0383636770ef773390d85c61a',
  [EvmChainId.AVALANCHE]: '0x37b608519f91f70f2eeb0e5ed9af4061722e4f76',
  [EvmChainId.HARMONY]: '0xbec775cb42abfa4288de81f387a9b1a3c4bc552a',
  [EvmChainId.CELO]: '0x29dfce9c22003a4999930382fd00f9fd6133acd1',
  [EvmChainId.KAVA]: '0x7c598c96d02398d89fbcb9d41eab3df0c16f227d',
  [EvmChainId.METIS]: '0x17ee7e4da37b01fc1bcc908fa63df343f23b4b7c',
  [EvmChainId.BOBA]: '0x5ffccc55c0d2fd6d3ac32c26c020b3267e933f1b',
  [EvmChainId.ARBITRUM_NOVA]: '0xfe60a48a0bcf4636afecc9642a145d2f241a7011',
  [EvmChainId.BTTC]: '0x53c56ece35f8cab135e13d6d00499dfc7c07a92e',
  [EvmChainId.OPTIMISM]: '0x3eaeb77b03dbc0f6321ae1b72b2e9adb0f60112b',
  [EvmChainId.THUNDERCORE]: '0xabd380327fe66724ffda91a87c772fb8d00be488',
  [EvmChainId.FUSE]: '0x90708b20ccC1eb95a4FA7C8b18Fd2C22a0Ff9E78'
} as const

export const SUSHI = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'SUSHI',
    name: 'SushiToken',
  },
  SUSHI_ADDRESS,
)
