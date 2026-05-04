import { StellarChainId } from '../../../chain/chains.js'
import { StellarToken } from '../../../currency/token.js'

export const STELLAR_CETES_ADDRESS = {
  [StellarChainId.STELLAR]:
    'CAL6ER2TI6CTRAY6BFXWNWA7WTYXUXTQCHUBCIBU5O6KM3HJFG6Z6VXV',
} as const

export const STELLAR_CETES: Record<StellarChainId, StellarToken> = {
  [StellarChainId.STELLAR]: new StellarToken({
    chainId: StellarChainId.STELLAR,
    address: STELLAR_CETES_ADDRESS[StellarChainId.STELLAR],
    issuer: 'GCRYUGD5NVARGXT56XEZI5CIFCQETYHAPQQTHO2O3IQZTHDH4LATMYWC',
    decimals: 7,
    symbol: 'CETES',
    name: 'CETES',
    origin: 'etherfuse.com',
    metadata: {
      icon: 'https://assets.coingecko.com/coins/images/37855/standard/cetes.png',
    },
  }),
}
