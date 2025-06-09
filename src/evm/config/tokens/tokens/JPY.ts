import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const JPY_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0x431D5dfF03120AFA4bDf332c61A6e1766eF37BDB',
  [EvmChainId.POLYGON]: '0x6AE7Dfc73E0dDE2aa99ac063DcF7e8A63265108c',
  [EvmChainId.AVALANCHE]: '0x431D5dfF03120AFA4bDf332c61A6e1766eF37BDB',
  [EvmChainId.GNOSIS]: '0x431D5dfF03120AFA4bDf332c61A6e1766eF37BDB',
} as const

export const JPY = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'JPYC',
    name: 'JPY Coin',
  },
  JPY_ADDRESS,
)
