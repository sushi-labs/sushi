import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const AUSD_ADDRESS = {
  [EvmChainId.TATARA]: '0xa9012a055bd4e0edff8ce09f960291c09d5322dc',
  [EvmChainId.KATANA]: '0x00000000efe302beaa2b3e6e1b18d08d69a9012a',
} as const

export const AUSD = addressMapToTokenMap(
  {
    decimals: 6,
    symbol: 'AUSD',
    name: 'AgoraDollar',
  },
  AUSD_ADDRESS,
)
