import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const APE_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0x4d224452801ACEd8B2F0aebE155379bb5D594381',
} as const

export const APE = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'APE',
    name: 'ApeCoin',
  },
  APE_ADDRESS,
)
