import { TvmChainId } from '../../../chain/chains.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const VIKITA_ADDRESS = {
  [TvmChainId.TRON]: 'TP7r1pDoS1snMjEJE1kE17GRt3Df4mYuZz',
} as const

export const VIKITA = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'VIKITA',
    name: 'VIKITA',
    //logoURI: 'https://cdn.sunpump.meme/public/logo/VIKITA_TVNpDy_QRP17X2aRh0E.jpg',
  },
  VIKITA_ADDRESS,
)
