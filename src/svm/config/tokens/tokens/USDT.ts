import { SvmChainId } from '../../../../svm/chain/index.js'
import { type SvmAddress, SvmToken } from '../../../../svm/currency/token.js'

export const SVM_USDT_ADDRESS = {
  [SvmChainId.SOLANA]:
    'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB' as SvmAddress<'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB'>,
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
