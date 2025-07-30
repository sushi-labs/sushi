import { TvmChainId } from '../../../chain/chains.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const CDOG_ADDRESS = {
  [TvmChainId.TRON]: 'TVXmroHbJsJ6rVm3wGn2G9723yz3Kbqp9x',
} as const

export const CDOG = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'CDOG',
    name: 'Cyber Dog',
    //logoURI: 'https://cdn.sunpump.meme/public/logo/CDOG_TQU2Lr_ZBlOpcEb0sXM.jpg',
  },
  CDOG_ADDRESS,
)
