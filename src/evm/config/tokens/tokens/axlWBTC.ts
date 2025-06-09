import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const axlWBTC_ADDRESS = {
  [EvmChainId.KAVA]: '0x1a35EE4640b0A3B87705B0A4B45D227Ba60Ca2ad',
  [EvmChainId.HAQQ]: '0x5FD55A1B9FC24967C4dB09C513C3BA0DFa7FF687',
} as const

export const axlWBTC = addressMapToTokenMap(
  {
    decimals: 8,
    symbol: 'axlWBTC',
    name: 'Axelar Wrapped BTC',
  },
  axlWBTC_ADDRESS,
)
