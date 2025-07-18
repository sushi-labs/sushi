import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../../address-map-to-token-map.js'

export const ZETA_USDT_ETH_ADDRESS = {
  [EvmChainId.ZETACHAIN]: '0x7c8dDa80bbBE1254a7aACf3219EBe1481c6E01d7',
} as const

export const ZETA_USDT_ETH = addressMapToTokenMap(
  { decimals: 6, symbol: 'USDT.ETH', name: 'ZetaChain ZRC20 USDT on ETH' },
  ZETA_USDT_ETH_ADDRESS,
)
