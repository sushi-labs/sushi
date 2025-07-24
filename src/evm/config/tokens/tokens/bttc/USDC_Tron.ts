import { EvmChainId } from '../../../../chain/index.js'
import { addressMapToTokenMap } from '../../address-map-to-token-map.js'

export const BTTC_USDC_TRON_ADDRESS = {
  [EvmChainId.BTTC]: '0x935faa2fcec6ab81265b301a30467bbc804b43d3',
} as const

export const BTTC_USDC_TRON = addressMapToTokenMap(
  { decimals: 6, symbol: 'USDC (Tron)', name: 'USD Coin (Tron)' },
  BTTC_USDC_TRON_ADDRESS,
)
