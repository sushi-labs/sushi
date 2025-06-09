import { TvmChainId } from '~tvm/chain/chains.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const TBEER_ADDRESS = {
  [TvmChainId.TRON]: 'TKCJp1q9325BfQbu2Suh7mshQs8ijuqv3y',
} as const

export const TBEER = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'TBEER',
    name: 'TRON BEER',
    //logoURI: 'https://cdn.sunpump.meme/public/logo/TBEER_TXMN3d_FSZeVq8A5nzi.jpg',
  },
  TBEER_ADDRESS,
)
