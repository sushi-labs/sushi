import { EvmChainId } from '../../../../chain/index.js'
import { addressMapToTokenMap } from '../../address-map-to-token-map.js'

export const BTTC_USDT_TRON_ADDRESS = {
  [EvmChainId.BTTC]: '0xdb28719f7f938507dbfe4f0eae55668903d34a15',
} as const

export const BTTC_USDT_TRON = addressMapToTokenMap(
  { decimals: 6, symbol: 'USDT (Tron)', name: 'Tether USD (Tron)' },
  BTTC_USDT_TRON_ADDRESS,
)
