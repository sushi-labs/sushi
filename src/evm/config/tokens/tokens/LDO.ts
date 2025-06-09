import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const LDO_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32',
} as const

export const LDO = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'LDO',
    name: 'Lido DAO Token',
  },
  LDO_ADDRESS,
)
