import { TvmChainId } from '../../../chain/chains.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const SUNKEY_ADDRESS = {
  [TvmChainId.TRON]: 'TJgB8bFWzMQfbqmCicf39XHby5uB5qoEQq',
} as const

export const SUNKEY = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'SUNKEY',
    name: 'SUNKEY',
    //logoURI: 'https://cdn.sunpump.meme/public/logo/SUNKEY_TArygL_CL1PcUh6ZQr5.jpg',
  },
  SUNKEY_ADDRESS,
)
