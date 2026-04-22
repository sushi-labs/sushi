import { StellarChainId } from '../../../chain/chains.js'
import { StellarToken } from '../../../currency/token.js'

export const STELLAR_USDY_ADDRESS = {
  [StellarChainId.STELLAR]:
    'CB3YA656OYIHU57657I5KGSBRHE5I3OZU4VFC22PYAOANFZHEWNYGAGP',
} as const

export const STELLAR_USDY = {
  [StellarChainId.STELLAR]: new StellarToken({
    chainId: StellarChainId.STELLAR,
    address: STELLAR_USDY_ADDRESS[StellarChainId.STELLAR],
    issuer: 'GAJMPX5NBOG6TQFPQGRABJEEB2YE7RFRLUKJDZAZGAD5GFX4J7TADAZ6',
    decimals: 7,
    symbol: 'USDY',
    name: 'USDY',
    origin: 'ondo.finance',
    metadata: {
      icon: 'https://assets.coingecko.com/coins/images/31700/standard/usdy_(1).png',
    },
  }),
} as const
