import { EvmChainId } from '../../chain/evm/index.js'

// export const UNISWAP_V2_FACTORY_ADDRESS =
//   '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f' as `0x${string}`

export const UNISWAP_V2_FACTORY_ADDRESS: Record<
  UniswapV2ChainId,
  `0x${string}`
> = {
  [EvmChainId.ETHEREUM]: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  [EvmChainId.OPTIMISM]: '0x0c3c1c532F1e39EdF36BE9Fe0bE1410313E074Bf',
  [EvmChainId.ARBITRUM]: '0xf1D7CC64Fb4452F05c498126312eBE29f30Fbcf9',
  [EvmChainId.AVALANCHE]: '0x9e5A52f57b3038F1B8EeE45F28b3C1967e22799C',
  [EvmChainId.BASE]: '0x8909dc15e40173ff4699343b6eb8132c65e18ec6',
  [EvmChainId.BSC]: '0x8909Dc15e40173Ff4699343b6eB8132c65e18eC6',
  [EvmChainId.POLYGON]: '0x9e5A52f57b3038F1B8EeE45F28b3C1967e22799C',
  [EvmChainId.CELO]: '0x79a530c8e2fA8748B7B40dd3629C0520c2cCf03f',
  [EvmChainId.BLAST]: '0x5C346464d33F90bABaf70dB6388507CC889C1070',
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
] as const

export const UniswapV2ChainIds = UNISWAP_V2_SUPPORTED_CHAIN_IDS

export type UniswapV2ChainId = (typeof UNISWAP_V2_SUPPORTED_CHAIN_IDS)[number]
