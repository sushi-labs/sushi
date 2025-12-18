import { SvmChainId } from '~/svm/chain/index.js'
import type { SvmCurrency } from '~/svm/currency/currency.js'
import { SvmNative } from '~/svm/currency/native.js'
import { SVM_USDC } from '../tokens/USDC.js'
import { SVM_USDT } from '../tokens/USDT.js'
import { SVM_WBTC } from '../tokens/WBTC.js'
import { SVM_WETH } from '../tokens/WETH.js'
import { WSOL } from '../tokens/WSOL.js'

export const SVM_DEFAULT_BASES = {
  [SvmChainId.SOLANA]: [
    SvmNative.fromChainId(SvmChainId.SOLANA),
    WSOL[SvmChainId.SOLANA],
    SVM_USDC[SvmChainId.SOLANA],
    SVM_USDT[SvmChainId.SOLANA],
    SVM_WBTC[SvmChainId.SOLANA],
    SVM_WETH[SvmChainId.SOLANA],
  ],
} as const satisfies Record<SvmChainId, Readonly<SvmCurrency[]>>
