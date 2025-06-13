import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const rETH_ADDRESS = {
  [EvmChainId.ARBITRUM]: '0xEC70Dcb4A1EFa46b8F2D97C310C9c4790ba5ffA8',
  [EvmChainId.BASE]: '0x53878B874283351D26d206FA512aEcE1Bef6C0dD',
  [EvmChainId.ETHEREUM]: '0xae78736cd615f374d3085123a210448e74fc6393',
  [EvmChainId.OPTIMISM]: '0x9Bcef72be871e61ED4fBbc7630889beE758eb81D',
  [EvmChainId.POLYGON]: '0x0266F4F08D82372CF0FcbCCc0Ff74309089c74d1',
  [EvmChainId.POLYGON_ZKEVM]: '0xb23C20EFcE6e24Acca0Cef9B7B7aA196b84EC942',
  [EvmChainId.SCROLL]: '0x53878B874283351D26d206FA512aEcE1Bef6C0dD',
  [EvmChainId.SKALE_EUROPA]: '0x4c21E0Bde3f02aDea7a874DBd705c30a3187eeaf',
} as const

export const rETH = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'rETH',
    name: 'Rocket Pool ETH',
  },
  rETH_ADDRESS,
)
