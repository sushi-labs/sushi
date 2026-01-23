import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const BTC_b_ADDRESS = {
  [EvmChainId.KATANA]: '0xb0f70c0bd6fd87dbeb7c10dc692a2a6106817072',
  [EvmChainId.MEGAETH]: '0xb0f70c0bd6fd87dbeb7c10dc692a2a6106817072',
} as const

export const BTC_b = addressMapToTokenMap(
  {
    decimals: 8,
    symbol: 'BTC.b',
    name: 'Lombard Bitcoin',
  },
  BTC_b_ADDRESS,
)
