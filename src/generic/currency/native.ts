import type { ChainId } from '~generic/chain/chains.js'
import { Currency } from '~generic/currency/currency.js'

export abstract class Native<
  TChainId extends ChainId = ChainId,
> extends Currency<TChainId> {
  override readonly type = 'native'
}
