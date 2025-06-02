import { TvmChainId } from '~tvm/chain/chains.js'
import { USDT } from '../tokens/USDT.js'
import type { TvmCurrency } from '~tvm/currency/currency.js'
import { TUSD } from '../tokens/TUSD.js'
import { USDD } from '../tokens/USDD.js'

export const STABLES = {
  [TvmChainId.TRON]: [
    USDT[TvmChainId.TRON],
    TUSD[TvmChainId.TRON],
    USDD[TvmChainId.TRON],
  ],
} as const satisfies Record<TvmChainId, Readonly<TvmCurrency[]>>
