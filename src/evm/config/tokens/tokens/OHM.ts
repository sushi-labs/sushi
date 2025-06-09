import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const OHM_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0x64aa3364F17a4D01c6f1751Fd97C2BD3D7e7f1D5',
} as const

export const OHM = addressMapToTokenMap(
  {
    decimals: 9,
    symbol: 'OHM',
    name: 'Olympus',
  },
  OHM_ADDRESS,
)
