import { EvmChainId } from '../../../../chain/index.js'
import { addressMapToTokenMap } from '../../address-map-to-token-map.js'

export const MEGAETH_USDm_ADDRESS = {
  [EvmChainId.MEGAETH]: '0xfafddbb3fc7688494971a79cc65dca3ef82079e7',
} as const

export const MEGAETH_USDm = addressMapToTokenMap(
  { decimals: 18, symbol: 'USDm', name: 'MegaUSD' },
  MEGAETH_USDm_ADDRESS,
)
