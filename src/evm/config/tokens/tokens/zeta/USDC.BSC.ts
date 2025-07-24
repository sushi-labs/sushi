import { EvmChainId } from '../../../../chain/index.js'
import { addressMapToTokenMap } from '../../address-map-to-token-map.js'

export const ZETA_USDC_BSC_ADDRESS = {
  [EvmChainId.ZETACHAIN]: '0x05ba149a7bd6dc1f937fa9046a9e05c05f3b18b0',
} as const

export const ZETA_USDC_BSC = addressMapToTokenMap(
  { decimals: 18, symbol: 'USDC.BSC', name: 'ZetaChain ZRC20 USDC on BSC' },
  ZETA_USDC_BSC_ADDRESS,
)
