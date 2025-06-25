import type { ChainId } from '~generic/chain/chains.js'
import { Currency } from '~generic/currency/currency.js'

export abstract class Native<
  TChainId extends ChainId = ChainId,
> extends Currency<TChainId, Record<string, unknown>> {
  override readonly type = 'native'

  override get id() {
    return `${this.chainId}:NATIVE` as const
  }
}
