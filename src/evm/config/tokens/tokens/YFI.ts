import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const YFI_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e',
  [EvmChainId.POLYGON]: '0xda537104d6a5edd53c6fbba9a898708e465260b6',
  [EvmChainId.GNOSIS]: '0xbf65bfcb5da067446cee6a706ba3fe2fb1a9fdfd',
  [EvmChainId.HARMONY]: '0xa0dc05f84a27fccbd341305839019ab86576bc07',
  [EvmChainId.AVALANCHE]: '0x9eaac1b23d935365bd7b542fe22ceee2922f52dc',
  [EvmChainId.ARBITRUM]: '0x82e3a8f066a6989666b031d916c43672085b1582',
} as const

export const YFI = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'YFI',
    name: 'yearn.finance',
  },
  YFI_ADDRESS,
)
