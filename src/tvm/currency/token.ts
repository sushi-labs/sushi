import type { Currency } from '~generic/currency/currency.js'
import type { Token } from '~generic/currency/token.js'
import { tvmChainIds, type TvmChainId } from '~tvm/chain/chains.js'

export type TvmToken = Token<TvmChainId, TvmAddress>

export type TvmTokenOrigin = 'native'

export function createTvmToken({
  chainId,
  address,
  symbol,
  name,
  decimals,
}: {
  chainId: TvmChainId
  address: TvmAddress
  symbol: string
  name: string
  decimals: number
  origin?: TvmTokenOrigin | undefined
}): TvmToken {
  return {
    chainId,
    address,
    symbol,
    name,
    decimals,
    type: 'token',
  }
}

export type TvmAddress = `T${string}`

export function isTvmAddress(address: string): address is TvmAddress {
  return !!address.match(/^T[1-9A-HJ-NP-Za-km-z]{33}$/)
}

export function isTvmToken(currency: Currency): currency is TvmToken {
  return (
    currency.type === 'token' &&
    'address' in currency &&
    typeof currency.address === 'string' &&
    isTvmAddress(currency.address) &&
    tvmChainIds.includes(currency.chainId as TvmChainId)
  )
}
