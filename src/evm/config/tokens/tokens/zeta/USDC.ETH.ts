import { EvmChainId } from '../../../../chain/index.js'
import { addressMapToTokenMap } from '../../address-map-to-token-map.js'

export const ZETA_USDC_ETH_ADDRESS = {
  [EvmChainId.ZETACHAIN]: '0x0cbe0df132a6c6b4a2974fa1b7fb953cf0cc798a',
} as const

export const ZETA_USDC_ETH = addressMapToTokenMap(
  { decimals: 6, symbol: 'USDC.ETH', name: 'ZetaChain ZRC20 USDC on ETH' },
  ZETA_USDC_ETH_ADDRESS,
)
