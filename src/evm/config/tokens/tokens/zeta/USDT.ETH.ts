import { EvmChainId } from '../../../../chain/index.js'
import { addressMapToTokenMap } from '../../address-map-to-token-map.js'

export const ZETA_USDT_ETH_ADDRESS = {
  [EvmChainId.ZETACHAIN]: '0x7c8dda80bbbe1254a7aacf3219ebe1481c6e01d7',
} as const

export const ZETA_USDT_ETH = addressMapToTokenMap(
  { decimals: 6, symbol: 'USDT.ETH', name: 'ZetaChain ZRC20 USDT on ETH' },
  ZETA_USDT_ETH_ADDRESS,
)
