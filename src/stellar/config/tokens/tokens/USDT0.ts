import { StellarChainId } from '../../../chain/chains.js'
import { StellarToken } from '../../../currency/token.js'

export const STELLAR_USDT0_ADDRESS = {
  [StellarChainId.STELLAR]:
    'CBSJZEIO5C7KC2SF3MKSNXXJSW5G3VTNBX4ATMKUI3B2MR4JKM4R26YF',
} as const

export const STELLAR_USDT0: Record<StellarChainId, StellarToken> = {
  [StellarChainId.STELLAR]: new StellarToken({
    chainId: StellarChainId.STELLAR,
    address: STELLAR_USDT0_ADDRESS[StellarChainId.STELLAR],
    issuer: 'GATISXX6BZ6NC7IKQBY37CJD4SOZL3CYZJWXEDG6JVIY4WBS6KXJHN6Q',
    decimals: 7,
    symbol: 'USDT0',
    name: 'USDT0',
    origin: 'usdt0.to',
    metadata: {
      icon: 'https://assets.coingecko.com/coins/images/53705/standard/usdt0.jpg',
    },
  }),
}
