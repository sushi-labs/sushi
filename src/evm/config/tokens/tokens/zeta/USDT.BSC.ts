import { EvmChainId } from '../../../../chain/index.js'
import { addressMapToTokenMap } from '../../address-map-to-token-map.js'

export const ZETA_USDT_BSC_ADDRESS = {
  [EvmChainId.ZETACHAIN]: '0x91d4f0d54090df2d81e834c3c8ce71c6c865e79f',
} as const

export const ZETA_USDT_BSC = addressMapToTokenMap(
  { decimals: 18, symbol: 'USDT.BSC', name: 'ZetaChain ZRC20 USDT on BSC' },
  ZETA_USDT_BSC_ADDRESS,
)
