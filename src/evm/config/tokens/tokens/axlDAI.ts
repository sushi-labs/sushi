import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const axlDAI_ADDRESS = {
  [EvmChainId.ARBITRUM]: '0x5C7e299CF531eb66f2A1dF637d37AbB78e6200C7',
  [EvmChainId.AVALANCHE]: '0xC5Fa5669E326DA8B2C35540257cD48811F40a36B',
  [EvmChainId.BASE]: '0x5C7e299CF531eb66f2A1dF637d37AbB78e6200C7',
  [EvmChainId.BSC]: '0xF02eaeEa1350DAD8fc7A66d6BddB25876243ed1F',
  [EvmChainId.CELO]: '0x5C7e299CF531eb66f2A1dF637d37AbB78e6200C7',
  [EvmChainId.ETHEREUM]: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
  [EvmChainId.FANTOM]: '0xD5d5350F42CB484036A1C1aF5F2DF77eAFadcAFF',
  [EvmChainId.FILECOIN]: '0x5C7e299CF531eb66f2A1dF637d37AbB78e6200C7',
  [EvmChainId.KAVA]: '0x5C7e299CF531eb66f2A1dF637d37AbB78e6200C7',
  [EvmChainId.LINEA]: '0x5C7e299CF531eb66f2A1dF637d37AbB78e6200C7',
  [EvmChainId.OPTIMISM]: '0x5C7e299CF531eb66f2A1dF637d37AbB78e6200C7',
  [EvmChainId.POLYGON]: '0xDDc9E2891FA11a4CC5C223145e8d14B44f3077c9',
  [EvmChainId.HAQQ]: '0xC5e00D3b04563950941f7137B5AfA3a534F0D6d6',
} as const

export const axlDAI = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'axlDAI',
    name: 'Axelar Wrapped DAI',
  },
  axlDAI_ADDRESS,
)
