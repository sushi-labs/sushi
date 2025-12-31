import { SvmChainId } from '../../../../svm/chain/index.js'
import { SvmToken, svmAddress } from '../../../../svm/currency/token.js'

export const WSOL_ADDRESS = {
  [SvmChainId.SOLANA]: svmAddress(
    'So11111111111111111111111111111111111111112',
  ),
} as const

export const WSOL = {
  [SvmChainId.SOLANA]: new SvmToken({
    chainId: SvmChainId.SOLANA,
    address: WSOL_ADDRESS[SvmChainId.SOLANA],
    decimals: 9,
    symbol: 'WSOL',
    name: 'Wrapped SOL',
  }),
} as const
