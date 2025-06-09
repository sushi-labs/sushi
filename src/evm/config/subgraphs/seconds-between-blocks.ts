import { EvmChainId } from '~evm/chain/index.js'

export const SECONDS_BETWEEN_BLOCKS: Partial<Record<EvmChainId, number>> = {
  [EvmChainId.ETHEREUM]: 12,
  [EvmChainId.GNOSIS]: 5,
  [EvmChainId.POLYGON]: 2,
  [EvmChainId.POLYGON_ZKEVM]: 5,
  [EvmChainId.FANTOM]: 2,
  [EvmChainId.BSC]: 3,
  [EvmChainId.HARMONY]: 2,
  [EvmChainId.AVALANCHE]: 2,
  [EvmChainId.CELO]: 5,
  [EvmChainId.ARBITRUM]: 0.25,
  [EvmChainId.OPTIMISM]: 2,
  [EvmChainId.KAVA]: 6.3,
  [EvmChainId.METIS]: 4.5,
  [EvmChainId.ARBITRUM_NOVA]: 1,
  [EvmChainId.BOBA]: 250,
  [EvmChainId.BOBA_BNB]: 0.5,
  [EvmChainId.BTTC]: 2,
  [EvmChainId.THUNDERCORE]: 1,
  [EvmChainId.SCROLL]: 3,
} as const
