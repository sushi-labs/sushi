import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const LUSD_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0x5f98805A4E8be255a32880FDeC7F6728C6568bA0',
  [EvmChainId.OPTIMISM]: '0xc40F949F8a4e094D1b49a23ea9241D289B7b2819',
} as const

export const LUSD = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'LUSD',
    name: 'LUSD Stablecoin',
  },
  LUSD_ADDRESS,
)
