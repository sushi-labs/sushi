import { StellarChainId } from '~/stellar/chain/chains.js'
import { StellarToken } from '~/stellar/currency/token.js'

export const STELLAR_USTRY_ADDRESS = {
  [StellarChainId.STELLAR]:
    'CBLV4ATSIWU67CFSQU2NVRKINQIKUZ2ODSZBUJTJ43VJVRSBTZYOPNUR',
} as const

export const STELLAR_USTRY = {
  [StellarChainId.STELLAR]: new StellarToken({
    chainId: StellarChainId.STELLAR,
    address: STELLAR_USTRY_ADDRESS[StellarChainId.STELLAR],
    issuer: 'GCRYUGD5NVARGXT56XEZI5CIFCQETYHAPQQTHO2O3IQZTHDH4LATMYWC',
    decimals: 7,
    symbol: 'USTRY',
    name: 'USTRY',
    origin: 'etherfuse.com',
    metadata: {
      icon: 'https://assets.coingecko.com/coins/images/52361/standard/-STABLEBOND-06.jpg',
    },
  }),
} as const
