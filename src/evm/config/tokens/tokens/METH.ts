import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const METH_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0xd5F7838F5C461fefF7FE49ea5ebaF7728bB0ADfa',
  [EvmChainId.MANTLE]: '0xcDA86A272531e8640cD7F1a92c01839911B90bb0',
} as const

export const METH = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'mETH',
    name: 'Mantle Staked Ether',
  },
  METH_ADDRESS,
)
