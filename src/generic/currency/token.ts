import type { Currency } from './currency.js'
import type { ChainId } from '~generic/chain/chains.js'

export type Token<
  TChainId extends ChainId = ChainId,
  TAddress extends string = string,
> = Currency<TChainId> & {
  address: TAddress
  type: 'token'
}

export function isToken(currency: Currency): currency is Token {
  return currency.type === 'token'
}

export function createToken<TChainId extends ChainId, TAddress extends string>({
  chainId,
  address,
  symbol,
  name,
  decimals,
}: {
  chainId: TChainId
  address: TAddress
  symbol: string
  name: string
  decimals: number
}): Token<ChainId> {
  return {
    chainId,
    address,
    symbol,
    name,
    decimals,
    type: 'token',
  }
}
