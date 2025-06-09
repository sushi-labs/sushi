import { TvmChainId } from '~tvm/chain/chains.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const PUSS_ADDRESS = {
  [TvmChainId.TRON]: 'TX5eXdf8458bZ77fk8xdvUgiQmC3L93iv7',
} as const

export const PUSS = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'PUSS',
    name: 'PUSS',
    //logoURI: 'https://cdn.sunpump.meme/public/logo/PUSS_TQRxQN_ls9y5lDjLoeb.png',
  },
  PUSS_ADDRESS,
)
