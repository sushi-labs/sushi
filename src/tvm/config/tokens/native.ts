import { TvmChainId } from '../../chain/chains.js'
import { TvmNative } from '../../currency/native.js'

export const NATIVE = {
  [TvmChainId.TRON]: new TvmNative({
    chainId: TvmChainId.TRON,
    symbol: 'TRX',
    name: 'TRX (Tron)',
    decimals: 6,
  }),
}
