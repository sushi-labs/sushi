import { describe, it, expect } from 'vitest'
import {
  createAmount,
  createAmountFromHumanReadable,
  addAmounts,
  addAmountsHumanReadable,
  subtractAmounts,
  subtractAmountsHumanReadable,
  multiplyAmounts,
  divideAmounts,
  amountGt,
  amountGtHumanReadable,
  amountGte,
  amountLt,
  amountLtHumanReadable,
  amountLte,
  amountLteHumanReadable,
  amountEq,
} from './amount.js'
import { createToken } from './token.js'

const mockCurrency = createToken({
  decimals: 18,
  symbol: 'MOCK',
  name: 'Mock Currency',
  chainId: 1,
  address: '0xa',
})

const otherCurrency = createToken({
  decimals: 18,
  symbol: 'OTHER',
  name: 'Other Currency',
  chainId: 1,
  address: '0xb',
})

describe('generic/currency/amount.ts functions', () => {
  // createAmount
  describe('createAmount', () => {
    it('should create an amount with bigint input', () => {
      const amt = createAmount(mockCurrency, 100n)
      expect(amt).toEqual({ currency: mockCurrency, amount: 100n })
    })

    it('should create an amount with string input', () => {
      const amt = createAmount(mockCurrency, '100')
      expect(amt).toEqual({ currency: mockCurrency, amount: 100n })
    })
  })

  // createAmountFromHumanReadable
  describe('createAmountFromHumanReadable', () => {
    it('should convert human-readable value to raw amount', () => {
      const amt = createAmountFromHumanReadable(mockCurrency, '1.5')
      // For 18 decimals, 1.5 becomes 1.5e18 = 1500000000000000000
      expect(amt.amount).toBe(1500000000000000000n)
    })
  })

  // addAmounts and addAmountsHumanReadable
  describe('addAmounts', () => {
    it('should add two amounts', () => {
      const a = createAmount(mockCurrency, 100n)
      const b = createAmount(mockCurrency, 250n)
      const res = addAmounts(a, b)
      expect(res.amount).toBe(350n)
    })

    it('should add an amount and a bigint/string', () => {
      const a = createAmount(mockCurrency, 100n)

      const res1 = addAmounts(a, 50n)
      expect(res1.amount).toBe(150n)

      const res2 = addAmounts(a, '50')
      expect(res2.amount).toBe(150n)
    })

    it('should throw when adding amounts with different currencies', () => {
      const a = createAmount(mockCurrency, 100n)
      const b = createAmount(otherCurrency, 50n)
      expect(() => addAmounts(a, b)).toThrow(/different currencies/)
    })
  })

  describe('addAmountsHumanReadable', () => {
    it('should correctly add a human-readable amount', () => {
      const a = createAmount(mockCurrency, 100n)
      const res = addAmountsHumanReadable(a, '0.5')
      // 0.5 in 18 decimals = 500000000000000000n
      expect(res.amount).toBe(100n + 500000000000000000n)
    })
  })

  // subtractAmounts and subtractAmountsHumanReadable
  describe('subtractAmounts', () => {
    it('should subtract two amounts', () => {
      const a = createAmount(mockCurrency, 300n)
      const b = createAmount(mockCurrency, 150n)
      const res = subtractAmounts(a, b)
      expect(res.amount).toBe(150n)
    })

    it('should subtract an amount from a bigint/string', () => {
      const a = createAmount(mockCurrency, 300n)

      const res1 = subtractAmounts(a, 100n)
      expect(res1.amount).toBe(200n)

      const res2 = subtractAmounts(a, '100')
      expect(res2.amount).toBe(200n)
    })

    it('should throw when subtracting amounts with different currencies', () => {
      const a = createAmount(mockCurrency, 300n)
      const b = createAmount(otherCurrency, 100n)
      expect(() => subtractAmounts(a, b)).toThrow(/different currencies/)
    })
  })

  describe('subtractAmountsHumanReadable', () => {
    it('should correctly subtract a human-readable value', () => {
      const a = createAmount(mockCurrency, 1500000000000000000n) // 1.5
      const res = subtractAmountsHumanReadable(a, '0.5')
      // 1.5 - 0.5 = 1 in raw amount = 1000000000000000000n
      expect(res.amount).toBe(1000000000000000000n)
    })
  })

  // multiplyAmounts
  describe('multiplyAmounts', () => {
    it('should multiply an amount by a whole number', () => {
      const a = createAmount(mockCurrency, 100n)
      const res = multiplyAmounts(a, '2')
      expect(res.amount).toBe(200n)
    })

    it('should multiply an amount by a fractional multiplier', () => {
      const a = createAmount(mockCurrency, 100n)
      const res = multiplyAmounts(a, '1.5')
      // Assuming rounding/truncation, 100 * 1.5 = 150
      expect(res.amount).toBe(150n)
    })
  })

  // divideAmounts
  describe('divideAmounts', () => {
    it('should divide an amount by a whole number', () => {
      const a = createAmount(mockCurrency, 100n)
      const res = divideAmounts(a, '2')
      expect(res.amount).toBe(50n)
    })

    it('should divide an amount by a fractional number', () => {
      const a = createAmount(mockCurrency, 150n)
      const res = divideAmounts(a, '1.5')
      // 150 / 1.5 = 100
      expect(res.amount).toBe(100n)
    })

    it('should throw when dividing by zero', () => {
      const a = createAmount(mockCurrency, 100n)
      expect(() => divideAmounts(a, '0')).toThrow(/divide by zero/i)
    })
  })

  // Comparison functions
  describe('Comparison functions', () => {
    // amountGt
    describe('amountGt', () => {
      it('returns true if first amount is greater than second', () => {
        const a = createAmount(mockCurrency, 200n)
        const b = createAmount(mockCurrency, 100n)
        expect(amountGt(a, b)).toBe(true)
      })

      it('returns false if they are equal', () => {
        const a = createAmount(mockCurrency, 100n)
        const b = createAmount(mockCurrency, 100n)
        expect(amountGt(a, b)).toBe(false)
      })
    })

    // amountGtHumanReadable
    describe('amountGtHumanReadable', () => {
      it('returns true if amount is greater than a human-readable value', () => {
        const a = createAmount(mockCurrency, 2000000000000000000n)
        expect(amountGtHumanReadable(a, '1.5')).toBe(true)
      })
    })

    // amountGte
    describe('amountGte', () => {
      it('returns true if amounts are equal', () => {
        const a = createAmount(mockCurrency, 100n)
        const b = createAmount(mockCurrency, 100n)
        expect(amountGte(a, b)).toBe(true)
      })

      it('returns true if first amount is greater', () => {
        const a = createAmount(mockCurrency, 150n)
        const b = createAmount(mockCurrency, 100n)
        expect(amountGte(a, b)).toBe(true)
      })

      it('returns false if first amount is less', () => {
        const a = createAmount(mockCurrency, 50n)
        const b = createAmount(mockCurrency, 100n)
        expect(amountGte(a, b)).toBe(false)
      })
    })

    // amountLt
    describe('amountLt', () => {
      it('returns true if first amount is less than second', () => {
        const a = createAmount(mockCurrency, 100n)
        const b = createAmount(mockCurrency, 200n)
        expect(amountLt(a, b)).toBe(true)
      })

      it('returns false if equal or greater', () => {
        const a = createAmount(mockCurrency, 200n)
        const b = createAmount(mockCurrency, 200n)
        expect(amountLt(a, b)).toBe(false)
      })
    })

    // amountLtHumanReadable
    describe('amountLtHumanReadable', () => {
      it('returns true if amount is less than a human-readable value', () => {
        const a = createAmount(mockCurrency, 1000000000000000000n)
        expect(amountLtHumanReadable(a, '1.5')).toBe(true)
      })
    })

    // amountLte
    describe('amountLte', () => {
      it('returns true if amount is less than or equal to second amount', () => {
        const a = createAmount(mockCurrency, 100n)
        const b = createAmount(mockCurrency, 100n)
        expect(amountLte(a, b)).toBe(true)
      })

      it('returns false if first amount is greater', () => {
        const a = createAmount(mockCurrency, 150n)
        const b = createAmount(mockCurrency, 100n)
        expect(amountLte(a, b)).toBe(false)
      })
    })

    // amountLteHumanReadable
    describe('amountLteHumanReadable', () => {
      it('returns true if amount is <= a human-readable value', () => {
        const a = createAmount(mockCurrency, 2000000000000000000n)
        expect(amountLteHumanReadable(a, '2')).toBe(true)
      })
    })

    // amountEq
    describe('amountEq', () => {
      it('returns true if amounts are equal', () => {
        const a = createAmount(mockCurrency, 200n)
        const b = createAmount(mockCurrency, 200n)
        expect(amountEq(a, b)).toBe(true)
      })

      it('returns false if amounts are different', () => {
        const a = createAmount(mockCurrency, 200n)
        const b = createAmount(mockCurrency, 100n)
        expect(amountEq(a, b)).toBe(false)
      })
    })
  })
})
