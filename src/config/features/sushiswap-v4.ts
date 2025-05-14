import type { Address } from 'viem'
import { EvmChainId } from '../../chain/evm/index.js'

export const SUSHISWAP_V4_VAULT_ADDRESS: Record<SushiSwapV4ChainId, Address> = {
  [EvmChainId.POLYGON]: '0xCA99122B8544bca8dA7A73AC701611B307061C75',
} as const

export const SUSHISWAP_V4_CL_POOL_MANAGER: Record<SushiSwapV4ChainId, Address> =
  {
    [EvmChainId.POLYGON]: '0x8C693F33b401Eed74e16CA30543123f2FB2ab791',
  } as const

export const SUSHISWAP_V4_CL_POSITION_MANAGER: Record<
  SushiSwapV4ChainId,
  Address
> = {
  [EvmChainId.POLYGON]: '0xd0FCeab9dB24806D20b7c0725759E7aD4395B063',
} as const

export const SUSHISWAP_V4_CL_TICK_LENS: Record<SushiSwapV4ChainId, Address> = {
  [EvmChainId.POLYGON]: '0x1eE36631E086d80B7C907C30F40Ba8f79aB74E25',
} as const

export const SUSHISWAP_V4_SUPPORTED_CHAIN_IDS = [EvmChainId.POLYGON] as const

export const SushiSwapV4ChainIds = SUSHISWAP_V4_SUPPORTED_CHAIN_IDS

export type SushiSwapV4ChainId =
  (typeof SUSHISWAP_V4_SUPPORTED_CHAIN_IDS)[number]

export const isSushiSwapV4ChainId = (
  chainId: EvmChainId,
): chainId is SushiSwapV4ChainId =>
  SUSHISWAP_V4_SUPPORTED_CHAIN_IDS.includes(chainId as SushiSwapV4ChainId)
