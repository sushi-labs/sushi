import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const GNO_ADDRESS = {
  [EvmChainId.GNOSIS]: '0x9C58BAcC331c9aa871AFD802DB6379a98e80CEdb',
} as const

export const GNO = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'GNO',
    name: 'Gnosis Token',
  },
  GNO_ADDRESS,
)
