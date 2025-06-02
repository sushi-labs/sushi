import type { Currency } from '~generic/currency/currency.js'
import { tvmChainIds, type TvmChainId } from '~tvm/chain/chains.js'
import type { TvmToken } from './token.js'
import { isToken } from '~generic/currency/token.js'
import { WNATIVE } from '~tvm/config/index.js'

export type TvmCurrency = Currency<TvmChainId>

export function isTvmCurrency(currency: Currency): currency is TvmCurrency {
  return tvmChainIds.includes(currency.chainId as TvmChainId)
}

export function wrapTvmCurrency(currency: TvmCurrency): TvmToken {
  if (isToken(currency)) {
    return currency as TvmToken
  }

  return WNATIVE[currency.chainId]
}
