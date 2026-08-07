import type { Address } from 'viem'
import { EvmChainId } from '../../chain/index.js'

/**
 * SushiSwap V4 is the CL-only Infinity deployment. It deliberately has no
 * dynamic-fee hook configured at launch; pool fees and tick spacing are set
 * when each static-fee pool is initialized.
 */
export const SUSHISWAP_V4_SUPPORTED_CHAIN_IDS = [
  EvmChainId.ARBITRUM,
  EvmChainId.BASE,
  EvmChainId.BSC,
  EvmChainId.ETHEREUM,
  EvmChainId.SEPOLIA,
  EvmChainId.POLYGON,
  EvmChainId.UNICHAIN,
  EvmChainId.WORLDCHAIN,
  EvmChainId.ROBINHOOD,
] as const

export const SushiSwapV4ChainIds = SUSHISWAP_V4_SUPPORTED_CHAIN_IDS

export type SushiSwapV4ChainId =
  (typeof SUSHISWAP_V4_SUPPORTED_CHAIN_IDS)[number]

export const isSushiSwapV4ChainId = (
  chainId: number,
): chainId is SushiSwapV4ChainId =>
  SUSHISWAP_V4_SUPPORTED_CHAIN_IDS.includes(chainId as SushiSwapV4ChainId)

// Core
export const SUSHISWAP_V4_VAULT: Record<SushiSwapV4ChainId, Address> = {
  [EvmChainId.ARBITRUM]: '0xeb4f1e157d18b1a4d09a5207a96e17601ea354b2',
  [EvmChainId.BASE]: '0xeb4f1e157d18b1a4d09a5207a96e17601ea354b2',
  [EvmChainId.BSC]: '0xeb4f1e157d18b1a4d09a5207a96e17601ea354b2',
  [EvmChainId.ETHEREUM]: '0xeb4f1e157d18b1a4d09a5207a96e17601ea354b2',
  [EvmChainId.SEPOLIA]: '0xeb4f1e157d18b1a4d09a5207a96e17601ea354b2',
  [EvmChainId.POLYGON]: '0xeb4f1e157d18b1a4d09a5207a96e17601ea354b2',
  [EvmChainId.UNICHAIN]: '0xeb4f1e157d18b1a4d09a5207a96e17601ea354b2',
  [EvmChainId.WORLDCHAIN]: '0xeb4f1e157d18b1a4d09a5207a96e17601ea354b2',
  [EvmChainId.ROBINHOOD]: '0xeb4f1e157d18b1a4d09a5207a96e17601ea354b2',
} as const

export const SUSHISWAP_V4_CL_POOL_MANAGER: Record<SushiSwapV4ChainId, Address> =
  {
    [EvmChainId.ARBITRUM]: '0x81d732702f87d2d652ae79e9f52bf44928eca210',
    [EvmChainId.BASE]: '0x81d732702f87d2d652ae79e9f52bf44928eca210',
    [EvmChainId.BSC]: '0x81d732702f87d2d652ae79e9f52bf44928eca210',
    [EvmChainId.ETHEREUM]: '0x81d732702f87d2d652ae79e9f52bf44928eca210',
    [EvmChainId.SEPOLIA]: '0x81d732702f87d2d652ae79e9f52bf44928eca210',
    [EvmChainId.POLYGON]: '0x81d732702f87d2d652ae79e9f52bf44928eca210',
    [EvmChainId.UNICHAIN]: '0x81d732702f87d2d652ae79e9f52bf44928eca210',
    [EvmChainId.WORLDCHAIN]: '0x81d732702f87d2d652ae79e9f52bf44928eca210',
    [EvmChainId.ROBINHOOD]: '0x81d732702f87d2d652ae79e9f52bf44928eca210',
  } as const

export const SUSHISWAP_V4_CL_PROTOCOL_FEE_CONTROLLER: Record<
  SushiSwapV4ChainId,
  Address
> = {
  [EvmChainId.ARBITRUM]: '0x6774ca40df651c3139d25f61d3b5cdbc8aec63de',
  [EvmChainId.BASE]: '0x6774ca40df651c3139d25f61d3b5cdbc8aec63de',
  [EvmChainId.BSC]: '0x6774ca40df651c3139d25f61d3b5cdbc8aec63de',
  [EvmChainId.ETHEREUM]: '0x6774ca40df651c3139d25f61d3b5cdbc8aec63de',
  [EvmChainId.SEPOLIA]: '0x6774ca40df651c3139d25f61d3b5cdbc8aec63de',
  [EvmChainId.POLYGON]: '0x6774ca40df651c3139d25f61d3b5cdbc8aec63de',
  [EvmChainId.UNICHAIN]: '0x6774ca40df651c3139d25f61d3b5cdbc8aec63de',
  [EvmChainId.WORLDCHAIN]: '0x6774ca40df651c3139d25f61d3b5cdbc8aec63de',
  [EvmChainId.ROBINHOOD]: '0x6774ca40df651c3139d25f61d3b5cdbc8aec63de',
} as const

export const SUSHISWAP_V4_CL_POOL_MANAGER_OWNER: Record<
  SushiSwapV4ChainId,
  Address
> = {
  [EvmChainId.ARBITRUM]: '0x06c00ad14cd3ddca426980e8a2704d1ff017d90d',
  [EvmChainId.BASE]: '0x06c00ad14cd3ddca426980e8a2704d1ff017d90d',
  [EvmChainId.BSC]: '0x06c00ad14cd3ddca426980e8a2704d1ff017d90d',
  [EvmChainId.ETHEREUM]: '0x06c00ad14cd3ddca426980e8a2704d1ff017d90d',
  [EvmChainId.SEPOLIA]: '0x06c00ad14cd3ddca426980e8a2704d1ff017d90d',
  [EvmChainId.POLYGON]: '0x06c00ad14cd3ddca426980e8a2704d1ff017d90d',
  [EvmChainId.UNICHAIN]: '0x06c00ad14cd3ddca426980e8a2704d1ff017d90d',
  [EvmChainId.WORLDCHAIN]: '0x06c00ad14cd3ddca426980e8a2704d1ff017d90d',
  [EvmChainId.ROBINHOOD]: '0x06c00ad14cd3ddca426980e8a2704d1ff017d90d',
} as const

// Periphery
export const SUSHISWAP_V4_CL_POSITION_DESCRIPTOR: Record<
  SushiSwapV4ChainId,
  Address
> = {
  [EvmChainId.ARBITRUM]: '0x340d5fe5dc8704e147b0cd7464cc8995cde23d6d',
  [EvmChainId.BASE]: '0x340d5fe5dc8704e147b0cd7464cc8995cde23d6d',
  [EvmChainId.BSC]: '0x340d5fe5dc8704e147b0cd7464cc8995cde23d6d',
  [EvmChainId.ETHEREUM]: '0x340d5fe5dc8704e147b0cd7464cc8995cde23d6d',
  [EvmChainId.SEPOLIA]: '0x340d5fe5dc8704e147b0cd7464cc8995cde23d6d',
  [EvmChainId.POLYGON]: '0x340d5fe5dc8704e147b0cd7464cc8995cde23d6d',
  [EvmChainId.UNICHAIN]: '0x340d5fe5dc8704e147b0cd7464cc8995cde23d6d',
  [EvmChainId.WORLDCHAIN]: '0x340d5fe5dc8704e147b0cd7464cc8995cde23d6d',
  [EvmChainId.ROBINHOOD]: '0x340d5fe5dc8704e147b0cd7464cc8995cde23d6d',
} as const

export const SUSHISWAP_V4_CL_POSITION_MANAGER: Record<
  SushiSwapV4ChainId,
  Address
> = {
  [EvmChainId.ARBITRUM]: '0xd3d35fbc4e44523ca3cd383c1948322ddb42f644',
  [EvmChainId.BASE]: '0xd3d35fbc4e44523ca3cd383c1948322ddb42f644',
  [EvmChainId.BSC]: '0xd3d35fbc4e44523ca3cd383c1948322ddb42f644',
  [EvmChainId.ETHEREUM]: '0xd3d35fbc4e44523ca3cd383c1948322ddb42f644',
  [EvmChainId.SEPOLIA]: '0xd3d35fbc4e44523ca3cd383c1948322ddb42f644',
  [EvmChainId.POLYGON]: '0xd3d35fbc4e44523ca3cd383c1948322ddb42f644',
  [EvmChainId.UNICHAIN]: '0xd3d35fbc4e44523ca3cd383c1948322ddb42f644',
  [EvmChainId.WORLDCHAIN]: '0xd3d35fbc4e44523ca3cd383c1948322ddb42f644',
  [EvmChainId.ROBINHOOD]: '0xd3d35fbc4e44523ca3cd383c1948322ddb42f644',
} as const

export const SUSHISWAP_V4_CL_QUOTER: Record<SushiSwapV4ChainId, Address> = {
  [EvmChainId.ARBITRUM]: '0x2a0819373b09ec553e7b15808f76601362b1c291',
  [EvmChainId.BASE]: '0x2a0819373b09ec553e7b15808f76601362b1c291',
  [EvmChainId.BSC]: '0x2a0819373b09ec553e7b15808f76601362b1c291',
  [EvmChainId.ETHEREUM]: '0x2a0819373b09ec553e7b15808f76601362b1c291',
  [EvmChainId.SEPOLIA]: '0x2a0819373b09ec553e7b15808f76601362b1c291',
  [EvmChainId.POLYGON]: '0x2a0819373b09ec553e7b15808f76601362b1c291',
  [EvmChainId.UNICHAIN]: '0x2a0819373b09ec553e7b15808f76601362b1c291',
  [EvmChainId.WORLDCHAIN]: '0x2a0819373b09ec553e7b15808f76601362b1c291',
  [EvmChainId.ROBINHOOD]: '0x2a0819373b09ec553e7b15808f76601362b1c291',
} as const

export const SUSHISWAP_V4_CL_TICK_LENS: Record<SushiSwapV4ChainId, Address> = {
  [EvmChainId.ARBITRUM]: '0xbb9757cb480a08730f372dfe3068a6e86f35c63a',
  [EvmChainId.BASE]: '0xbb9757cb480a08730f372dfe3068a6e86f35c63a',
  [EvmChainId.BSC]: '0xbb9757cb480a08730f372dfe3068a6e86f35c63a',
  [EvmChainId.ETHEREUM]: '0xbb9757cb480a08730f372dfe3068a6e86f35c63a',
  [EvmChainId.SEPOLIA]: '0xbb9757cb480a08730f372dfe3068a6e86f35c63a',
  [EvmChainId.POLYGON]: '0xbb9757cb480a08730f372dfe3068a6e86f35c63a',
  [EvmChainId.UNICHAIN]: '0xbb9757cb480a08730f372dfe3068a6e86f35c63a',
  [EvmChainId.WORLDCHAIN]: '0xbb9757cb480a08730f372dfe3068a6e86f35c63a',
  [EvmChainId.ROBINHOOD]: '0xbb9757cb480a08730f372dfe3068a6e86f35c63a',
} as const
