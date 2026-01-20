import { SvmChainId } from '../../../svm/chain/index.js'
import type { SvmAddress, SvmToken } from '../../currency/token.js'
import { WSOL, WSOL_ADDRESS } from './tokens/WSOL.js'

export const SVM_WNATIVE_ADDRESS = {
  [SvmChainId.SOLANA]: WSOL_ADDRESS[SvmChainId.SOLANA],
} as const satisfies Record<SvmChainId, SvmAddress>

export const SVM_WNATIVE = {
  [SvmChainId.SOLANA]: WSOL[SvmChainId.SOLANA],
} as const satisfies Record<SvmChainId, SvmToken>

export const isSvmWNativeSupported = (chainId: SvmChainId) =>
  SVM_WNATIVE_ADDRESS[chainId] !== undefined
