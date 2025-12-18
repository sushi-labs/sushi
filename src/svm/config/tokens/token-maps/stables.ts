import { SvmChainId } from '~/svm/chain/index.js'
import type { SvmCurrency } from '~/svm/currency/currency.js'
import type { SvmToken } from '~/svm/currency/token.js'
import { SVM_USDC } from '../tokens/USDC.js'
import { SVM_USDT } from '../tokens/USDT.js'

export const SVM_STABLES = {
  [SvmChainId.SOLANA]: [
    SVM_USDC[SvmChainId.SOLANA],
    SVM_USDT[SvmChainId.SOLANA],
  ],
} as const satisfies Record<SvmChainId, SvmToken[]>

export function isSvmStable(currency: SvmCurrency): boolean {
  if (currency.type === 'native') {
    return false
  }

  return SVM_STABLES[currency.chainId]?.some(
    (stable) => stable.address.toLowerCase() === currency.address.toLowerCase(),
  )
}
