import { EvmChainId } from '../../chain/evm/index.js'

export const MINICHEF_ADDRESS = {
  [EvmChainId.POLYGON]: '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F',
  [EvmChainId.GNOSIS]: '0xdDCbf776dF3dE60163066A5ddDF2277cB445E0F3',
  [EvmChainId.HARMONY]: '0x67dA5f2FfaDDfF067AB9d5F025F8810634d84287',
  [EvmChainId.ARBITRUM]: '0xF4d73326C13a4Fc5FD7A064217e12780e9Bd62c3',
  [EvmChainId.CELO]: '0x8084936982D089130e001b470eDf58faCA445008',
  [EvmChainId.MOONRIVER]: '0x3dB01570D97631f69bbb0ba39796865456Cf89A5',
  [EvmChainId.FUSE]: '0x182CD0C6F1FaEc0aED2eA83cd0e160c8Bd4cb063',
  [EvmChainId.FANTOM]: '0xf731202A3cf7EfA9368C2d7bD613926f7A144dB5',
  [EvmChainId.MOONBEAM]: '0x011E52E4E40CF9498c79273329E8827b21E2e581',
  [EvmChainId.KAVA]: '0xf731202A3cf7EfA9368C2d7bD613926f7A144dB5',
  [EvmChainId.METIS]: '0x1334c8e873E1cae8467156e2A81d1C8b566B2da1',
  [EvmChainId.BOBA]: '0x75f52766A6a23F736edEfCD69dfBE6153a48c3F3',
  [EvmChainId.ARBITRUM_NOVA]: '0xC09756432dAD2FF50B2D40618f7B04546DD20043',
  [EvmChainId.BTTC]: '0xC09756432dAD2FF50B2D40618f7B04546DD20043',
  [EvmChainId.OPTIMISM]: '0xB25157bF349295a7Cd31D1751973f426182070D6',
  [EvmChainId.AVALANCHE]: '0xe11252176CEDd4a493Aec9767192C06A04A6B04F',
  [EvmChainId.BSC]: '0x5219C5E32b9FFf87F29d5A833832c29134464aaa',
} as const

export const MINICHEF_SUPPORTED_CHAIN_IDS = [
  EvmChainId.POLYGON,
  EvmChainId.GNOSIS,
  // EvmChainId.HARMONY,
  EvmChainId.ARBITRUM,
  EvmChainId.CELO,
  EvmChainId.MOONRIVER,
  EvmChainId.FUSE,
  EvmChainId.FANTOM,
  EvmChainId.MOONBEAM,
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
  chainId: EvmChainId,
): chainId is MiniChefChainId =>
  MINICHEF_SUPPORTED_CHAIN_IDS.includes(chainId as MiniChefChainId)
