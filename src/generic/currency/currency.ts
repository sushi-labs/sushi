import type { ChainId } from '~generic/chain/chains.js'
import type { Token } from './token.js'
import type { SerializedCurrency } from './serialized-currency.js'

export abstract class Currency<TChainId extends ChainId = ChainId> {
  public readonly chainId: TChainId
  public readonly symbol: string
  public readonly name: string
  public readonly decimals: number

  public abstract readonly type: 'native' | 'token'

  constructor({
    chainId,
    decimals,
    name,
    symbol,
  }: {
    chainId: TChainId
    symbol: string
    name: string
    decimals: number
  }) {
    this.chainId = chainId
    this.symbol = symbol
    this.name = name
    this.decimals = decimals
  }

  public isSame(other: Currency): boolean {
    return (
      this.chainId === other.chainId &&
      this.decimals === other.decimals &&
      this.type === other.type
    )
  }

  public abstract wrap(): Token

  public abstract toJSON(): SerializedCurrency
}
