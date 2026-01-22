import { EvmChainId } from '../../chain/index.js'

export const SWAP_API_SUPPORTED_CHAIN_IDS = [
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
  EvmChainId.GNOSIS,
  EvmChainId.HAQQ,
  EvmChainId.HARMONY,
  EvmChainId.KAVA,
  EvmChainId.LINEA,
  EvmChainId.METIS,
  EvmChainId.OPTIMISM,
  EvmChainId.POLYGON,
  EvmChainId.POLYGON_ZKEVM,
  EvmChainId.SCROLL,
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
  EvmChainId.BERACHAIN,
  EvmChainId.PLASMA,
  EvmChainId.MONAD,
  EvmChainId.PLUME,
] as const

export type SwapApiSupportedChainId =
  (typeof SWAP_API_SUPPORTED_CHAIN_IDS)[number]

export const isSwapApiSupportedChainId = (
  chainId: number,
): chainId is SwapApiSupportedChainId =>
  SWAP_API_SUPPORTED_CHAIN_IDS.includes(chainId as SwapApiSupportedChainId)
