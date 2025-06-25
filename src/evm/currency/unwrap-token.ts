import { WNATIVE } from '../config/tokens/wrapped-native.js'
import type { EvmCurrency } from './currency.js'
import { EvmNative } from './native.js'
import type { EvmToken } from './token.js'

export function unwrapEvmToken(token: EvmToken): EvmCurrency {
  if (
    token.address.toLowerCase() === WNATIVE[token.chainId].address.toLowerCase()
  ) {
    return EvmNative.fromChainId(token.chainId)
  }

  return token
}
