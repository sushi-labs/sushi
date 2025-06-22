import { WNATIVE } from '../config/tokens/wrapped-native.js'
import type { TvmCurrency } from './currency.js'
import type { TvmToken } from './token.js'

export function unwrapTvmToken(token: TvmToken): TvmCurrency {
  if (
    token.address.toLowerCase() === WNATIVE[token.chainId].address.toLowerCase()
  ) {
    return WNATIVE[token.chainId]
  }

  return token as TvmCurrency<undefined>
}
