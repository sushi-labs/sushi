import { describe, expect, it } from 'vitest'
import { Fraction } from './fraction.js'

describe('Fraction', () => {
  describe('constructor', () => {
    it('should create fraction from positive integer', () => {
      const fraction = new Fraction(5)
      expect(fraction.numerator).toBe(5n)
      expect(fraction.denominator).toBe(1n)
    })

    it('should create fraction from numerator/denominator object', () => {
      const fraction = new Fraction({ numerator: 3, denominator: 4 })
      expect(fraction.numerator).toBe(3n)
      expect(fraction.denominator).toBe(4n)
    })

    it('should default denominator to 1 when not provided', () => {
      const fraction = new Fraction({ numerator: 7 })
      expect(fraction.numerator).toBe(7n)
      expect(fraction.denominator).toBe(1n)
    })

    it('should throw on negative number input', () => {
      expect(() => new Fraction(-1)).toThrow(
        'Fraction must be a non-negative integer',
      )
    })

    it('should throw on non-integer number input', () => {
      expect(() => new Fraction(1.5)).toThrow(
        'Fraction must be a non-negative integer',
      )
    })

    it('should handle zero denominator input without throwing in constructor', () => {
      // This reveals a potential bug - constructor doesn't validate denominator
      const fraction = new Fraction({ numerator: 1, denominator: 0 })
      expect(fraction.denominator).toBe(0n)
    })

    it('should handle very large numbers', () => {
      const large = 2n ** 100n
      const fraction = new Fraction({
        numerator: large,
        denominator: large + 1n,
      })
      expect(fraction.numerator).toBe(large)
      expect(fraction.denominator).toBe(large + 1n)
    })
  })

  describe('quotient and remainder', () => {
    it('should calculate quotient correctly', () => {
      const fraction = new Fraction({ numerator: 7, denominator: 3 })
      expect(fraction.quotient).toBe(2n)
    })

    it('should calculate remainder correctly', () => {
      const fraction = new Fraction({ numerator: 7, denominator: 3 })
      expect(fraction.remainder).toBe(1n)
    })

    it('should handle zero denominator in quotient calculation', () => {
      const fraction = new Fraction({ numerator: 1, denominator: 0 })
      // This should throw due to division by zero, but let's see what happens
      expect(() => fraction.quotient).toThrow()
    })
  })

  describe('invert', () => {
    it('should invert fraction correctly', () => {
      const fraction = new Fraction({ numerator: 3, denominator: 4 })
      const inverted = fraction.invert()
      expect(inverted.numerator).toBe(4n)
      expect(inverted.denominator).toBe(3n)
    })

    it('should throw when inverting zero numerator', () => {
      const fraction = new Fraction({ numerator: 0, denominator: 5 })
      expect(() => fraction.invert()).toThrow(
        'Cannot invert a fraction with a numerator of 0',
      )
    })
  })

  describe('arithmetic operations', () => {
    it('should add fractions correctly', () => {
      const a = new Fraction({ numerator: 1, denominator: 3 })
      const b = new Fraction({ numerator: 1, denominator: 6 })
      const result = a.add(b)
      // 1/3 + 1/6 = 2/6 + 1/6 = 3/6 = 1/2, but without reduction: 9/18
      expect(result.numerator).toBe(9n)
      expect(result.denominator).toBe(18n)
    })

    it('should add bigint correctly', () => {
      const fraction = new Fraction({ numerator: 1, denominator: 2 })
      const result = fraction.add(2n)
      // 1/2 + 2 = 1/2 + 4/2 = 5/2
      expect(result.numerator).toBe(5n)
      expect(result.denominator).toBe(2n)
    })

    it('should subtract fractions correctly', () => {
      const a = new Fraction({ numerator: 1, denominator: 2 })
      const b = new Fraction({ numerator: 1, denominator: 4 })
      const result = a.sub(b)
      // 1/2 - 1/4 = 2/4 - 1/4 = 1/4, but without reduction: 2/8
      expect(result.numerator).toBe(2n)
      expect(result.denominator).toBe(8n)
    })

    it('should multiply fractions correctly', () => {
      const a = new Fraction({ numerator: 2, denominator: 3 })
      const b = new Fraction({ numerator: 3, denominator: 4 })
      const result = a.mul(b)
      expect(result.numerator).toBe(6n)
      expect(result.denominator).toBe(12n)
    })

    it('should divide fractions correctly', () => {
      const a = new Fraction({ numerator: 2, denominator: 3 })
      const b = new Fraction({ numerator: 3, denominator: 4 })
      const result = a.div(b)
      // (2/3) / (3/4) = (2/3) * (4/3) = 8/9
      expect(result.numerator).toBe(8n)
      expect(result.denominator).toBe(9n)
    })

    it('should handle potential overflow in cross-multiplication', () => {
      const large = 2n ** 100n
      const a = new Fraction({ numerator: large, denominator: 1 })
      const b = new Fraction({ numerator: large, denominator: 1 })
      const result = a.add(b)
      // This tests if cross-multiplication causes overflow
      expect(result.numerator).toBe(large + large)
      expect(result.denominator).toBe(1n)
    })

    it('should handle division by zero in div operation', () => {
      const a = new Fraction({ numerator: 1, denominator: 2 })
      const b = new Fraction({ numerator: 0, denominator: 1 })
      const result = a.div(b)
      // Division by zero fraction should create infinite denominator
      expect(result.numerator).toBe(1n)
      expect(result.denominator).toBe(0n)
    })
  })

  describe('comparison operations', () => {
    it('should compare fractions correctly', () => {
      const a = new Fraction({ numerator: 1, denominator: 2 })
      const b = new Fraction({ numerator: 1, denominator: 3 })

      expect(a.gt(b)).toBe(true)
      expect(b.lt(a)).toBe(true)
      expect(a.eq(a)).toBe(true)
      expect(a.neq(b)).toBe(true)
    })

    it('should compare with bigint correctly', () => {
      const fraction = new Fraction({ numerator: 5, denominator: 2 })

      expect(fraction.gt(2)).toBe(true)
      expect(fraction.lt(3)).toBe(true)
      expect(fraction.eq(2)).toBe(false)
    })

    it('should handle cross-multiplication overflow in comparison', () => {
      const large = 2n ** 100n
      const a = new Fraction({ numerator: large, denominator: 1 })
      const b = new Fraction({ numerator: large + 1n, denominator: 1 })

      expect(a.lt(b)).toBe(true)
    })
  })

  describe('number conversion', () => {
    it('should convert to number correctly', () => {
      const fraction = new Fraction({ numerator: 1, denominator: 2 })
      expect(fraction.toNumber()).toBe(0.5)
    })

    it('should handle precision loss in toNumber', () => {
      const fraction = new Fraction({ numerator: 1, denominator: 3 })
      expect(fraction.toNumber()).toBeCloseTo(0.3333333333333333)
    })
  })

  describe('string formatting', () => {
    it('formats terminating fractions without floating-point artifacts', () => {
      const fraction = new Fraction({ numerator: 4n, denominator: 5n })

      expect(fraction.toString({ maxFixed: 18 })).toBe('0.8')
    })

    it('truncates repeating fractions to maxFixed decimal places', () => {
      const fraction = new Fraction({ numerator: 1n, denominator: 3n })

      expect(fraction.toString({ maxFixed: 18 })).toBe('0.333333333333333333')
    })

    it('preserves very small fractions in ordinary decimal notation', () => {
      const fraction = new Fraction({
        numerator: 1n,
        denominator: 10n ** 12n,
      })

      expect(fraction.toString({ maxFixed: 18 })).toBe('0.000000000001')
      expect(fraction.toSignificant(6)).toBe('0.000000000001')
    })

    it('preserves integers beyond Number.MAX_SAFE_INTEGER', () => {
      const fraction = new Fraction({
        numerator: 9007199254740993n,
        denominator: 1n,
      })

      expect(fraction.toString({ maxFixed: 18 })).toBe('9007199254740993')
    })

    it('rounds and pads fixed decimal places', () => {
      expect(
        new Fraction({ numerator: 1n, denominator: 8n }).toString({
          fixed: 2,
        }),
      ).toBe('0.13')
      expect(
        new Fraction({ numerator: 1n, denominator: 2n }).toString({
          fixed: 3,
        }),
      ).toBe('0.500')
      expect(
        new Fraction({ numerator: 199995n, denominator: 1000n }).toString({
          fixed: 2,
        }),
      ).toBe('200.00')
    })

    it('rounds to significant digits without scientific notation', () => {
      expect(
        new Fraction({ numerator: 1n, denominator: 3n }).toString({
          significant: 6,
        }),
      ).toBe('0.333333')
      expect(
        new Fraction({
          numerator: 123456789123n,
          denominator: 100n,
        }).toString({ significant: 4 }),
      ).toBe('1235000000')
      expect(
        new Fraction({ numerator: 9999n, denominator: 10n }).toString({
          significant: 3,
        }),
      ).toBe('1000')
    })

    it('formats negative fractions', () => {
      const fraction = new Fraction({ numerator: -1n, denominator: 8n })

      expect(fraction.toString({ fixed: 2 })).toBe('-0.13')
      expect(fraction.toString({ maxFixed: 2 })).toBe('-0.12')
    })

    it('formats zero-denominator fractions as non-finite numbers', () => {
      const infinity = new Fraction({ numerator: 1n, denominator: 2n }).div(
        new Fraction({ numerator: 0n }),
      )

      expect(infinity.toString({ fixed: 2 })).toBe('Infinity')
      expect(infinity.toString({ maxFixed: 2 })).toBe('Infinity')
      expect(infinity.toString({ significant: 2 })).toBe('Infinity')
      expect(
        new Fraction({ numerator: -1n, denominator: 0n }).toString({
          maxFixed: 2,
        }),
      ).toBe('-Infinity')
      expect(
        new Fraction({ numerator: 0n, denominator: 0n }).toString({
          maxFixed: 2,
        }),
      ).toBe('NaN')
    })
  })

  describe('serialization', () => {
    it('should serialize to JSON correctly', () => {
      const fraction = new Fraction({ numerator: 3, denominator: 4 })
      const json = fraction.toJSON()
      expect(json).toEqual({ n: '3', d: '4' })
    })

    it('should handle large numbers in serialization', () => {
      const large = 2n ** 100n
      const fraction = new Fraction({
        numerator: large,
        denominator: large + 1n,
      })
      const json = fraction.toJSON()
      expect(json.n).toBe(large.toString())
      expect(json.d).toBe((large + 1n).toString())
    })
  })
})
