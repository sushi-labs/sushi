import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const CRV_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0xd533a949740bb3306d119cc777fa900ba034cd52',
  [EvmChainId.POLYGON]: '0x172370d5cd63279efa6d502dab29171933a610af',
  [EvmChainId.ARBITRUM]: '0x11cdb42b0eb46d95f990bedd4695a6e3fa034978',
  [EvmChainId.OPTIMISM]: '0x0994206dfe8de6ec6920ff4d779b0d950605fb53',
} as const

export const CRV = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'CRV',
    name: 'Curve DAO Token',
  },
  CRV_ADDRESS,
)
