import { SvmChainId } from '../../../../svm/chain/index.js'
import { SvmToken, svmAddress } from '../../../../svm/currency/token.js'

export const SVM_WETH_ADDRESS = {
  [SvmChainId.SOLANA]: svmAddress(
    '7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs',
  ),
} as const

export const SVM_WETH = {
  [SvmChainId.SOLANA]: new SvmToken({
    chainId: SvmChainId.SOLANA,
    address: SVM_WETH_ADDRESS[SvmChainId.SOLANA],
    decimals: 8,
    symbol: 'WETH',
    name: 'Wrapped Ether (Wormhole)',
  }),
} as const
