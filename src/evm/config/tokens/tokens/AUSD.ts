import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const AUSD_ADDRESS = {
  [EvmChainId.TATARA]: '0xa9012a055bd4e0eDfF8Ce09f960291C09D5322dC',
} as const

export const AUSD = addressMapToTokenMap(
  {
    decimals: 6,
    symbol: 'AUSD',
    name: 'AgoraDollar',
  },
  AUSD_ADDRESS,
)
