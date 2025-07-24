import { EvmChainId } from '../../../../chain/index.js'
import { addressMapToTokenMap } from '../../address-map-to-token-map.js'

export const ETHEREUM_CRV_REN_WSBTC_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0x075b1bb99792c9e1041ba13afef80c91a1e70fb3',
} as const

export const ETHEREUM_CRV_REN_WSBTC = addressMapToTokenMap(
  { symbol: 'crvRenWSBTC', name: 'Curve.fi renBTC/wBTC/sBTC', decimals: 18 },
  ETHEREUM_CRV_REN_WSBTC_ADDRESS,
)
