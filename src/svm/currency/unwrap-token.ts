import { SVM_WNATIVE_ADDRESS } from '../config/tokens/wrapped-native.js'
import type { SvmCurrency } from './currency.js'
import { SvmNative } from './native.js'

export function unwrapSvmToken(currency: SvmCurrency): SvmCurrency {
  if (currency.type === 'native') {
    return currency
  }

  if (currency.address === SVM_WNATIVE_ADDRESS[currency.chainId]) {
    return SvmNative.fromChainId(currency.chainId)
  }

  return currency
}
