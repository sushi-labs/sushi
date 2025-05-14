import type { Address } from 'viem'
import { EvmChainId } from '../../chain/evm/index.js'

export const UNISWAP_V4_SUPPORTED_CHAIN_IDS = [
  EvmChainId.ETHEREUM,
  EvmChainId.OPTIMISM,
  EvmChainId.BASE,
  EvmChainId.ARBITRUM,
  EvmChainId.POLYGON,
  EvmChainId.BLAST,
  EvmChainId.AVALANCHE,
  EvmChainId.BSC,
] as const

export const UniswapV4ChainIds = UNISWAP_V4_SUPPORTED_CHAIN_IDS

export type UniswapV4ChainId = (typeof UNISWAP_V4_SUPPORTED_CHAIN_IDS)[number]

export const isUniswapV4ChainId = (
  chainId: EvmChainId,
): chainId is UniswapV4ChainId =>
  UNISWAP_V4_SUPPORTED_CHAIN_IDS.includes(chainId as UniswapV4ChainId)

export const UNISWAP_V4_POOL_MANAGER_ADDRESS: Record<
  UniswapV4ChainId,
  Address
> = {
  [EvmChainId.ETHEREUM]: '0x000000000004444c5dc75cB358380D2e3dE08A90',
  [EvmChainId.OPTIMISM]: '0x9a13f98cb987694c9f086b1f5eb990eea8264ec3',
  [EvmChainId.BASE]: '0x498581ff718922c3f8e6a244956af099b2652b2b',
  [EvmChainId.ARBITRUM]: '0x360e68faccca8ca495c1b759fd9eee466db9fb32',
  [EvmChainId.POLYGON]: '0x67366782805870060151383f4bbff9dab53e5cd6',
  [EvmChainId.BLAST]: '0x1631559198a9e474033433b2958dabc135ab6446',
  [EvmChainId.AVALANCHE]: '0x06380c0e0912312b5150364b9dc4542ba0dbbc85',
  [EvmChainId.BSC]: '0x28e2ea090877bf75740558f6bfb36a5ffee9e9df',
} as const
