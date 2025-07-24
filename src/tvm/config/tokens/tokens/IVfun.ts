import { TvmChainId } from '../../../chain/chains.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const IVfun_ADDRESS = {
  [TvmChainId.TRON]: 'TSig7sWzEL2K83mkJMQtbyPpiVSbR6pZnb',
} as const

export const IVfun = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'IVfun',
    name: 'Invest Zone',
    //logoURI: 'https://cdn.sunpump.meme/public/logo/IVfun_TYE2hX_1rR7Q8GfwFKa.jpg',
  },
  IVfun_ADDRESS,
)
