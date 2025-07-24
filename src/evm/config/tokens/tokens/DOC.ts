import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const DOC_ADDRESS = {
  [EvmChainId.ROOTSTOCK]: '0xe700691da7b9851f2f35f8b8182c69c53ccad9db',
} as const

export const DOC = addressMapToTokenMap(
  { decimals: 18, symbol: 'DOC', name: 'Dollar on Chain' },
  DOC_ADDRESS,
)
