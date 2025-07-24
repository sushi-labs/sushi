import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const MAI_ADDRESS = {
  [EvmChainId.POLYGON]: '0xa3fa99a148fa48d14ed51d610c367c61876997f1',
  [EvmChainId.FANTOM]: '0xfb98b335551a418cd0737375a2ea0ded62ea213b',
  [EvmChainId.AVALANCHE]: '0x5c49b268c9841aff1cc3b0a418ff5c3442ee3f3b',
  [EvmChainId.HARMONY]: '0x3f56e0c36d275367b8c502090edf38289b3dea0d',
  [EvmChainId.ARBITRUM]: '0x3f56e0c36d275367b8c502090edf38289b3dea0d',
  [EvmChainId.BOBA]: '0x3f56e0c36d275367b8c502090edf38289b3dea0d',
  [EvmChainId.GNOSIS]: '0x3f56e0c36d275367b8c502090edf38289b3dea0d',
  [EvmChainId.METIS]: '0xdfa46478f9e5ea86d57387849598dbfb2e964b02',
  [EvmChainId.BSC]: '0x3f56e0c36d275367b8c502090edf38289b3dea0d',
  [EvmChainId.CELO]: '0xb9c8f0d3254007ee4b98970b94544e473cd610ec',
  [EvmChainId.OPTIMISM]: '0xdfa46478f9e5ea86d57387849598dbfb2e964b02',
  [EvmChainId.KAVA]: '0xb84df10966a5d7e1ab46d9276f55d57bd336afc7',
  [EvmChainId.ETHEREUM]: '0x8d6cebd76f18e1558d4db88138e2defb3909fad6',
} as const

export const MAI = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'MAI',
    name: 'Mai Stablecoin',
  },
  MAI_ADDRESS,
)
