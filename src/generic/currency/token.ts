import type { ChainId } from '../chain/chains.js'
import type { ID } from '../types/id.js'
import { BaseCurrency, type CurrencyMetadata } from './currency.js'

export abstract class Token<
  TChainId extends ChainId = ChainId,
  TAddress extends string = string,
  TMetadata extends CurrencyMetadata = Record<string, unknown>,
> extends BaseCurrency<TChainId, TMetadata, 'token'> {
  override readonly type = 'token'
  override readonly isNative = false
  override readonly isToken = true

  private readonly _address: TAddress

  constructor({
    address,
    ...rest
  }: {
    address: TAddress
  } & ConstructorParameters<typeof BaseCurrency<TChainId, TMetadata>>[0]) {
    super(rest)
    this._address = address
  }

  get address(): TAddress {
    return this._address.toLowerCase() as TAddress
  }

  override get id(): ID<TChainId, TAddress> {
    return `${this.chainId}:${this.address}`
  }

  public override isSame(other: BaseCurrency): boolean {
    return (
      super.isSame(other) &&
      other instanceof Token &&
      this.address.toLowerCase() === other.address.toLowerCase()
    )
  }

  public abstract override wrap(): Token<TChainId, TAddress, TMetadata>
}
