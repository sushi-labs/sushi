import { EvmChainId } from '../../chain/index.js'

export const MINICHEF_ADDRESS = {
  [EvmChainId.POLYGON]: '0x0769fd68dfb93167989c6f7254cd0d766fb2841f',
  [EvmChainId.GNOSIS]: '0xddcbf776df3de60163066a5dddf2277cb445e0f3',
  [EvmChainId.HARMONY]: '0x67da5f2ffaddff067ab9d5f025f8810634d84287',
  [EvmChainId.ARBITRUM]: '0xf4d73326c13a4fc5fd7a064217e12780e9bd62c3',
  [EvmChainId.CELO]: '0x8084936982d089130e001b470edf58faca445008',
  [EvmChainId.FANTOM]: '0xf731202a3cf7efa9368c2d7bd613926f7a144db5',
  [EvmChainId.KAVA]: '0xf731202a3cf7efa9368c2d7bd613926f7a144db5',
  [EvmChainId.METIS]: '0x1334c8e873e1cae8467156e2a81d1c8b566b2da1',
  [EvmChainId.BOBA]: '0x75f52766a6a23f736edefcd69dfbe6153a48c3f3',
  [EvmChainId.ARBITRUM_NOVA]: '0xc09756432dad2ff50b2d40618f7b04546dd20043',
  [EvmChainId.BTTC]: '0xc09756432dad2ff50b2d40618f7b04546dd20043',
  [EvmChainId.OPTIMISM]: '0xb25157bf349295a7cd31d1751973f426182070d6',
  [EvmChainId.AVALANCHE]: '0xe11252176cedd4a493aec9767192c06a04a6b04f',
  [EvmChainId.BSC]: '0x5219c5e32b9fff87f29d5a833832c29134464aaa',
} as const

export const MINICHEF_SUPPORTED_CHAIN_IDS = [
  EvmChainId.POLYGON,
  EvmChainId.GNOSIS,
  // EvmChainId.HARMONY,
  EvmChainId.ARBITRUM,
  EvmChainId.CELO,
  EvmChainId.FANTOM,
  EvmChainId.KAVA,
  EvmChainId.METIS,
  EvmChainId.BOBA,
  EvmChainId.ARBITRUM_NOVA,
  EvmChainId.BTTC,
  EvmChainId.OPTIMISM,
  EvmChainId.AVALANCHE,
  EvmChainId.BSC,
] as const

export type MiniChefChainId = (typeof MINICHEF_SUPPORTED_CHAIN_IDS)[number]

export const isMiniChefChainId = (
  chainId: number,
): chainId is MiniChefChainId =>
  MINICHEF_SUPPORTED_CHAIN_IDS.includes(chainId as MiniChefChainId)
