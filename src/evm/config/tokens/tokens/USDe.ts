import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const USDe_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0x4c9EDD5852cd905f086C759E8383e09bff1E68B3',
  [EvmChainId.MANTLE]: '0x5d3a1Ff2b6BAb83b63cd9AD0787074081a52ef34',
  [EvmChainId.ARBITRUM]: '0x5d3a1Ff2b6BAb83b63cd9AD0787074081a52ef34',
  [EvmChainId.BLAST]: '0x5d3a1Ff2b6BAb83b63cd9AD0787074081a52ef34',
} as const

export const USDe = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'USDe',
    name: 'USDe',
  },
  USDe_ADDRESS,
)
