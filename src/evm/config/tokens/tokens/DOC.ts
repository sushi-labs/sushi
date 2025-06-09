import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const DOC_ADDRESS = {
  [EvmChainId.ROOTSTOCK]: '0xE700691Da7B9851F2F35f8b8182C69C53ccad9DB',
} as const

export const DOC = addressMapToTokenMap(
  { decimals: 18, symbol: 'DOC', name: 'Dollar on Chain' },
  DOC_ADDRESS,
)
