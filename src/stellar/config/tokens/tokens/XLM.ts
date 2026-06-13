import { StellarChainId } from '../../../chain/chains.js'
import { StellarToken } from '../../../currency/token.js'

export const STELLAR_XLM_ADDRESS = {
  [StellarChainId.STELLAR]:
    'CAS3J7GYLGXMF6TDJBBYYSE3HQ6BBSMLNUQ34T6TZMYMW2EVH34XOWMA',
} as const

export const STELLAR_XLM: Record<StellarChainId, StellarToken> = {
  [StellarChainId.STELLAR]: new StellarToken({
    chainId: StellarChainId.STELLAR,
    address: STELLAR_XLM_ADDRESS[StellarChainId.STELLAR],
    decimals: 7,
    symbol: 'XLM',
    name: 'XLM',
    origin: 'stellar.org',
    metadata: {
      issuer: null,
      icon: 'https://assets.coingecko.com/coins/images/100/large/Stellar_symbol_black_RGB.png',
    },
  }),
}
