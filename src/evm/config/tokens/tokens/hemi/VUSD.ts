import { EvmChainId } from '../../../../chain/index.js'
import { addressMapToTokenMap } from '../../address-map-to-token-map.js'

export const HEMI_VUSD_ADDRESS = {
  [EvmChainId.HEMI]: '0x7a06c4aef988e7925575c50261297a946ad204a8',
} as const

export const HEMI_VUSD = addressMapToTokenMap(
  { decimals: 18, symbol: 'VUSD', name: 'VUSD' },
  HEMI_VUSD_ADDRESS,
)
