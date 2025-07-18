import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const renBTC_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D',
} as const

export const renBTC = addressMapToTokenMap(
  {
    decimals: 8,
    symbol: 'renBTC',
    name: 'renBTC',
  },
  renBTC_ADDRESS,
)
