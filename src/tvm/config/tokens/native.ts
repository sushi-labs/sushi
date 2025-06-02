import { TvmChainId } from '~tvm/chain/chains.js'
import { createTvmNative } from '~tvm/currency/native.js'

export const NATIVE = {
  [TvmChainId.TRON]: createTvmNative({
    chainId: TvmChainId.TRON,
    symbol: 'TRX',
    name: 'TRX (Tron)',
    decimals: 6,
  }),
}
