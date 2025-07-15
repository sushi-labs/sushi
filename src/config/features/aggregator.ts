import { EvmChainId } from '../../chain/evm/index.js'

export const AGGREGATOR_ONLY_CHAIN_IDS = [
  EvmChainId.CRONOS,
  EvmChainId.MANTLE,
  EvmChainId.ZKSYNC_ERA,
  EvmChainId.MANTA,
  EvmChainId.MODE,
  EvmChainId.TAIKO,
  EvmChainId.ZKLINK,
  EvmChainId.APE,
  EvmChainId.HYPEREVM,
] as const

export type AggregatorOnlyChainId = (typeof AGGREGATOR_ONLY_CHAIN_IDS)[number]

export const isAggregatorOnlyChainId = (
  chainId: EvmChainId,
): chainId is AggregatorOnlyChainId =>
  AGGREGATOR_ONLY_CHAIN_IDS.includes(chainId as AggregatorOnlyChainId)
