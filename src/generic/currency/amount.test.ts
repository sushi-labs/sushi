import { describe, it, expect } from 'vitest'
import { Amount } from './amount.js'
import { Token } from './token.js'

class TestToken extends Token {
  public override toJSON() {
    return {} as any
  }

  public override wrap() {
    return this
  }
}

const mockCurrency = new TestToken({
  decimals: 18,
  symbol: 'MOCK',
  name: 'Mock Currency',
  chainId: 1,
  address: '0xa',
})

describe('Amount', () => {
  describe('creation', () => {
    it('constructs from raw bigint', () => {
      const amt = new Amount(mockCurrency, 100n)
      expect(amt).toEqual({ currency: mockCurrency, amount: 100n })
    })

    it('constructs from human-readable', () => {
      const amt = Amount.fromHuman(mockCurrency, '1.5')
      // 1.5 × 10^18 = 1_500_000_000_000_000_000n
      expect(amt.amount).toBe(1500000000000000000n)
    })
  })

  describe('addition', () => {
    const a = new Amount(mockCurrency, 100n)
    const b = new Amount(mockCurrency, 50n)

    it('adds two Amounts', () => {
      expect(a.add(b).amount).toBe(150n)
    })

    it('adds a raw bigint or string', () => {
      expect(a.add(25n).amount).toBe(125n)
      expect(a.add('25').amount).toBe(125n)
    })

    it('adds human-readable', () => {
      expect(a.addHuman('0.5').amount).toBe(100n + 500000000000000000n)
    })
  })

  describe('subtraction', () => {
    const a = new Amount(mockCurrency, 100n)
    const b = new Amount(mockCurrency, 40n)

    it('subtracts two Amounts', () => {
      expect(a.sub(b).amount).toBe(60n)
    })

    it('subtracts a raw bigint or string', () => {
      expect(a.sub(20n).amount).toBe(80n)
      expect(a.sub('20').amount).toBe(80n)
    })

    it('subtracts human-readable', () => {
      // 100 - 0.5 = 99.5 raw = 99.5 × 10^18
      const c = Amount.fromHuman(mockCurrency, '100')
      expect(c.subHuman('0.5').amount).toBe(
        100000000000000000000n - 500000000000000000n,
      )
    })
  })

  describe('multiplication & division', () => {
    const a = new Amount(mockCurrency, 100n)

    it('mulHuman by whole & fractional', () => {
      expect(a.mulHuman('2').amount).toBe(200n)
      expect(a.mulHuman('1.5').amount).toBe(150n)
    })

    it('divide returns fraction', () => {
      const b = new Amount(mockCurrency, 50n)
      const { numerator, denominator } = a.div(b)
      expect(denominator).toBe(50n)
      expect(numerator).toBe(100n)
    })

    it('divHuman by whole & fractional', () => {
      expect(a.divHuman('2').amount).toBe(50n)
      expect(a.divHuman('1.5').amount).toBe(66n) // (100/1.5 ≈ 66.666 truncated)
    })

    it('throws dividing human by zero', () => {
      expect(() => a.divHuman('0')).toThrow(/Cannot divide by zero/)
    })
  })

  describe('comparisons', () => {
    const a = new Amount(mockCurrency, 200n)
    const b = new Amount(mockCurrency, 100n)
    const c = new Amount(mockCurrency, 200n)

    it('gt, gte, lt, lte, eq', () => {
      expect(a.gt(b)).toBe(true)
      expect(a.gte(b)).toBe(true)
      expect(b.lt(a)).toBe(true)
      expect(b.lte(a)).toBe(true)
      expect(a.eq(c)).toBe(true)
      expect(a.eq(b)).toBe(false)
    })
  })
})
