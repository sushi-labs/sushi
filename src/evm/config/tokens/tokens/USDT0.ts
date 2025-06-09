import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const USDT0_ADDRESS = {
  [EvmChainId.ARBITRUM]: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
  [EvmChainId.OPTIMISM]: '0x01bFF41798a0BcF287b996046Ca68b395DbC1071',
  [EvmChainId.ROOTSTOCK]: '0x779dED0C9e1022225F8e0630b35A9B54Be713736',
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
