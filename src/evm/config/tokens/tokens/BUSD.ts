import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const BUSD_ADDRESS = {
  [EvmChainId.BSC]: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
  [EvmChainId.THUNDERCORE]: '0xbeb0131d95ac3f03fd15894d0ade5dbf7451d171',
} as const

export const BUSD = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'BUSD',
    name: 'BUSD Token',
  },
  BUSD_ADDRESS,
)
