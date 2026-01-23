import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const LBTC_ADDRESS = {
  [EvmChainId.KATANA]: '0xecac9c5f704e954931349da37f60e39f515c11c1',
  [EvmChainId.MEGAETH]: '0xecac9c5f704e954931349da37f60e39f515c11c1',
} as const

export const LBTC = addressMapToTokenMap(
  {
    decimals: 8,
    symbol: 'LBTC',
    name: 'Lombard Staked Bitcoin',
  },
  LBTC_ADDRESS,
)
