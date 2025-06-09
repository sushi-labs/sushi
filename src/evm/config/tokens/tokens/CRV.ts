import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const CRV_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0xD533a949740bb3306d119CC777fa900bA034cd52',
  [EvmChainId.POLYGON]: '0x172370d5Cd63279eFa6d502DAB29171933a610AF',
  [EvmChainId.ARBITRUM]: '0x11cdb42b0eb46d95f990bedd4695a6e3fa034978',
  [EvmChainId.OPTIMISM]: '0x0994206dfE8De6Ec6920FF4D779B0d950605Fb53',
} as const

export const CRV = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'CRV',
    name: 'Curve DAO Token',
  },
  CRV_ADDRESS,
)
