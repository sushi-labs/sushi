import type { ChainId } from '../chain/chains.js'
import { BaseCurrency } from '../currency/currency.js'

export abstract class Native<
  TChainId extends ChainId = ChainId,
> extends BaseCurrency<TChainId, Record<string, unknown>, 'native'> {
  override readonly type = 'native'
  override readonly isNative = true
  override readonly isToken = false

  override get id() {
    return `${this.chainId}:NATIVE` as const
  }
}
