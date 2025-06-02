import { TvmChainId } from '~tvm/chain/chains.js'
import { WTRX } from '../tokens/WTRX.js'
import { NATIVE } from '../native.js'
import { USDT } from '../tokens/USDT.js'
import { BTC } from '../tokens/BTC.js'
import { WETH } from '../tokens/WETH.js'
import type { TvmCurrency } from '~tvm/currency/currency.js'

export const DEFAULT_BASES = {
  [TvmChainId.TRON]: [
    NATIVE[TvmChainId.TRON],
    WTRX[TvmChainId.TRON],
    USDT[TvmChainId.TRON],
    BTC[TvmChainId.TRON],
    WETH[TvmChainId.TRON],
  ],
} as const satisfies Record<TvmChainId, Readonly<TvmCurrency[]>>
