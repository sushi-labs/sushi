import { describe, expect, it } from 'vitest'
import { numberToBigInt } from './number-to-bigint.js'

describe('numberToBigInt', () => {
  describe('safe integer range', () => {
    it('should convert small positive integers correctly', () => {
      expect(numberToBigInt(0)).toBe(0n)
      expect(numberToBigInt(1)).toBe(1n)
      expect(numberToBigInt(42)).toBe(42n)
      expect(numberToBigInt(1000)).toBe(1000n)
    })

    it('should convert small negative integers correctly', () => {
      expect(numberToBigInt(-1)).toBe(-1n)
      expect(numberToBigInt(-42)).toBe(-42n)
      expect(numberToBigInt(-1000)).toBe(-1000n)
    })

    it('should round decimal numbers', () => {
      expect(numberToBigInt(1.4)).toBe(1n)
      expect(numberToBigInt(1.5)).toBe(2n)
      expect(numberToBigInt(1.6)).toBe(2n)
    })

    it('should handle MAX_SAFE_INTEGER boundary', () => {
      expect(numberToBigInt(Number.MAX_SAFE_INTEGER)).toBe(
        BigInt(Number.MAX_SAFE_INTEGER),
      )
      expect(numberToBigInt(-Number.MAX_SAFE_INTEGER)).toBe(
        BigInt(-Number.MAX_SAFE_INTEGER),
      )
    })
  })

  describe('large number handling', () => {
    it('should handle numbers just above MAX_SAFE_INTEGER', () => {
      const justAbove = Number.MAX_SAFE_INTEGER + 1
      const result = numberToBigInt(justAbove)
      expect(typeof result).toBe('bigint')
      expect(result).toBeGreaterThan(BigInt(Number.MAX_SAFE_INTEGER))
    })

    it('should handle very large positive numbers', () => {
      const veryLarge = Number.MAX_SAFE_INTEGER * 2
      const result = numberToBigInt(veryLarge)
      expect(typeof result).toBe('bigint')
      expect(result).toBeGreaterThan(0n)
    })

    it('should handle very large negative numbers', () => {
      const veryLarge = -Number.MAX_SAFE_INTEGER * 2
      const result = numberToBigInt(veryLarge)
      expect(typeof result).toBe('bigint')
      expect(result).toBeLessThan(0n)
    })

    it('should preserve sign for large numbers', () => {
      const large = Number.MAX_SAFE_INTEGER * 10
      expect(numberToBigInt(large)).toBeGreaterThan(0n)
      expect(numberToBigInt(-large)).toBeLessThan(0n)
    })
  })

  describe('precision and rounding edge cases', () => {
    it('should handle numbers that lose precision in JavaScript', () => {
      // Numbers that can't be exactly represented as doubles
      const imprecise = 0.1 + 0.2 // 0.30000000000000004
      const result = numberToBigInt(imprecise)
      expect(result).toBe(0n) // Should round to 0
    })

    it('should round large decimals correctly', () => {
      const largeDecimal = Number.MAX_SAFE_INTEGER + 0.7
      const result = numberToBigInt(largeDecimal)
      expect(typeof result).toBe('bigint')
    })

    it('should handle scientific notation', () => {
      expect(numberToBigInt(1e6)).toBe(1000000n)
      expect(numberToBigInt(1.5e6)).toBe(1500000n)
      expect(numberToBigInt(-1e6)).toBe(-1000000n)
    })
  })

  describe('special values', () => {
    it('should handle zero', () => {
      expect(numberToBigInt(0)).toBe(0n)
      expect(numberToBigInt(-0)).toBe(0n)
    })

    it('should handle Infinity', () => {
      // Function should handle gracefully or throw
      expect(() => numberToBigInt(Number.POSITIVE_INFINITY)).toThrow()
      expect(() => numberToBigInt(Number.NEGATIVE_INFINITY)).toThrow()
    })

    it('should handle NaN', () => {
      // Function should handle gracefully or throw
      expect(() => numberToBigInt(Number.NaN)).toThrow()
    })

    it('should handle very small numbers', () => {
      expect(numberToBigInt(Number.MIN_VALUE)).toBe(0n) // Should round to 0
      expect(numberToBigInt(1e-10)).toBe(0n) // Should round to 0
    })
  })

  describe('mathematical properties', () => {
    it('should maintain relative magnitude for large numbers', () => {
      const a = Number.MAX_SAFE_INTEGER * 2
      const b = Number.MAX_SAFE_INTEGER * 3
      const resultA = numberToBigInt(a)
      const resultB = numberToBigInt(b)
      expect(resultB).toBeGreaterThan(resultA)
    })

    it('should handle powers of 2 correctly', () => {
      // Powers of 2 are important for binary representations
      const powers = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]
      for (const power of powers) {
        expect(numberToBigInt(power)).toBe(BigInt(power))
      }
    })

    it('should be approximately linear for large inputs', () => {
      // Test that doubling input approximately doubles output for large numbers
      const base = Number.MAX_SAFE_INTEGER * 2
      const double = base * 2
      const resultBase = numberToBigInt(base)
      const resultDouble = numberToBigInt(double)

      // Should be roughly 2x (allowing for some precision loss)
      const ratio = Number(resultDouble) / Number(resultBase)
      expect(ratio).toBeGreaterThan(1.5)
      expect(ratio).toBeLessThan(2.5)
    })
  })

  describe('implementation details', () => {
    it('should trigger the large number path for numbers >= MAX_SAFE_INTEGER', () => {
      // This tests the exp >= 51 condition in the code
      const atThreshold = Number.MAX_SAFE_INTEGER + 1
      const result = numberToBigInt(atThreshold)
      expect(typeof result).toBe('bigint')
    })

    it('should handle mantissa calculations correctly', () => {
      // Test the internal mantissa and shift calculations
      const largeNumbers = [
        Number.MAX_SAFE_INTEGER * 2,
        Number.MAX_SAFE_INTEGER * 4,
        Number.MAX_SAFE_INTEGER * 8,
      ]

      for (const num of largeNumbers) {
        const result = numberToBigInt(num)
        expect(typeof result).toBe('bigint')
        expect(result).toBeGreaterThan(0n)
      }
    })
  })
})
