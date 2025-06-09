import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../../address-map-to-token-map.js'

export const ZETA_USDT_BSC_ADDRESS = {
  [EvmChainId.ZETACHAIN]: '0x91d4F0D54090Df2D81e834c3c8CE71C6c865e79F',
} as const

export const ZETA_USDT_BSC = addressMapToTokenMap(
  { decimals: 18, symbol: 'USDT.BSC', name: 'ZetaChain ZRC20 USDT on BSC' },
  ZETA_USDT_BSC_ADDRESS,
)
