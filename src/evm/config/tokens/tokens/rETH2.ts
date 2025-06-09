import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const rETH2_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0x20BC832ca081b91433ff6c17f85701B6e92486c5',
} as const

export const rETH2 = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'rETH2',
    name: 'StakeWise Reward ETH2',
  },
  rETH2_ADDRESS,
)
