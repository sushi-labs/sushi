import { TvmChainId } from '../../../chain/chains.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const SUN_ADDRESS = {
  [TvmChainId.TRON]: 'TSSMHYeV2uE9qYH95DqyoCuNCzEL1NvU3S',
} as const

export const SUN = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'SUN',
    name: 'SUN',
    //logoURI: 'https://static.tronscan.org/production/logo/TSSMHYeV2uE9qYH95DqyoCuNCzEL1NvU3S.png',
  },
  SUN_ADDRESS,
)
