import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const axlDAI_ADDRESS = {
  [EvmChainId.ARBITRUM]: '0x5c7e299cf531eb66f2a1df637d37abb78e6200c7',
  [EvmChainId.AVALANCHE]: '0xc5fa5669e326da8b2c35540257cd48811f40a36b',
  [EvmChainId.BASE]: '0x5c7e299cf531eb66f2a1df637d37abb78e6200c7',
  [EvmChainId.BSC]: '0xf02eaeea1350dad8fc7a66d6bddb25876243ed1f',
  [EvmChainId.CELO]: '0x5c7e299cf531eb66f2a1df637d37abb78e6200c7',
  [EvmChainId.ETHEREUM]: '0x6b175474e89094c44da98b954eedeac495271d0f',
  [EvmChainId.FANTOM]: '0xd5d5350f42cb484036a1c1af5f2df77eafadcaff',
  [EvmChainId.FILECOIN]: '0x5c7e299cf531eb66f2a1df637d37abb78e6200c7',
  [EvmChainId.KAVA]: '0x5c7e299cf531eb66f2a1df637d37abb78e6200c7',
  [EvmChainId.LINEA]: '0x5c7e299cf531eb66f2a1df637d37abb78e6200c7',
  [EvmChainId.OPTIMISM]: '0x5c7e299cf531eb66f2a1df637d37abb78e6200c7',
  [EvmChainId.POLYGON]: '0xddc9e2891fa11a4cc5c223145e8d14b44f3077c9',
  [EvmChainId.HAQQ]: '0xc5e00d3b04563950941f7137b5afa3a534f0d6d6',
} as const

export const axlDAI = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'axlDAI',
    name: 'Axelar Wrapped DAI',
  },
  axlDAI_ADDRESS,
)
