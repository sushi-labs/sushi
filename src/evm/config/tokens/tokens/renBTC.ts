import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const renBTC_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0xeb4c2781e4eba804ce9a9803c67d0893436bb27d',
} as const

export const renBTC = addressMapToTokenMap(
  {
    decimals: 8,
    symbol: 'renBTC',
    name: 'renBTC',
  },
  renBTC_ADDRESS,
)
