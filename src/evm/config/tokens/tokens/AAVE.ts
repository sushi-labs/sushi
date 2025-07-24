import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const AAVE_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9',
  [EvmChainId.POLYGON]: '0xd6df932a45c0f255f85145f286ea0b292b21c90b',
  [EvmChainId.FANTOM]: '0x6a07a792ab2965c72a5b8088d3a069a7ac3a993b',
  [EvmChainId.HARMONY]: '0xcf323aad9e522b93f11c352caa519ad0e14eb40f',
  [EvmChainId.AVALANCHE]: '0x63a72806098bd3d9520cc43356dd78afe5d386d9',
  [EvmChainId.BSC]: '0xfb6115445bff7b52feb98650c87f44907e58f802',
  [EvmChainId.OPTIMISM]: '0x76fb31fb4af56892a25e32cfc43de717950c9278',
} as const

export const AAVE = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'AAVE',
    name: 'Aave Token',
  },
  AAVE_ADDRESS,
)
