import { EvmChainId } from '~evm/chain/chains.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const SGETH_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0x72E2F4830b9E45d52F80aC08CB2bEC0FeF72eD9c',
  [EvmChainId.ARBITRUM]: '0x82CbeCF39bEe528B5476FE6d1550af59a9dB6Fc0',
  [EvmChainId.OPTIMISM]: '0xb69c8CBCD90A39D8D3d3ccf0a3E968511C3856A0',
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
