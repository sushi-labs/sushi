import type { Currency } from '~generic/currency/currency.js'
import type { Native } from '~generic/currency/native.js'
import { type TvmChainId, tvmChainIds } from '~tvm/chain/chains.js'
import { NATIVE } from '~tvm/config/index.js'

export type TvmNative = Native<TvmChainId>

export function createTvmNative({
  chainId,
  symbol,
  name,
  decimals,
}: {
  chainId: TvmChainId
  symbol: string
  name: string
  decimals: number
}): TvmNative {
  return {
    chainId,
    symbol,
    name,
    decimals,
    type: 'native',
  }
}

export function isTvmNative(currency: Currency): currency is TvmNative {
  return (
    currency.type === 'native' &&
    tvmChainIds.includes(currency.chainId as TvmChainId)
  )
}

export function getTvmNativeByChainId(chainId: TvmChainId): TvmNative {
  return NATIVE[chainId]
}
