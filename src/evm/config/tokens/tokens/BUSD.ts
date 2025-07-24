import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const BUSD_ADDRESS = {
  [EvmChainId.BSC]: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
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
