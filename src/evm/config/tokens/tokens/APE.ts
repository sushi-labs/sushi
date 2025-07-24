import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const APE_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0x4d224452801aced8b2f0aebe155379bb5d594381',
} as const

export const APE = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'APE',
    name: 'ApeCoin',
  },
  APE_ADDRESS,
)
