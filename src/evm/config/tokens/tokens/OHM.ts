import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const OHM_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0x64aa3364f17a4d01c6f1751fd97c2bd3d7e7f1d5',
} as const

export const OHM = addressMapToTokenMap(
  {
    decimals: 9,
    symbol: 'OHM',
    name: 'Olympus',
  },
  OHM_ADDRESS,
)
