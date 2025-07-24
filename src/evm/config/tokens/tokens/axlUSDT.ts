import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const axlUSDT_ADDRESS = {
  [EvmChainId.HAQQ]: '0xd567b3d7b8fe3c79a1ad8da978812cfc4fa05e75',
} as const

export const axlUSDT = addressMapToTokenMap(
  {
    decimals: 6,
    symbol: 'axlUSDT',
    name: 'Axelar Wrapped USDT',
  },
  axlUSDT_ADDRESS,
)
