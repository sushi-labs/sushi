import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const axlWBTC_ADDRESS = {
  [EvmChainId.KAVA]: '0x1a35ee4640b0a3b87705b0a4b45d227ba60ca2ad',
  [EvmChainId.HAQQ]: '0x5fd55a1b9fc24967c4db09c513c3ba0dfa7ff687',
} as const

export const axlWBTC = addressMapToTokenMap(
  {
    decimals: 8,
    symbol: 'axlWBTC',
    name: 'Axelar Wrapped BTC',
  },
  axlWBTC_ADDRESS,
)
