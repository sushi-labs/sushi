import { describe, expect, it } from 'vitest'
import { StellarChainId } from '../chain/chains.js'
import { StellarToken } from './token.js'

describe('StellarToken', () => {
  it('serializes issuer through metadata only', () => {
    const token = new StellarToken({
      chainId: StellarChainId.STELLAR,
      address: 'CCW67TSZV3SSS2HXMBQ5JFGCKJNXKZM7UQUWUZPUTHXSTZLEO7SJMI75',
      symbol: 'USDC',
      name: 'USDC',
      decimals: 7,
      metadata: {
        issuer: 'GA5ZSEJYB37JRC5AVCIA5MOP4RHTM335X2KGX3IHOJAPP5RE34K4KZVN',
      },
    })

    const json = token.toJSON()

    expect(json).not.toHaveProperty('issuer')
    expect(json.metadata.issuer).toBe(
      'GA5ZSEJYB37JRC5AVCIA5MOP4RHTM335X2KGX3IHOJAPP5RE34K4KZVN',
    )
  })
})
