import { TvmChainId } from '../../../chain/chains.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const sTRX_ADDRESS = {
  [TvmChainId.TRON]: 'TU3kjFuhtEo42tsCBtfYUAZxoqQ4yuSLQ5',
} as const

export const sTRX = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'sTRX',
    name: 'staked TRX',
    //logoURI: 'https://static.tronscan.org/production/upload/logo/new/TU3kjFuhtEo42tsCBtfYUAZxoqQ4yuSLQ5.png',
  },
  sTRX_ADDRESS,
)
