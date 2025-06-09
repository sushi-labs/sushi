import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const axlUSDT_ADDRESS = {
  [EvmChainId.HAQQ]: '0xd567B3d7B8FE3C79a1AD8dA978812cfC4Fa05e75',
} as const

export const axlUSDT = addressMapToTokenMap(
  {
    decimals: 6,
    symbol: 'axlUSDT',
    name: 'Axelar Wrapped USDT',
  },
  axlUSDT_ADDRESS,
)
