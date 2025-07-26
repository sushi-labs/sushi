import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const LUSD_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0x5f98805a4e8be255a32880fdec7f6728c6568ba0',
  [EvmChainId.OPTIMISM]: '0xc40f949f8a4e094d1b49a23ea9241d289b7b2819',
} as const

export const LUSD = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'LUSD',
    name: 'LUSD Stablecoin',
  },
  LUSD_ADDRESS,
)
