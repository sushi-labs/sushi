import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const AAVE_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9',
  [EvmChainId.POLYGON]: '0xD6DF932A45C0f255f85145f286eA0b292B21C90B',
  [EvmChainId.FANTOM]: '0x6a07A792ab2965C72a5B8088d3a069A7aC3a993B',
  [EvmChainId.HARMONY]: '0xcF323Aad9E522B93F11c352CaA519Ad0E14eB40F',
  [EvmChainId.AVALANCHE]: '0x63a72806098Bd3D9520cC43356dD78afe5D386D9',
  [EvmChainId.BSC]: '0xfb6115445Bff7b52FeB98650C87f44907E58f802',
  [EvmChainId.OPTIMISM]: '0x76FB31fb4af56892A25e32cFC43De717950c9278',
} as const

export const AAVE = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'AAVE',
    name: 'Aave Token',
  },
  AAVE_ADDRESS,
)
