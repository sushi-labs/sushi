import { EvmChainId } from '../../chain/index.js'

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
  EvmChainId.BERACHAIN,
  EvmChainId.PLASMA,
  EvmChainId.MONAD,
  EvmChainId.MEGAETH,
  EvmChainId.XLAYER
] as const

export type AggregatorOnlyChainId = (typeof AGGREGATOR_ONLY_CHAIN_IDS)[number]

export const isAggregatorOnlyChainId = (
  chainId: number,
): chainId is AggregatorOnlyChainId =>
  AGGREGATOR_ONLY_CHAIN_IDS.includes(chainId as AggregatorOnlyChainId)
