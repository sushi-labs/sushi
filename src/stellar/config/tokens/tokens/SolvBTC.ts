import { StellarChainId } from '../../../chain/chains.js'
import { StellarToken } from '../../../currency/token.js'

export const STELLAR_SOLVBTC_ADDRESS = {
  [StellarChainId.STELLAR]:
    'CBIJBDNZNF4X35BJ4FFZWCDBSCKOP5NB4PLG4SNENRMLAPYG4P5FM6VN',
} as const

export const STELLAR_SOLVBTC: Record<StellarChainId, StellarToken> = {
  [StellarChainId.STELLAR]: new StellarToken({
    chainId: StellarChainId.STELLAR,
    address: STELLAR_SOLVBTC_ADDRESS[StellarChainId.STELLAR],
    decimals: 8,
    symbol: 'SolvBTC',
    name: 'Solv BTC',
    origin: 'solv.finance',
    metadata: {
      issuer: null,
      icon: 'https://raw.githubusercontent.com/solv-finance/solv-resources/main/SolvBTC/SolvBTC.svg',
    },
  }),
}
