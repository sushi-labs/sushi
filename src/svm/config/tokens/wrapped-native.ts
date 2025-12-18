import { SvmChainId } from '~/svm/chain/index.js'
import { WSOL, WSOL_ADDRESS } from './tokens/WSOL.js'

export const SVM_WNATIVE_ADDRESS = {
  [SvmChainId.SOLANA]: WSOL_ADDRESS[SvmChainId.SOLANA],
}

export const SVM_WNATIVE = {
  [SvmChainId.SOLANA]: WSOL[SvmChainId.SOLANA],
}
