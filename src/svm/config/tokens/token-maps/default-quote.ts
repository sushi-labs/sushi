import { SvmChainId, svmChainIds } from '~/svm/chain/index.js'
import type { SvmCurrency } from '~/svm/currency/currency.js'
import { SvmNative } from '~/svm/currency/native.js'
import { SVM_USDC } from '../tokens/USDC.js'

export const svmDefaultCurrency = {
  ...(Object.fromEntries(
    svmChainIds.map((chainId) => [chainId, SvmNative.fromChainId(chainId)]),
  ) as Record<SvmChainId, SvmCurrency>),
} as const satisfies Record<SvmChainId, SvmCurrency>

export const svmDefaultQuoteCurrency = {
  [SvmChainId.SOLANA]: SVM_USDC[SvmChainId.SOLANA],
} as const satisfies Record<SvmChainId, SvmCurrency>
