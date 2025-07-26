import { TvmChainId } from '../../../chain/chains.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const TBULL_ADDRESS = {
  [TvmChainId.TRON]: 'TPeoxx1VhUMnAUyjwWfximDYFDQaxNQQ45',
} as const

export const TBULL = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'TBULL',
    name: 'Tron Bull',
    //logoURI: 'https://cdn.sunpump.meme/public/logo/TBULL_TSfV1B_YQaduaEhm0cB.webp',
  },
  TBULL_ADDRESS,
)
