import { EvmChainId } from '../../../../chain/index.js'
import { addressMapToTokenMap } from '../../address-map-to-token-map.js'

export const ETHEREUM_STETH_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0xae7ab96520de3a18e5e111b5eaab095312d7fe84',
} as const

export const ETHEREUM_STETH = addressMapToTokenMap(
  { name: 'Liquid staked Ether 2.0', symbol: 'stETH', decimals: 18 },
  ETHEREUM_STETH_ADDRESS,
)
