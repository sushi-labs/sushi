import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const xSolvBTC_ADDRESS = {
  [EvmChainId.ARBITRUM]: '0x346c574C56e1A4aAa8dc88Cda8F7EB12b39947aB',
  [EvmChainId.ROOTSTOCK]: '0xCC0966D8418d412c599A6421b760a847eB169A8c',
} as const

export const xSolvBTC = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'xSolvBTC',
    name: 'xSolvBTC',
  },
  xSolvBTC_ADDRESS,
)
