import { TvmChainId } from '~tvm/chain/chains.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const CZ_ADDRESS = {
  [TvmChainId.TRON]: 'TSZu2myGg42ZEsT7RvvbVvhVS3kf9f1e57',
} as const

export const CZ = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'CZ',
    name: 'Changpeng Zhao',
    //logoURI: 'https://cdn.sunpump.meme/public/logo/CZ_TBDSE9_iEzd2xG48TpN.jpeg',
  },
  CZ_ADDRESS,
)
