import { StellarChainId } from '../../../chain/chains.js'
import { StellarToken } from '../../../currency/token.js'

export const STELLAR_BLNT_ADDRESS = {
  [StellarChainId.STELLAR]:
    'CCBNWP5L7ZSXA3DBWCMFAVKFVRW3ZHWO7B5J557W42O64DDZNPJP7VDS',
} as const

export const STELLAR_BLNT: Record<StellarChainId, StellarToken> = {
  [StellarChainId.STELLAR]: new StellarToken({
    chainId: StellarChainId.STELLAR,
    address: STELLAR_BLNT_ADDRESS[StellarChainId.STELLAR],
    issuer: 'GAP2ACGH3O6TRFAERGM4USJ6XWU3U2BFIK224JPV6NI3CUNEEEGTBTFB',
    decimals: 7,
    symbol: 'BLNT',
    name: 'BLNT Protocol',
    origin: 'blnt.trade',
    metadata: {
      icon: 'https://blnt.trade/icons/tokens/blnt.png',
    },
  }),
}
