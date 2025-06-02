import type { ChainId } from '~generic/chain/chains.js'
import { getChainById } from '~generic/chain/chains.js'
import { isToken, type Token } from './token.js'
import {
  isEvmCurrency,
  wrapEvmCurrency,
  type EvmCurrency,
} from '~evm/currency/currency.js'
import type { EvmToken } from '~evm/currency/token.js'
import { isMvmToken, type MvmToken } from '~mvm/currency/token.js'
import {
  isTvmCurrency,
  wrapTvmCurrency,
  type TvmCurrency,
  type TvmNative,
  type TvmToken,
} from '~tvm/index.js'

export type Currency<TChainId extends ChainId = ChainId> = {
  chainId: TChainId
  symbol: string
  name: string
  decimals: number

  type: 'native' | 'token'
}

export function isSameCurrency(a: Currency, b: Currency): boolean {
  // Different chain IDs -> not the same
  if (a.chainId !== b.chainId) {
    return false
  }

  // Native and Token -> not the same
  if (a.type !== b.type) {
    return false
  }

  // If both are a token and address do not match -> not the same
  if (
    a.type === 'token' &&
    'address' in a &&
    b.type === 'token' &&
    'address' in b
  ) {
    const [_a, _b] = [a, b] as [Token, Token]

    if (_a.address.toLowerCase() !== _b.address.toLowerCase()) {
      return false
    }
  }

  return true
}

function wrapCurrency(currency: EvmCurrency): EvmToken
function wrapCurrency(currency: MvmToken): MvmToken
function wrapCurrency(currency: TvmNative | TvmToken): TvmToken
function wrapCurrency(currency: Currency): Token

/**
 *
 * @param currency The currency to wrap. A native currency is expected, though tokens can also be passed (and will be directly returned).
 * @returns
 */
function wrapCurrency(
  currency: Currency | EvmCurrency | MvmToken | TvmCurrency,
): Currency | EvmToken | MvmToken | TvmToken {
  if (isToken(currency)) {
    return currency
  }

  if (isEvmCurrency(currency)) {
    return wrapEvmCurrency(currency)
  }

  // Mvm does not have a native currency
  if (isMvmToken(currency)) {
    return currency
  }

  if (isTvmCurrency(currency)) {
    return wrapTvmCurrency(currency)
  }

  throw new Error(
    `Couldn't wrap currency: ${currency.symbol} on ${getChainById(currency.chainId).name}`,
  )
}

export { wrapCurrency }
