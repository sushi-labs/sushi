import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const rETH_ADDRESS = {
  [EvmChainId.ARBITRUM]: '0xec70dcb4a1efa46b8f2d97c310c9c4790ba5ffa8',
  [EvmChainId.BASE]: '0x53878b874283351d26d206fa512aece1bef6c0dd',
  [EvmChainId.ETHEREUM]: '0xae78736cd615f374d3085123a210448e74fc6393',
  [EvmChainId.OPTIMISM]: '0x9bcef72be871e61ed4fbbc7630889bee758eb81d',
  [EvmChainId.POLYGON]: '0x0266f4f08d82372cf0fcbccc0ff74309089c74d1',
  [EvmChainId.POLYGON_ZKEVM]: '0xb23c20efce6e24acca0cef9b7b7aa196b84ec942',
  [EvmChainId.SCROLL]: '0x53878b874283351d26d206fa512aece1bef6c0dd',
  [EvmChainId.SKALE_EUROPA]: '0x4c21e0bde3f02adea7a874dbd705c30a3187eeaf',
} as const

export const rETH = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'rETH',
    name: 'Rocket Pool ETH',
  },
  rETH_ADDRESS,
)
