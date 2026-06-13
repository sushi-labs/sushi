import { StellarChainId } from '../../../chain/chains.js'
import { StellarToken } from '../../../currency/token.js'

export const STELLAR_EURC_ADDRESS = {
  [StellarChainId.STELLAR]:
    'CDTKPWPLOURQA2SGTKTUQOWRCBZEORB4BWBOMJ3D3ZTQQSGE5F6JBQLV',
} as const

export const STELLAR_EURC: Record<StellarChainId, StellarToken> = {
  [StellarChainId.STELLAR]: new StellarToken({
    chainId: StellarChainId.STELLAR,
    address: STELLAR_EURC_ADDRESS[StellarChainId.STELLAR],
    issuer: 'GDHU6WRG4IEQXM5NZ4BMPKOXHW76MZM4Y2IEMFDVXBSDP6SJY4ITNPP2',
    decimals: 7,
    symbol: 'EURC',
    name: 'EURC',
    origin: 'circle.com',
    metadata: {
      icon: 'https://stellar.myfilebase.com/ipfs/QmeRk7LG85cozSNey9QGARgbxYi1cG1dA1G6SNJGMTMdF2',
    },
  }),
}
