import { describe, expect, it } from 'vitest'
import { StellarChainId } from '../../../chain/chains.js'
import type { StellarCurrency } from '../../../currency/currency.js'
import { STELLAR_USDC } from '../tokens/USDC.js'
import { STELLAR_XLM } from '../tokens/XLM.js'
import { isStellarStable } from './stables.js'

describe('isStellarStable', () => {
  it('identifies Stellar stable tokens', () => {
    expect(isStellarStable(STELLAR_USDC[StellarChainId.STELLAR])).toBe(true)
    expect(isStellarStable(STELLAR_XLM[StellarChainId.STELLAR])).toBe(false)
  })

  it('normalizes Stellar addresses before comparing', () => {
    const currency = {
      ...STELLAR_USDC[StellarChainId.STELLAR],
      address: STELLAR_USDC[StellarChainId.STELLAR].address.toLowerCase(),
    } as StellarCurrency

    expect(isStellarStable(currency)).toBe(true)
  })
})
