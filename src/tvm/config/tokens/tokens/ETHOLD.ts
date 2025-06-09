import { TvmChainId } from '~tvm/chain/chains.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const ETHOLD_ADDRESS = {
  [TvmChainId.TRON]: 'THb4CqiFdwNHsWsQCs4JhzwjMWys4aqCbF',
} as const

export const ETHOLD = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'ETHOLD',
    name: 'EthereumOLD',
    //logoURI: 'https://static.tronscan.org/production/logo/THb4CqiFdwNHsWsQCs4JhzwjMWys4aqCbF.png',
  },
  ETHOLD_ADDRESS,
)
