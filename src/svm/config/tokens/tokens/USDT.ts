import { SvmChainId } from '../../../../svm/chain/index.js'
import { SvmToken, svmAddress } from '../../../../svm/currency/token.js'

export const SVM_USDT_ADDRESS = {
  [SvmChainId.SOLANA]: svmAddress(
    'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB',
  ),
} as const

export const SVM_USDT = {
  [SvmChainId.SOLANA]: new SvmToken({
    chainId: SvmChainId.SOLANA,
    address: SVM_USDT_ADDRESS[SvmChainId.SOLANA],
    decimals: 6,
    symbol: 'USDT',
    name: 'Tether USD',
  }),
} as const
