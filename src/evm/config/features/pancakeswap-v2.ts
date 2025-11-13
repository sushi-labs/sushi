import { EvmChainId } from '../../chain/index.js'

export const PANCAKESWAP_V2_SUPPORTED_CHAIN_IDS = [
  EvmChainId.BSC,
  EvmChainId.ETHEREUM,
  EvmChainId.POLYGON_ZKEVM,
  EvmChainId.ZKSYNC_ERA,
  EvmChainId.ARBITRUM,
  EvmChainId.LINEA,
  EvmChainId.BASE,
  EvmChainId.MONAD,
] as const

export const PancakeSwapV2ChainIds = PANCAKESWAP_V2_SUPPORTED_CHAIN_IDS

export type PancakeSwapV2ChainId =
  (typeof PANCAKESWAP_V2_SUPPORTED_CHAIN_IDS)[number]

export const isPancakeSwapV2ChainId = (
  chainId: number,
): chainId is PancakeSwapV2ChainId =>
  PANCAKESWAP_V2_SUPPORTED_CHAIN_IDS.includes(chainId as PancakeSwapV2ChainId)

export const PANCAKESWAP_V2_FACTORY_ADDRESS: Record<
  PancakeSwapV2ChainId,
  `0x${string}`
> = {
  [EvmChainId.BSC]: '0xca143ce32fe78f1f7019d7d551a6402fc5350c73',
  [EvmChainId.ETHEREUM]: '0x1097053fd2ea711dad45caccc45eff7548fcb362',
  [EvmChainId.POLYGON_ZKEVM]: '0x02a84c1b3bbd7401a5f7fa98a384ebc70bb5749e',
  [EvmChainId.ZKSYNC_ERA]: '0xd03d8d566183f0086d8d09a84e1e30b58dd5619d',
  [EvmChainId.ARBITRUM]: '0x02a84c1b3bbd7401a5f7fa98a384ebc70bb5749e',
  [EvmChainId.LINEA]: '0x02a84c1b3bbd7401a5f7fa98a384ebc70bb5749e',
  [EvmChainId.BASE]: '0x02a84c1b3bbd7401a5f7fa98a384ebc70bb5749e',
  [EvmChainId.MONAD]: '0x02a84c1b3bbd7401a5f7fa98a384ebc70bb5749e',
  // [EvmChainId.OP_BNB]: '0x02a84c1b3bbd7401a5f7fa98a384ebc70bb5749e',
} as const

export const PANCAKESWAP_V2_INIT_CODE_HASH: Record<
  PancakeSwapV2ChainId,
  `0x${string}`
> = {
  [EvmChainId.BSC]:
    '0x00fb7f630766e6a796048ea87d01acd3068e8ff67d078148a3fa3f4a84f69bd5',
  [EvmChainId.ETHEREUM]:
    '0x57224589c67f3f30a6b0d7a1b54cf3153ab84563bc609ef41dfb34f8b2974d2d',
  [EvmChainId.POLYGON_ZKEVM]:
    '0x57224589c67f3f30a6b0d7a1b54cf3153ab84563bc609ef41dfb34f8b2974d2d',
  [EvmChainId.ZKSYNC_ERA]:
    '0x0100045707a42494392b3558029b9869f865ff9df8f375dc1bf20b0555093f43',
  [EvmChainId.ARBITRUM]:
    '0x57224589c67f3f30a6b0d7a1b54cf3153ab84563bc609ef41dfb34f8b2974d2d',
  [EvmChainId.LINEA]:
    '0x57224589c67f3f30a6b0d7a1b54cf3153ab84563bc609ef41dfb34f8b2974d2d',
  [EvmChainId.BASE]:
    '0x57224589c67f3f30a6b0d7a1b54cf3153ab84563bc609ef41dfb34f8b2974d2d ',
  [EvmChainId.MONAD]:
    '0x57224589c67f3f30a6b0d7a1b54cf3153ab84563bc609ef41dfb34f8b2974d2d ',
  // [EvmChainId.OP_BNB]:
  //   '0x57224589c67f3f30a6b0d7a1b54cf3153ab84563bc609ef41dfb34f8b2974d2d ',
} as const
