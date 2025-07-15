import { EvmChainId } from '../../chain/evm/index.js'

export const EXTRACTOR_SUPPORTED_CHAIN_IDS = [
  EvmChainId.ARBITRUM,
  EvmChainId.ARBITRUM_NOVA,
  EvmChainId.AVALANCHE,
  EvmChainId.BASE,
  EvmChainId.BOBA,
  EvmChainId.BOBA_BNB,
  EvmChainId.BSC,
  EvmChainId.BTTC,
  EvmChainId.CELO,
  EvmChainId.CORE,
  EvmChainId.ETHEREUM,
  EvmChainId.FANTOM,
  EvmChainId.FILECOIN,
  EvmChainId.FUSE,
  EvmChainId.GNOSIS,
  EvmChainId.HAQQ,
  EvmChainId.HARMONY,
  EvmChainId.KAVA,
  EvmChainId.LINEA,
  EvmChainId.METIS,
  EvmChainId.MOONBEAM,
  EvmChainId.MOONRIVER,
  EvmChainId.OPTIMISM,
  EvmChainId.POLYGON,
  EvmChainId.POLYGON_ZKEVM,
  EvmChainId.SCROLL,
  EvmChainId.TELOS,
  EvmChainId.THUNDERCORE,
  EvmChainId.ZETACHAIN,
  EvmChainId.CRONOS,
  EvmChainId.BLAST,
  EvmChainId.SKALE_EUROPA,
  EvmChainId.ROOTSTOCK,
  EvmChainId.MANTLE,
  EvmChainId.ZKSYNC_ERA,
  EvmChainId.MANTA,
  EvmChainId.MODE,
  EvmChainId.TAIKO,
  EvmChainId.ZKLINK,
  EvmChainId.APE,
  EvmChainId.SONIC,
  EvmChainId.HEMI,
  EvmChainId.TATARA,
  EvmChainId.KATANA,
  EvmChainId.HYPEREVM,
] as const

export type ExtractorSupportedChainId =
  (typeof EXTRACTOR_SUPPORTED_CHAIN_IDS)[number]

export const isExtractorSupportedChainId = (
  chainId: number,
): chainId is ExtractorSupportedChainId =>
  EXTRACTOR_SUPPORTED_CHAIN_IDS.includes(chainId as ExtractorSupportedChainId)
