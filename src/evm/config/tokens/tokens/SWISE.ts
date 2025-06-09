import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const SWISE_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0x48C3399719B582dD63eB5AADf12A40B4C3f52FA2',
} as const

export const SWISE = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'SWISE',
    name: 'StakeWise',
  },
  SWISE_ADDRESS,
)
