import { TvmChainId } from '../../../chain/chains.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const MUNCAT_ADDRESS = {
  [TvmChainId.TRON]: 'TE2T2vLnEQT1XW647EAQAHWqd6NZL1hweR',
} as const

export const MUNCAT = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'MUNCAT',
    name: 'MUNCAT',
    //logoURI: 'https://cdn.sunpump.meme/public/logo/MUNCAT_TJ44MB_FKFM8Y8eyhH2.jpeg',
  },
  MUNCAT_ADDRESS,
)
