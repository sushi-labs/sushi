import { EvmChainId } from '~evm/chain/index.js'

export const MERKL_SUPPORTED_CHAIN_IDS = [
  EvmChainId.ETHEREUM,
  EvmChainId.OPTIMISM,
  EvmChainId.BASE,
  EvmChainId.BSC,
  EvmChainId.GNOSIS,
  EvmChainId.POLYGON,
  EvmChainId.ARBITRUM,
  EvmChainId.AVALANCHE,
  EvmChainId.THUNDERCORE,
  EvmChainId.CORE,
  EvmChainId.BLAST,
  EvmChainId.SCROLL,
  EvmChainId.LINEA,
  EvmChainId.SKALE_EUROPA,
  EvmChainId.ROOTSTOCK,
  EvmChainId.KATANA,
  EvmChainId.HEMI,
]

export const MerklChainIds = MERKL_SUPPORTED_CHAIN_IDS

export type MerklChainId = (typeof MERKL_SUPPORTED_CHAIN_IDS)[number]

export const isMerklChainId = (chainId: number): chainId is MerklChainId =>
  MERKL_SUPPORTED_CHAIN_IDS.includes(chainId as MerklChainId)
