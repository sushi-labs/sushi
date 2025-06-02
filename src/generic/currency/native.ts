import type { ChainId } from '~generic/chain/chains.js'
import type { Currency } from './currency.js'

export type Native<TChainId extends ChainId = ChainId> = Currency<TChainId> & {
  type: 'native'
}

export function isNative(currency: Currency): currency is Native {
  return currency.type === 'native'
}

export function createNative<TChainId extends ChainId = ChainId>(
  chainId: TChainId,
  symbol: string,
  name: string,
  decimals: number,
): Native<TChainId> {
  return {
    chainId,
    symbol,
    name,
    decimals,
    type: 'native',
  }
}
