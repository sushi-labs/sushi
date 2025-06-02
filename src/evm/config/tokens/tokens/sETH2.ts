import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const sETH2_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0xFe2e637202056d30016725477c5da089Ab0A043A',
} as const

export const sETH2 = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'sETH2',
    name: 'StakeWise Staked ETH2',
  },
  sETH2_ADDRESS,
)
