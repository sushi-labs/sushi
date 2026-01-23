import { EvmChainId } from '../../../../chain/index.js'
import { addressMapToTokenMap } from '../../address-map-to-token-map.js'

export const MEGAETH_MEGA_ADDRESS = {
  [EvmChainId.MEGAETH]: '0x28b7e77f82b25b95953825f1e3ea0e36c1c29861',
} as const

export const MEGAETH_MEGA = addressMapToTokenMap(
  { decimals: 18, symbol: 'MEGA', name: 'MEGA' },
  MEGAETH_MEGA_ADDRESS,
)
