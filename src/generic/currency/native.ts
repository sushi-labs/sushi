import type { ChainId } from '../chain/chains.js'
import { BaseCurrency, type CurrencyMetadata } from '../currency/currency.js'
import type { Token } from './token.js'

export abstract class Native<
  TChainId extends ChainId = ChainId,
  TMetadata extends CurrencyMetadata = Record<string, unknown>,
> extends BaseCurrency<TChainId, TMetadata, 'token' | 'native'> {
  override readonly type = 'native'
  override readonly isNative = true
  override readonly isToken = false

  override get id() {
    return `${this.chainId}:NATIVE` as const
  }

  public abstract override wrap(): Token<TChainId, string, TMetadata>
}
