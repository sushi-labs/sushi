import { EvmChainId } from '../../../../chain/index.js'
import { addressMapToTokenMap } from '../../address-map-to-token-map.js'

export const BTTC_USDT_BSC_ADDRESS = {
  [EvmChainId.BTTC]: '0x9b5f27f6ea9bbd753ce3793a07cba3c74644330d',
} as const

export const BTTC_USDT_BSC = addressMapToTokenMap(
  { decimals: 18, symbol: 'USDT (BSC)', name: 'Tether USD (BSC)' },
  BTTC_USDT_BSC_ADDRESS,
)
