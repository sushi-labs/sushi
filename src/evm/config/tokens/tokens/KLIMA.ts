import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const KLIMA_ADDRESS = {
  [EvmChainId.POLYGON]: '0x4e78011Ce80ee02d2c3e649Fb657E45898257815',
} as const

export const KLIMA = addressMapToTokenMap(
  {
    decimals: 9,
    symbol: 'KLIMA',
    name: 'Klima DAO',
  },
  KLIMA_ADDRESS,
)
