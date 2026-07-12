import { EvmChainId } from "../../../../chain/chains.js"
import { addressMapToTokenMap } from "../../address-map-to-token-map.js"

export const ROBINHOOD_USDG_ADDRESS = {
  [EvmChainId.ROBINHOOD]: '0x5fc5360d0400a0fd4f2af552add042d716f1d168',
} as const

export const ROBINHOOD_USDG = addressMapToTokenMap(
  { decimals: 6, symbol: 'USDG', name: 'Global Dollar' },
  ROBINHOOD_USDG_ADDRESS,
)
