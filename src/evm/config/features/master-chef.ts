import { EvmChainId } from '../../chain/index.js'

export const MASTERCHEF_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0xc2edad668740f1aa35e4d8f227fb8e17dca888cd',
  // [EvmChainId.ROPSTEN]: '0x80c7dd17b01855a6d2347444a0fcc36136a314de',
  // [EvmChainId.RINKEBY]: '0x80c7dd17b01855a6d2347444a0fcc36136a314de',
  // [EvmChainId.GÖRLI]: '0x80c7dd17b01855a6d2347444a0fcc36136a314de',
  // [EvmChainId.KOVAN]: '0x80c7dd17b01855a6d2347444a0fcc36136a314de',
} as const

export const MASTERCHEF_V2_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0xef0881ec094552b2e128cf945ef17a6752b4ec5d',
} as const
