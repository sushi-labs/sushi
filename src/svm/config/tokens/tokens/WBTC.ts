import { SvmChainId } from '../../../../svm/chain/index.js'
import { SvmToken, svmAddress } from '../../../../svm/currency/token.js'

export const SVM_WBTC_ADDRESS = {
  [SvmChainId.SOLANA]: svmAddress(
    '3NZ9JMVBmGAqocybic2c7LQCJScmgsAZ6vQqTDzcqmJh',
  ),
} as const

export const SVM_WBTC = {
  [SvmChainId.SOLANA]: new SvmToken({
    chainId: SvmChainId.SOLANA,
    address: SVM_WBTC_ADDRESS[SvmChainId.SOLANA],
    decimals: 8,
    symbol: 'WBTC',
    name: 'Wrapped BTC (Wormhole)',
  }),
} as const
