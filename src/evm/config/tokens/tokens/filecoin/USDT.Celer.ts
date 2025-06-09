import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../../address-map-to-token-map.js'

export const FILECOIN_USDT_CELER_ADDRESS = {
  [EvmChainId.FILECOIN]: '0x422849b355039bc58f2780cc4854919fc9cfaf94',
} as const

export const FILECOIN_USDT_CELER = addressMapToTokenMap(
  { decimals: 6, symbol: 'ceUSDT', name: 'Tether USD (Celer)' },
  FILECOIN_USDT_CELER_ADDRESS,
)
