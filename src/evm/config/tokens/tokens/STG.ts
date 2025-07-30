import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const STG_ADDRESS = {
  [EvmChainId.POLYGON]: '0x2f6f07cdcf3588944bf4c42ac74ff24bf56e7590',
} as const

export const STG = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'STG',
    name: 'StargateToken',
  },
  STG_ADDRESS,
)
