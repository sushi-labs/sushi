import type { ChainId } from '../chain/chains.js'
import type { ID } from '../types/id.js'
import type { SerializedCurrency } from './serialized-currency.js'
import type { Token } from './token.js'

export type CurrencyMetadata = Record<string, unknown>

export abstract class Currency<
  TChainId extends ChainId = ChainId,
  TMetadata extends CurrencyMetadata = Record<string, unknown>,
> {
  public readonly chainId: TChainId
  public readonly symbol: string
  public readonly name: string
  public readonly decimals: number

  public readonly metadata: TMetadata

  public abstract readonly type: 'native' | 'token'

  constructor({
    chainId,
    decimals,
    name,
    symbol,
    metadata,
  }: {
    chainId: TChainId
    symbol: string
    name: string
    decimals: number
    metadata?: TMetadata
  }) {
    this.chainId = chainId
    this.symbol = symbol
    this.name = name
    this.decimals = decimals

    this.metadata = metadata || ({} as TMetadata)
  }

  abstract get id(): ID<TChainId, string, true>

  public isSame(other: Currency): boolean {
    return (
      this.chainId === other.chainId &&
      this.decimals === other.decimals &&
      this.type === other.type
    )
  }

  public abstract wrap(): Token<TChainId, string, TMetadata>

  public abstract toJSON(): SerializedCurrency
}
