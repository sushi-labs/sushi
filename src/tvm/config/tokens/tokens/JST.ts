import { TvmChainId } from '../../../chain/chains.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const JST_ADDRESS = {
  [TvmChainId.TRON]: 'TCFLL5dx5ZJdKnWuesXxi1VPwjLVmWZZy9',
} as const

export const JST = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'JST',
    name: 'JUST GOV v1.0',
    //logoURI: 'https://static.tronscan.org/production/logo/just_icon.png',
  },
  JST_ADDRESS,
)
