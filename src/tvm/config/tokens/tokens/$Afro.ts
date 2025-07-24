import { TvmChainId } from '../../../chain/chains.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const $Afro_ADDRESS = {
  [TvmChainId.TRON]: 'TDnXXUXH37zEojEfrvYziS6yKSpYmkdjHE',
} as const

export const $Afro = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: '$Afro',
    name: 'Afro',
    //logoURI: 'https://cdn.sunpump.meme/public/logo/$Afro_TPeQ55_cHUMaVSFmoe8.png',
  },
  $Afro_ADDRESS,
)
