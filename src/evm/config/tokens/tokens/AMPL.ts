import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const AMPL_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0xD46bA6D942050d489DBd938a2C909A5d5039A161',
} as const

export const AMPL = addressMapToTokenMap(
  { decimals: 9, symbol: 'AMPL', name: 'Ampleforth' },
  AMPL_ADDRESS,
)
