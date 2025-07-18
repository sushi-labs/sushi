import { TvmChainId } from '~tvm/chain/chains.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const MWD_ADDRESS = {
  [TvmChainId.TRON]: 'TEfg1LnM3yApCjAgax35wDg6SRpmZFuQS3',
} as const

export const MWD = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'MWD',
    name: 'MEW-WOOF-DAO',
    //logoURI: 'https://cdn.sunpump.meme/public/logo/MWD_TWcE6E_SsCtXAZ1KvWi.jpeg',
  },
  MWD_ADDRESS,
)
