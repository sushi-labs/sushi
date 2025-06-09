import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const STG_ADDRESS = {
  [EvmChainId.POLYGON]: '0x2F6F07CDcf3588944Bf4C42aC74ff24bF56e7590',
} as const

export const STG = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'STG',
    name: 'StargateToken',
  },
  STG_ADDRESS,
)
