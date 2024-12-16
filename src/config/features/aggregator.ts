import { ChainId } from '../../chain/index.js'

export const AGGREGATOR_ONLY_CHAIN_IDS = [
  ChainId.CRONOS,
  ChainId.MANTLE,
  ChainId.ZKSYNC_ERA,
  ChainId.MANTA,
  ChainId.MODE,
  ChainId.TAIKO,
  ChainId.ZKLINK,
  ChainId.APE,
  ChainId.SONIC,
] as const

export type AggregatorOnlyChainId = (typeof AGGREGATOR_ONLY_CHAIN_IDS)[number]

export const isAggregatorOnlyChainId = (
  chainId: ChainId,
): chainId is AggregatorOnlyChainId =>
  AGGREGATOR_ONLY_CHAIN_IDS.includes(chainId as AggregatorOnlyChainId)
