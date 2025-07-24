import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const SNX_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f',
  [EvmChainId.POLYGON]: '0x50b728d8d964fd00c2d0aad81718b71311fef68a',
  [EvmChainId.FANTOM]: '0x56ee926bd8c72b2d5fa1af4d9e4cbb515a1e3adc',
  [EvmChainId.HARMONY]: '0x7b9c523d59aefd362247bd5601a89722e3774dd2',
  [EvmChainId.AVALANCHE]: '0xbec243c995409e6520d7c41e404da5deba4b209b',
  [EvmChainId.OPTIMISM]: '0x8700daec35af8ff88c16bdf0418774cb3d7599b4',
} as const

export const SNX = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'SNX',
    name: 'Synthetix Network Token',
  },
  SNX_ADDRESS,
)
