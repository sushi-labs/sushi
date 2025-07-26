import { WNATIVE } from '../config/tokens/wrapped-native.js'
import type { TvmCurrency } from './currency.js'

export function unwrapTvmToken(currency: TvmCurrency): TvmCurrency {
  if (currency.type === 'native') {
    return currency
  }

  if (
    currency.address.toLowerCase() ===
    WNATIVE[currency.chainId].address.toLowerCase()
  ) {
    return WNATIVE[currency.chainId]
  }

  return currency
}
