import { StellarChainId } from '../../../chain/chains.js'
import { StellarToken } from '../../../currency/token.js'

export const STELLAR_SUSHI_ADDRESS = {
  [StellarChainId.STELLAR]:
    'CBGBKMITPHE42HLMSIDU7HAAH27M5RUXTXI4WE75AD42VMH2MYONYSG5',
} as const

export const STELLAR_SUSHI: Record<StellarChainId, StellarToken> = {
  [StellarChainId.STELLAR]: new StellarToken({
    chainId: StellarChainId.STELLAR,
    address: STELLAR_SUSHI_ADDRESS[StellarChainId.STELLAR],
    issuer: 'GC37GLWOPSIOXNHYGH5ZS3TTU7EAFMN6OPX5Q2NWWXRKCIVY37JXJFZE',
    decimals: 7,
    symbol: 'SUSHI',
    name: 'SushiToken',
    origin: 'www.sushi.com',
  }),
}
