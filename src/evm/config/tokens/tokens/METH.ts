import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const METH_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0xd5f7838f5c461feff7fe49ea5ebaf7728bb0adfa',
  [EvmChainId.MANTLE]: '0xcda86a272531e8640cd7f1a92c01839911b90bb0',
} as const

export const METH = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'mETH',
    name: 'Mantle Staked Ether',
  },
  METH_ADDRESS,
)
