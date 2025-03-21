import { EvmChainId } from '../../chain/evm/index.js'

const POOL_INIT_CODE_HASH =
  '0x6ce8eb472fa82df5469c6ab6d485f17c3ad13c8cd7af59b3d4a8026c5ce0f7e2'

/**
 * The default factory enabled fee amounts, denominated in hundredths of bips.
 */

export enum PancakeSwapV3FeeAmount {
  /** 0.01% */
  LOWEST = 100,
  /** 0.1% */
  LOW = 500,
  /** 0.25% */
  MEDIUM = 2500,
  /** 1% */
  HIGH = 10000,
}

export const PANCAKESWAP_V3_FEE_SPACING_MAP: Record<
  PancakeSwapV3FeeAmount,
  number
> = {
  100: 1,
  500: 10,
  2500: 50,
  10_000: 200,
}

export const PANCAKESWAP_V3_SUPPORTED_CHAIN_IDS = [
  EvmChainId.ARBITRUM,
  EvmChainId.BASE,
  EvmChainId.BSC,
  EvmChainId.ETHEREUM,
  EvmChainId.LINEA,
  EvmChainId.POLYGON_ZKEVM,
  EvmChainId.ZKSYNC_ERA,
] as const

export const PancakeSwapV3ChainIds = PANCAKESWAP_V3_SUPPORTED_CHAIN_IDS

export type PancakeSwapV3ChainId =
  (typeof PANCAKESWAP_V3_SUPPORTED_CHAIN_IDS)[number]

export const isPancakeSwapV3ChainId = (
  chainId: EvmChainId,
): chainId is PancakeSwapV3ChainId =>
  PANCAKESWAP_V3_SUPPORTED_CHAIN_IDS.includes(chainId as PancakeSwapV3ChainId)

export const PANCAKESWAP_V3_INIT_CODE_HASH: Record<
  PancakeSwapV3ChainId,
  `0x${string}`
> = {
  [EvmChainId.ARBITRUM]: POOL_INIT_CODE_HASH,
  [EvmChainId.BASE]: POOL_INIT_CODE_HASH,
  [EvmChainId.BSC]: POOL_INIT_CODE_HASH,
  [EvmChainId.ETHEREUM]: POOL_INIT_CODE_HASH,
  [EvmChainId.LINEA]: POOL_INIT_CODE_HASH,
  [EvmChainId.POLYGON_ZKEVM]: POOL_INIT_CODE_HASH,
  [EvmChainId.ZKSYNC_ERA]:
    '0x01001487a7c45b21c52a0bc0558bf48d897d14792f1d0cc82733c8271d069178',
} as const

export const PANCAKESWAP_V3_FACTORY_ADDRESS: Record<
  PancakeSwapV3ChainId,
  `0x${string}`
> = {
  [EvmChainId.ARBITRUM]: '0x0BFbCF9fa4f9C56B0F40a671Ad40E0805A091865',
  [EvmChainId.BASE]: '0x0BFbCF9fa4f9C56B0F40a671Ad40E0805A091865',
  [EvmChainId.BSC]: '0x0BFbCF9fa4f9C56B0F40a671Ad40E0805A091865',
  [EvmChainId.ETHEREUM]: '0x0BFbCF9fa4f9C56B0F40a671Ad40E0805A091865',
  [EvmChainId.LINEA]: '0x0BFbCF9fa4f9C56B0F40a671Ad40E0805A091865',
  [EvmChainId.POLYGON_ZKEVM]: '0x0BFbCF9fa4f9C56B0F40a671Ad40E0805A091865',
  [EvmChainId.ZKSYNC_ERA]: '0x1BB72E0CbbEA93c08f535fc7856E0338D7F7a8aB',
} as const

export const PANCAKESWAP_V3_DEPLOYER_ADDRESS: Record<
  PancakeSwapV3ChainId,
  `0x${string}`
> = {
  [EvmChainId.ARBITRUM]: '0x41ff9AA7e16B8B1a8a8dc4f0eFacd93D02d071c9',
  [EvmChainId.BASE]: '0x41ff9AA7e16B8B1a8a8dc4f0eFacd93D02d071c9',
  [EvmChainId.BSC]: '0x41ff9AA7e16B8B1a8a8dc4f0eFacd93D02d071c9',
  [EvmChainId.ETHEREUM]: '0x41ff9AA7e16B8B1a8a8dc4f0eFacd93D02d071c9',
  [EvmChainId.LINEA]: '0x41ff9AA7e16B8B1a8a8dc4f0eFacd93D02d071c9',
  [EvmChainId.POLYGON_ZKEVM]: '0x41ff9AA7e16B8B1a8a8dc4f0eFacd93D02d071c9',
  [EvmChainId.ZKSYNC_ERA]: '0x7f71382044A6a62595D5D357fE75CA8199123aD6',
} as const
