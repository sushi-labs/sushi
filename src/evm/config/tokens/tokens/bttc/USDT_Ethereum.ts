import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../../address-map-to-token-map.js'

export const BTTC_USDT_ETHEREUM_ADDRESS = {
  [EvmChainId.BTTC]: '0xe887512ab8bc60bcc9224e1c3b5be68e26048b8b',
} as const

export const BTTC_USDT_ETHEREUM = addressMapToTokenMap(
  { decimals: 6, symbol: 'USDT (Ethereum)', name: 'Tether USD (Ethereum)' },
  BTTC_USDT_ETHEREUM_ADDRESS,
)
