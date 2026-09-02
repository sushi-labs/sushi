import { describe, expect, it } from 'vitest'
import { StellarChainId } from '../../../chain/chains.js'
import { STELLAR_USDT0 } from '../tokens/USDT0.js'
import { stellarDefaultQuoteCurrency } from './default-quote.js'

describe('stellarDefaultQuoteCurrency', () => {
  it('uses USDT0 as the Stellar default quote', () => {
    expect(stellarDefaultQuoteCurrency[StellarChainId.STELLAR]).toBe(
      STELLAR_USDT0[StellarChainId.STELLAR],
    )
  })
})
