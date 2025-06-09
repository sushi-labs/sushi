import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../../address-map-to-token-map.js'

export const ZETA_USDC_BSC_ADDRESS = {
  [EvmChainId.ZETACHAIN]: '0x05BA149A7bd6dC1F937fA9046A9e05C05f3b18b0',
} as const

export const ZETA_USDC_BSC = addressMapToTokenMap(
  { decimals: 18, symbol: 'USDC.BSC', name: 'ZetaChain ZRC20 USDC on BSC' },
  ZETA_USDC_BSC_ADDRESS,
)
