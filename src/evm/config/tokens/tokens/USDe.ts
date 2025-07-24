import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const USDe_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0x4c9edd5852cd905f086c759e8383e09bff1e68b3',
  [EvmChainId.MANTLE]: '0x5d3a1ff2b6bab83b63cd9ad0787074081a52ef34',
  [EvmChainId.ARBITRUM]: '0x5d3a1ff2b6bab83b63cd9ad0787074081a52ef34',
  [EvmChainId.BLAST]: '0x5d3a1ff2b6bab83b63cd9ad0787074081a52ef34',
} as const

export const USDe = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'USDe',
    name: 'USDe',
  },
  USDe_ADDRESS,
)
