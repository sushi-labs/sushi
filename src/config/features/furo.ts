import { EvmChainId } from '../../chain/evm/index.js'

export const FURO_SUPPORTED_CHAIN_IDS = [
  EvmChainId.ETHEREUM,
  EvmChainId.ARBITRUM,
  EvmChainId.AVALANCHE,
  EvmChainId.BSC,
  EvmChainId.FANTOM,
  EvmChainId.GNOSIS,
  EvmChainId.HARMONY,
  EvmChainId.MOONBEAM,
  EvmChainId.MOONRIVER,
  EvmChainId.OPTIMISM,
  EvmChainId.POLYGON,
  EvmChainId.HAQQ,
  EvmChainId.CORE,
  EvmChainId.THUNDERCORE,
  EvmChainId.BTTC,
] as const

export type FuroChainId = (typeof FURO_SUPPORTED_CHAIN_IDS)[number]

export const furoChainIdSet = new Set(FURO_SUPPORTED_CHAIN_IDS)

export const isFuroChainId = (chainId: EvmChainId): chainId is FuroChainId =>
  furoChainIdSet.has(chainId as FuroChainId)
