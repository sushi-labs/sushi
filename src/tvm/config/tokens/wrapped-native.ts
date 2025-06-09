import { TvmChainId } from '~tvm/chain/chains.js'
import { type TvmAddress, TvmToken } from '~tvm/currency/token.js'

export const WNATIVE_ADDRESS = {
  [TvmChainId.TRON]: 'TNUC9Qb1rRpS5CbWLmNMxXBjyFoydXjWFR',
} as const satisfies Record<TvmChainId, TvmAddress>

export const WNATIVE = {
  [TvmChainId.TRON]: new TvmToken({
    chainId: TvmChainId.TRON,
    address: WNATIVE_ADDRESS[TvmChainId.TRON],
    symbol: 'WTRX',
    name: 'Wrapped TRX',
    decimals: 6,
  }),
}
