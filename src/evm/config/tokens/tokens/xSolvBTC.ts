import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const xSolvBTC_ADDRESS = {
  [EvmChainId.ARBITRUM]: '0x346c574c56e1a4aaa8dc88cda8f7eb12b39947ab',
  [EvmChainId.ROOTSTOCK]: '0xcc0966d8418d412c599a6421b760a847eb169a8c',
} as const

export const xSolvBTC = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'xSolvBTC',
    name: 'xSolvBTC',
  },
  xSolvBTC_ADDRESS,
)
