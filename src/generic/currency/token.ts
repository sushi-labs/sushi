import type { ChainId } from '~generic/chain/chains.js'
import { Currency } from './currency.js'

export abstract class Token<
  TChainId extends ChainId = ChainId,
  TAddress extends string = string,
> extends Currency<TChainId> {
  override readonly type = 'token'

  public readonly address: TAddress

  constructor({
    address,
    ...rest
  }: {
    address: TAddress
  } & ConstructorParameters<typeof Currency<TChainId>>[0]) {
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

  public override wrap() {
    return this
  }
}
