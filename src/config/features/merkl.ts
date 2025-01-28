import { EvmChainId } from '../../chain/evm/index.js'

export const MERKL_SUPPORTED_CHAIN_IDS = [
  EvmChainId.ETHEREUM,
  EvmChainId.OPTIMISM,
  EvmChainId.BASE,
  EvmChainId.BSC,
  EvmChainId.GNOSIS,
  EvmChainId.POLYGON,
  EvmChainId.ARBITRUM,
  // EvmChainId.CELO,
  EvmChainId.AVALANCHE,
  EvmChainId.POLYGON_ZKEVM,
  EvmChainId.THUNDERCORE,
  EvmChainId.CORE,
  EvmChainId.BLAST,
  EvmChainId.SCROLL,
  EvmChainId.LINEA,
  EvmChainId.SKALE_EUROPA,
  EvmChainId.ROOTSTOCK,
]

export const MerklChainIds = MERKL_SUPPORTED_CHAIN_IDS

export type MerklChainId = (typeof MERKL_SUPPORTED_CHAIN_IDS)[number]

export const merklChainIdSet = new Set(MERKL_SUPPORTED_CHAIN_IDS)

export const isMerklChainId = (chainId: EvmChainId): chainId is MerklChainId =>
  merklChainIdSet.has(chainId as MerklChainId)
