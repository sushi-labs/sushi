import invariant from 'tiny-invariant'
import { EvmToken } from '../../evm/currency/token.js'
import { unwrapEvmToken } from '../../evm/currency/unwrap-token.js'
import { MvmToken } from '../../mvm/currency/token.js'
import { StellarToken } from '../../stellar/currency/token.js'
import { unwrapStellarToken } from '../../stellar/currency/unwrap-token.js'
import { SvmToken } from '../../svm/currency/token.js'
import { unwrapSvmToken } from '../../svm/currency/unwrap-token.js'
import type { Currency } from './currency.js'

export function unwrapToken<TCurrency extends Currency>(currency: TCurrency) {
  if (currency.type === 'native') {
    return currency
  }

  if (currency instanceof EvmToken) {
    return unwrapEvmToken(currency)
  }

  if (currency instanceof MvmToken) {
    return currency
  }

  if (currency instanceof SvmToken) {
    return unwrapSvmToken(currency)
  }

  if (currency instanceof StellarToken) {
    return unwrapStellarToken(currency)
  }

  throw invariant(false, 'Unsupported currency type')
}
