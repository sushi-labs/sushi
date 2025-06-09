import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../../address-map-to-token-map.js'

export const ETHEREUM_STETH_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84',
} as const

export const ETHEREUM_STETH = addressMapToTokenMap(
  { name: 'Liquid staked Ether 2.0', symbol: 'stETH', decimals: 18 },
  ETHEREUM_STETH_ADDRESS,
)
