import { TvmChainId } from '~tvm/chain/chains.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const LTC_ADDRESS = {
  [TvmChainId.TRON]: 'TR3DLthpnDdCGabhVDbD3VMsiJoCXY3bZd',
} as const

export const LTC = addressMapToTokenMap(
  {
    decimals: 8,
    symbol: 'LTC',
    name: 'Litecoin',
    //logoURI: 'https://static.tronscan.org/production/logo/TR3DLthpnDdCGabhVDbD3VMsiJoCXY3bZd.png',
  },
  LTC_ADDRESS,
)
