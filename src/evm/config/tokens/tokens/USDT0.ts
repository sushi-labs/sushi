import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const USDT0_ADDRESS = {
  [EvmChainId.ARBITRUM]: '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9',
  [EvmChainId.OPTIMISM]: '0x01bff41798a0bcf287b996046ca68b395dbc1071',
  [EvmChainId.ROOTSTOCK]: '0x779ded0c9e1022225f8e0630b35a9b54be713736',
} as const

export const USDT0 = {
  ...addressMapToTokenMap(
    {
      decimals: 6,
      symbol: 'USD₮0',
      name: 'USD₮0',
    },
    USDT0_ADDRESS,
  ),
}
