import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const AMPL_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0xd46ba6d942050d489dbd938a2c909a5d5039a161',
} as const

export const AMPL = addressMapToTokenMap(
  { decimals: 9, symbol: 'AMPL', name: 'Ampleforth' },
  AMPL_ADDRESS,
)
