import { SvmChainId } from '../../../../svm/chain/index.js'
import { type SvmAddress, SvmToken } from '../../../../svm/currency/token.js'

export const SVM_USDC_ADDRESS = {
  [SvmChainId.SOLANA]:
    'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v' as SvmAddress<'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'>,
} as const

export const SVM_USDC = {
  [SvmChainId.SOLANA]: new SvmToken({
    chainId: SvmChainId.SOLANA,
    address: SVM_USDC_ADDRESS[SvmChainId.SOLANA],
    decimals: 6,
    symbol: 'USDC',
    name: 'USD Coin',
  }),
} as const
