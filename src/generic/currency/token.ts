import type { ChainId } from '~generic/chain/chains.js'
import { Currency, type CurrencyMetadata } from './currency.js'

export abstract class Token<
  TChainId extends ChainId = ChainId,
  TAddress extends string = string,
  TMetadata extends CurrencyMetadata = undefined,
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

  public override isSame(other: Currency): boolean {
    return (
      super.isSame(other) &&
      other instanceof Token &&
      this.address.toLowerCase() === other.address.toLowerCase()
    )
  }

  public override wrap(): Token<TChainId, TAddress, TMetadata> {
    return this
  }
}
