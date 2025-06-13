import { EvmChainId } from '~evm/chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const MAI_ADDRESS = {
  [EvmChainId.POLYGON]: '0xa3Fa99A148fA48D14Ed51d610c367C61876997F1',
  [EvmChainId.FANTOM]: '0xfB98B335551a418cD0737375a2ea0ded62Ea213b',
  [EvmChainId.AVALANCHE]: '0x5c49b268c9841AFF1Cc3B0a418ff5c3442eE3F3b',
  [EvmChainId.HARMONY]: '0x3F56e0c36d275367b8C502090EDF38289b3dEa0d',
  [EvmChainId.ARBITRUM]: '0x3F56e0c36d275367b8C502090EDF38289b3dEa0d',
  [EvmChainId.BOBA]: '0x3F56e0c36d275367b8C502090EDF38289b3dEa0d',
  [EvmChainId.GNOSIS]: '0x3F56e0c36d275367b8C502090EDF38289b3dEa0d',
  [EvmChainId.METIS]: '0xdFA46478F9e5EA86d57387849598dbFB2e964b02',
  [EvmChainId.BSC]: '0x3F56e0c36d275367b8C502090EDF38289b3dEa0d',
  [EvmChainId.CELO]: '0xB9C8F0d3254007eE4b98970b94544e473Cd610EC',
  [EvmChainId.OPTIMISM]: '0xdFA46478F9e5EA86d57387849598dbFB2e964b02',
  [EvmChainId.KAVA]: '0xb84Df10966a5D7e1ab46D9276F55d57bD336AFC7',
  [EvmChainId.ETHEREUM]: '0x8D6CeBD76f18E1558D4DB88138e2DeFB3909fAD6',
} as const

export const MAI = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'MAI',
    name: 'Mai Stablecoin',
  },
  MAI_ADDRESS,
)
