import { EvmChainId } from '../chain/evm/index.js'

const SUPPORTED_CHAIN_IDS = [
  EvmChainId.AVALANCHE,
  EvmChainId.BSC,
  EvmChainId.FANTOM,
  EvmChainId.GNOSIS,
  EvmChainId.HARMONY,
  EvmChainId.ETHEREUM,
  EvmChainId.HECO,
  EvmChainId.ARBITRUM,
  EvmChainId.OPTIMISM,
  EvmChainId.ZKSYNC_ERA,
  EvmChainId.LINEA,
  EvmChainId.BASE,
  EvmChainId.POLYGON,
  EvmChainId.SCROLL,
  EvmChainId.BLAST,
] as const

export const TokenSecurityChainIds = SUPPORTED_CHAIN_IDS

export const tokenSecurityChainIdSet = new Set(TokenSecurityChainIds)

export type TokenSecurityChainId = (typeof SUPPORTED_CHAIN_IDS)[number]

export const isTokenSecurityChainId = (
  chainId: EvmChainId,
): chainId is TokenSecurityChainId =>
  tokenSecurityChainIdSet.has(chainId as TokenSecurityChainId)
