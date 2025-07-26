import invariant from 'tiny-invariant'
import { EvmToken } from '../../evm/currency/token.js'
import { unwrapEvmToken } from '../../evm/currency/unwrap-token.js'
import { MvmToken } from '../../mvm/currency/token.js'
import { TvmToken } from '../../tvm/currency/token.js'
import { unwrapTvmToken } from '../../tvm/currency/unwrap-token.js'
import type { Currency } from './currency.js'

export function unwrapToken<TCurrency extends Currency>(currency: TCurrency) {
  if (currency.type === 'native') {
    return currency
  }

  if (currency instanceof EvmToken) {
    return unwrapEvmToken(currency)
  }

  if (currency instanceof TvmToken) {
    return unwrapTvmToken(currency)
  }

  if (currency instanceof MvmToken) {
    return currency
  }

  throw invariant('Unsupported currency type')
}
