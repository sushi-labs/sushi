import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const LINK_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0x514910771af9ca656af840dff83e8264ecf986ca',
  [EvmChainId.POLYGON]: '0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39',
  [EvmChainId.GNOSIS]: '0xe2e73a1c69ecf83f464efce6a5be353a37ca09b2',
  [EvmChainId.BSC]: '0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd',
  [EvmChainId.OPTIMISM]: '0x350a791bfc2c21f9ed5d10980dad2e2638ffa7f6',
  [EvmChainId.HARMONY]: '0x218532a12a389a4a92fc0c5fb22901d1c19198aa',
  [EvmChainId.AVALANCHE]: '0x5947bb275c521040051d82396192181b413227a3',
  [EvmChainId.ARBITRUM]: '0xf97f4df75117a78c1a5a0dbb814af92458539fb4',
} as const

export const LINK = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'LINK',
    name: 'ChainLink Token',
  },
  LINK_ADDRESS,
)
