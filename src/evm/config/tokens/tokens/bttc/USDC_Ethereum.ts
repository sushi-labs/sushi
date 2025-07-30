import { EvmChainId } from '../../../../chain/index.js'
import { addressMapToTokenMap } from '../../address-map-to-token-map.js'

export const BTTC_USDC_ETHEREUM_ADDRESS = {
  [EvmChainId.BTTC]: '0xae17940943ba9440540940db0f1877f101d39e8b',
} as const

export const BTTC_USDC_ETHEREUM = addressMapToTokenMap(
  { decimals: 6, symbol: 'USDC (Ethereum)', name: 'USD Coin (Ethereum)' },
  BTTC_USDC_ETHEREUM_ADDRESS,
)
