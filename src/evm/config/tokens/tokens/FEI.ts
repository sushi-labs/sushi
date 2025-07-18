import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const FEI_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0x956F47F50A910163D8BF957Cf5846D573E7f87CA',
} as const

export const FEI = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'FEI',
    name: 'Fei USD',
  },
  FEI_ADDRESS,
)
