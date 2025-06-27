import type { ChainId } from '~generic/chain/chains.js'
import type { ID } from '../types/id.js'
import { Currency, type CurrencyMetadata } from './currency.js'

export abstract class Token<
  TChainId extends ChainId = ChainId,
  TAddress extends string = string,
  TMetadata extends CurrencyMetadata = Record<string, unknown>,
> extends Currency<TChainId, TMetadata> {
  override readonly type = 'token'

  public readonly address: TAddress

  constructor({
    address,
    ...rest
  }: {
    address: TAddress
  } & ConstructorParameters<typeof Currency<TChainId, TMetadata>>[0]) {
    super(rest)
    this.address = address
  }

  override get id(): ID<TChainId, TAddress> {
    return `${this.chainId}:${this.address}`
  }

  public override isSame(other: Currency): boolean {
    return (
      super.isSame(other) &&
      other instanceof Token &&
      this.address.toLowerCase() === other.address.toLowerCase()
    )
  }

  public abstract override wrap(): Token<TChainId, TAddress, TMetadata>
}
