import { EvmChainId } from '../../chain/evm/index.js'

export const BLADE_SUPPORTED_CHAIN_IDS = [
  EvmChainId.ETHEREUM,
  EvmChainId.POLYGON,
  EvmChainId.POLYGON_ZKEVM,
  EvmChainId.OPTIMISM,
  EvmChainId.ARBITRUM,
  EvmChainId.MOONBEAM,
  EvmChainId.BASE,
  EvmChainId.MANTLE,
  EvmChainId.KATANA,
] as const

export type BladeChainId = (typeof BLADE_SUPPORTED_CHAIN_IDS)[number]

export const isBladeChainId = (chainId: EvmChainId): chainId is BladeChainId =>
  BLADE_SUPPORTED_CHAIN_IDS.includes(chainId as BladeChainId)
