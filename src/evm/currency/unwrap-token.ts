import { WNATIVE } from '../config/tokens/wrapped-native.js'
import type { EvmCurrency } from './currency.js'
import { EvmNative } from './native.js'

export function unwrapEvmToken(currency: EvmCurrency): EvmCurrency {
  if (currency.type === 'native') {
    return currency
  }

  if (
    currency.address.toLowerCase() ===
    WNATIVE[currency.chainId].address.toLowerCase()
  ) {
    return EvmNative.fromChainId(currency.chainId)
  }

  return currency
}
