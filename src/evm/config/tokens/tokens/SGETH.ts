import { EvmChainId } from '../../../chain/chains.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const SGETH_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0x72e2f4830b9e45d52f80ac08cb2bec0fef72ed9c',
  [EvmChainId.ARBITRUM]: '0x82cbecf39bee528b5476fe6d1550af59a9db6fc0',
  [EvmChainId.OPTIMISM]: '0xb69c8cbcd90a39d8d3d3ccf0a3e968511c3856a0',
  [EvmChainId.BASE]: '0x224d8fd7ab6ad4c6eb4611ce56ef35dec2277f03',
  [EvmChainId.LINEA]: '0x224d8fd7ab6ad4c6eb4611ce56ef35dec2277f03',
} as const

export const SGETH = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'SGETH',
    name: 'Stargate ETH',
  },
  SGETH_ADDRESS,
)
