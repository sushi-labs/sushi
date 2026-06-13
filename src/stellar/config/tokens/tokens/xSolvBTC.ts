import { StellarChainId } from '../../../chain/chains.js'
import { StellarToken } from '../../../currency/token.js'

export const STELLAR_XSOLVBTC_ADDRESS = {
  [StellarChainId.STELLAR]:
    'CAUP7NFABXE5TJRL3FKTPMWRLC7IAXYDCTHQRFSCLR5TMGKHOOQO772J',
} as const

export const STELLAR_XSOLVBTC: Record<StellarChainId, StellarToken> = {
  [StellarChainId.STELLAR]: new StellarToken({
    chainId: StellarChainId.STELLAR,
    address: STELLAR_XSOLVBTC_ADDRESS[StellarChainId.STELLAR],
    decimals: 8,
    symbol: 'xSolvBTC',
    name: 'xSolvBTC',
    origin: 'solv.finance',
    metadata: {
      issuer: null,
      icon: 'https://raw.githubusercontent.com/solv-finance/solv-resources/main/xSolvBTC/xSolvBTC.svg',
    },
  }),
}
