import { EvmChainId } from '../../../../chain/index.js'
import { addressMapToTokenMap } from '../../address-map-to-token-map.js'

export const HEMI_HEMI_BTC_ADDRESS = {
  [EvmChainId.HEMI]: '0xaa40c0c7644e0b2b224509571e10ad20d9c4ef28',
} as const

export const HEMI_HEMI_BTC = addressMapToTokenMap(
  { decimals: 8, symbol: 'hemiBTC', name: 'Hemi Bitcoin' },
  HEMI_HEMI_BTC_ADDRESS,
)
