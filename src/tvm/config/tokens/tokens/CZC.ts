import { TvmChainId } from '../../../chain/chains.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const CZC_ADDRESS = {
  [TvmChainId.TRON]: 'TRJBN2ninnLKUUDR1f686goCYetPcPed8f',
} as const

export const CZC = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'CZC',
    name: 'Crypto Zillion Club',
    //logoURI: 'https://cdn.sunpump.meme/public/logo/CZC_TH5Eyn_1tR9tsfvqbYq.png',
  },
  CZC_ADDRESS,
)
