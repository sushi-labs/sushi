import { EvmChainId } from '../../../../chain/index.js'
import { addressMapToTokenMap } from '../../address-map-to-token-map.js'

export const FILECOIN_USDC_CELER_ADDRESS = {
  [EvmChainId.FILECOIN]: '0x2421db204968a367cc2c866cd057fa754cb84edf',
} as const

export const FILECOIN_USDC_CELER = addressMapToTokenMap(
  { decimals: 6, symbol: 'ceUSDC', name: 'USD Coin (Celer)' },
  FILECOIN_USDC_CELER_ADDRESS,
)
