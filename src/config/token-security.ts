import { EvmChainId } from '../chain/evm/index.js'

const SUPPORTED_CHAIN_IDS = [
  EvmChainId.AVALANCHE,
  EvmChainId.BSC,
  EvmChainId.FANTOM,
  EvmChainId.GNOSIS,
  EvmChainId.HARMONY,
  EvmChainId.ETHEREUM,
  EvmChainId.ARBITRUM,
  EvmChainId.OPTIMISM,
  EvmChainId.ZKSYNC_ERA,
  EvmChainId.LINEA,
  EvmChainId.BASE,
  EvmChainId.POLYGON,
  EvmChainId.SCROLL,
  EvmChainId.BLAST,
  EvmChainId.CRONOS,
  EvmChainId.MANTLE,
  EvmChainId.MANTA,
  EvmChainId.ZKLINK,
] as const

export const TokenSecurityChainIds = SUPPORTED_CHAIN_IDS

export type TokenSecurityChainId = (typeof SUPPORTED_CHAIN_IDS)[number]

export const isTokenSecurityChainId = (
  chainId: EvmChainId,
): chainId is TokenSecurityChainId =>
  SUPPORTED_CHAIN_IDS.includes(chainId as TokenSecurityChainId)
