import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../../address-map-to-token-map.js'

export const BTTC_USDC_BSC_ADDRESS = {
  [EvmChainId.BTTC]: '0xca424b845497f7204d9301bd13ff87c0e2e86fcf',
} as const

export const BTTC_USDC_BSC = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'USDC (BSC)',
    name: 'USD Coin (BSC)',
  },
  BTTC_USDC_BSC_ADDRESS,
)
