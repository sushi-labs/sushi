import { type EvmChainId, evmChainIds } from '~evm/chain/chains.js'
import type { Currency } from '~generic/currency/currency.js'
import { isToken } from '~generic/currency/token.js'
import {
  createEvmToken,
  type EvmToken,
  type SerializedEvmToken,
} from './token.js'
import { WNATIVE } from '~evm/config/tokens/wrapped-native.js'
import {
  createEvmNative,
  type EvmNative,
  type SerializedEvmNative,
} from './native.js'

export type EvmCurrency = Currency<EvmChainId>

export function isEvmCurrency(currency: Currency): currency is EvmCurrency {
  return evmChainIds.includes(currency.chainId as EvmChainId)
}

export function wrapEvmCurrency(currency: EvmCurrency): EvmToken {
  if (isToken(currency)) {
    return currency as EvmToken
  }

  return WNATIVE[currency.chainId]
}

function deserializeEvmCurrency(data: SerializedEvmToken): EvmToken
function deserializeEvmCurrency(data: SerializedEvmNative): EvmNative

function deserializeEvmCurrency(data: SerializedEvmNative | EvmToken) {
  if (data.type === 'native') {
    return createEvmNative(data)
  } else {
    return createEvmToken(data)
  }
}

export { deserializeEvmCurrency }
