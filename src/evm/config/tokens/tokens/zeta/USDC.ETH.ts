import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../../address-map-to-token-map.js'

export const ZETA_USDC_ETH_ADDRESS = {
  [EvmChainId.ZETACHAIN]: '0x0cbe0dF132a6c6B4a2974Fa1b7Fb953CF0Cc798a',
} as const

export const ZETA_USDC_ETH = addressMapToTokenMap(
  { decimals: 6, symbol: 'USDC.ETH', name: 'ZetaChain ZRC20 USDC on ETH' },
  ZETA_USDC_ETH_ADDRESS,
)
