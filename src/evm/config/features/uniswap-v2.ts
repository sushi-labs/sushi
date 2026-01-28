import { EvmChainId } from '../../chain/index.js'

export const UNISWAP_V2_FACTORY_ADDRESS: Record<
  UniswapV2ChainId,
  `0x${string}`
> = {
  [EvmChainId.ETHEREUM]: '0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f',
  [EvmChainId.OPTIMISM]: '0x0c3c1c532f1e39edf36be9fe0be1410313e074bf',
  [EvmChainId.ARBITRUM]: '0xf1d7cc64fb4452f05c498126312ebe29f30fbcf9',
  [EvmChainId.AVALANCHE]: '0x9e5a52f57b3038f1b8eee45f28b3c1967e22799c',
  [EvmChainId.BASE]: '0x8909dc15e40173ff4699343b6eb8132c65e18ec6',
  [EvmChainId.BSC]: '0x8909dc15e40173ff4699343b6eb8132c65e18ec6',
  [EvmChainId.POLYGON]: '0x9e5a52f57b3038f1b8eee45f28b3c1967e22799c',
  [EvmChainId.CELO]: '0x79a530c8e2fa8748b7b40dd3629c0520c2ccf03f',
  [EvmChainId.BLAST]: '0x5c346464d33f90babaf70db6388507cc889c1070',
  [EvmChainId.SEPOLIA]: '0xf62c03e08ada871a0beb309762e260a7a6a880e6',
  [EvmChainId.MONAD]: '0x182a927119d56008d921126764bf884221b10f59',
  [EvmChainId.XLAYER]: '0xdf38f24fe153761634be942f9d859f3dba857e95',
}

export const UNISWAP_V2_INIT_CODE_HASH =
  '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f' as `0x${string}`

export const UNISWAP_V2_SUPPORTED_CHAIN_IDS = [
  EvmChainId.ETHEREUM,
  EvmChainId.OPTIMISM,
  EvmChainId.ARBITRUM,
  EvmChainId.AVALANCHE,
  EvmChainId.BASE,
  EvmChainId.BSC,
  EvmChainId.POLYGON,
  EvmChainId.CELO,
  EvmChainId.BLAST,
  EvmChainId.SEPOLIA,
  EvmChainId.MONAD,
  EvmChainId.XLAYER,
] as const

export const UniswapV2ChainIds = UNISWAP_V2_SUPPORTED_CHAIN_IDS

export type UniswapV2ChainId = (typeof UNISWAP_V2_SUPPORTED_CHAIN_IDS)[number]
