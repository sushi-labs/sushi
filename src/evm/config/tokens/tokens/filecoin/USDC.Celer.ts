import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../../address-map-to-token-map.js'

export const FILECOIN_USDC_CELER_ADDRESS = {
  [EvmChainId.FILECOIN]: '0x2421db204968A367CC2C866CD057fA754Cb84EdF',
} as const

export const FILECOIN_USDC_CELER = addressMapToTokenMap(
  { decimals: 6, symbol: 'ceUSDC', name: 'USD Coin (Celer)' },
  FILECOIN_USDC_CELER_ADDRESS,
)
