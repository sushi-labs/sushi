import type { ChainId } from '../chain/chains.js'
import { Currency } from '../currency/currency.js'

export abstract class Native<
  TChainId extends ChainId = ChainId,
> extends Currency<TChainId, Record<string, unknown>> {
  override readonly type = 'native'

  override get id() {
    return `${this.chainId}:NATIVE` as const
  }
}
