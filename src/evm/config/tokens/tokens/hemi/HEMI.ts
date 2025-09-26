import { EvmChainId } from '../../../../chain/index.js'
import { addressMapToTokenMap } from '../../address-map-to-token-map.js'

export const HEMI_HEMI_ADDRESS = {
  [EvmChainId.HEMI]: '0x99e3de3817f6081b2568208337ef83295b7f591d',
} as const

export const HEMI_HEMI = addressMapToTokenMap(
  { decimals: 18, symbol: 'HEMI', name: 'Hemi' },
  HEMI_HEMI_ADDRESS,
)
