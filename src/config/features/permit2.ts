import type { Address } from 'viem'
import { EvmChainId } from '../../chain/evm/index.js'

export const PERMIT2_ADDRESS: Record<Permit2ChainId, Address> = {
  [EvmChainId.POLYGON]: '0x96310cac2ecDf253865CE82d64e7435805E70de4',
}

export const PERMIT2_SUPPORTED_CHAIN_IDS = [EvmChainId.POLYGON] as const

export const Permit2ChainIds = PERMIT2_SUPPORTED_CHAIN_IDS

export type Permit2ChainId = (typeof PERMIT2_SUPPORTED_CHAIN_IDS)[number]
