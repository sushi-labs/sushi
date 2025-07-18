import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const SNX_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F',
  [EvmChainId.POLYGON]: '0x50B728D8D964fd00C2d0AAD81718b71311feF68a',
  [EvmChainId.FANTOM]: '0x56ee926bD8c72B2d5fa1aF4d9E4Cbb515a1E3Adc',
  [EvmChainId.HARMONY]: '0x7b9c523d59AeFd362247Bd5601A89722e3774dD2',
  [EvmChainId.AVALANCHE]: '0xBeC243C995409E6520D7C41E404da5dEba4b209B',
  [EvmChainId.OPTIMISM]: '0x8700dAec35aF8Ff88c16BdF0418774CB3D7599B4',
} as const

export const SNX = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'SNX',
    name: 'Synthetix Network Token',
  },
  SNX_ADDRESS,
)
