import { describe, expect, it } from 'vitest'
import { numberToFixed } from './number.js'

describe('numberToFixed', () => {
  describe('fixed decimal places', () => {
    it('should format numbers with fixed decimal places', () => {
      expect(numberToFixed(1.234, { fixed: 2 })).toBe('1.23')
      expect(numberToFixed(1.236, { fixed: 2 })).toBe('1.24')
      expect(numberToFixed(1, { fixed: 2 })).toBe('1.00')
      expect(numberToFixed(0, { fixed: 2 })).toBe('0.00')
    })

    it('should handle string inputs with fixed decimal places', () => {
      expect(numberToFixed('1.234', { fixed: 2 })).toBe('1.23')
      expect(numberToFixed('1.236', { fixed: 2 })).toBe('1.24')
      expect(numberToFixed('1', { fixed: 2 })).toBe('1.00')
      expect(numberToFixed('0', { fixed: 2 })).toBe('0.00')
    })

    it('should handle negative numbers with fixed decimal places', () => {
      expect(numberToFixed(-1.234, { fixed: 2 })).toBe('-1.23')
      expect(numberToFixed('-1.236', { fixed: 2 })).toBe('-1.24')
    })

    it('should handle zero decimal places', () => {
      expect(numberToFixed(1.234, { fixed: 0 })).toBe('1')
      expect(numberToFixed('1.234', { fixed: 0 })).toBe('1')
    })
  })

  describe('significant digits', () => {
    it('should format numbers with significant digits', () => {
      expect(numberToFixed(1234.5678, { significant: 4 })).toBe('1235')
      expect(numberToFixed(2779.6772866, { significant: 4 })).toBe('2780')
      expect(numberToFixed(123456789.123456, { significant: 4 })).toBe(
        '123456789',
      )
      expect(numberToFixed(1234.5678, { significant: 4 })).toBe('1235')
      expect(numberToFixed(0.001234, { significant: 3 })).toBe('0.00123')
      expect(numberToFixed(123.456, { significant: 2 })).toBe('123')
      expect(numberToFixed(0, { significant: 2 })).toBe('0')

      expect(numberToFixed(2 / 3, { significant: 4 })).toBe('0.6667')

      expect(numberToFixed(0.99, { significant: 1 })).toBe('1')
      expect(numberToFixed(0.099999999, { significant: 5 })).toBe('0.1')
      expect(numberToFixed(9.9, { significant: 1 })).toBe('10')
      expect(numberToFixed(999.9, { significant: 2 })).toBe('1000')
      expect(numberToFixed(999.9, { significant: 3 })).toBe('1000')
      expect(numberToFixed(6789.97605, { significant: 4 })).toBe('6790')
      expect(numberToFixed(31229.976058, { significant: 5 })).toBe('31230')
    })

    it('should handle string inputs with significant digits', () => {
      expect(numberToFixed('1234.5678', { significant: 4 })).toBe('1235')
      expect(numberToFixed('2779.677286642591274414', { significant: 4 })).toBe(
        '2780',
      )
      expect(numberToFixed('123456789.123456', { significant: 4 })).toBe(
        '123456789',
      )
      expect(numberToFixed('0.001234', { significant: 3 })).toBe('0.00123')
      expect(numberToFixed('0.000', { significant: 2 })).toBe('0')

      expect(numberToFixed('0.666666666666666', { significant: 4 })).toBe(
        '0.6667',
      )

      expect(numberToFixed('0.99', { significant: 1 })).toBe('1')
      expect(numberToFixed('0.099999999', { significant: 5 })).toBe('0.1')
      expect(numberToFixed('9.9', { significant: 1 })).toBe('10')
      expect(numberToFixed('999.9', { significant: 2 })).toBe('1000')
      expect(numberToFixed('999.9', { significant: 3 })).toBe('1000')
      expect(numberToFixed('6789.97605', { significant: 4 })).toBe('6790')
      expect(numberToFixed('31229.976058', { significant: 5 })).toBe('31230')
    })
  })

  describe('maxFixed decimal places', () => {
    it('should format numbers with maxFixed, removing trailing zeros', () => {
      expect(numberToFixed(1.2, { maxFixed: 3 })).toBe('1.2')
      expect(numberToFixed(1.0, { maxFixed: 3 })).toBe('1')
      expect(numberToFixed(1.234, { maxFixed: 2 })).toBe('1.23')
      expect(numberToFixed(1.23, { maxFixed: 3 })).toBe('1.23')
    })

    it('should handle string inputs with maxFixed', () => {
      expect(numberToFixed('1.2', { maxFixed: 3 })).toBe('1.2')
      expect(numberToFixed('1.0', { maxFixed: 3 })).toBe('1')
      expect(numberToFixed('1.234', { maxFixed: 2 })).toBe('1.23')
    })

    it('should handle integers with maxFixed', () => {
      expect(numberToFixed(123, { maxFixed: 2 })).toBe('123')
      expect(numberToFixed('123', { maxFixed: 2 })).toBe('123')
    })
  })

  describe('precision loss scenarios', () => {
    it('should demonstrate precision loss with current implementation', () => {
      // Very precise string that loses precision when converted to Number
      const preciseString = '0.1234567890123456789012345678901234567890'
      const result = numberToFixed(preciseString, { maxFixed: 20 })

      // Current implementation converts to Number first, losing precision
      expect(result).not.toBe('0.12345678901234568')
      expect(result.length).toBeLessThan(preciseString.length)
    })

    it('should demonstrate precision preservation with very large numbers', () => {
      const largeString = '123456789012345678901234567890.123456789'
      const result = numberToFixed(largeString, { maxFixed: 10 })

      // New implementation preserves precision for string inputs
      expect(result).toBe('123456789012345678901234567890.123456789')
      expect(result).toBe(largeString)
    })

    it('should demonstrate precision preservation with very small numbers', () => {
      const smallString = '0.123456789012345678901234567890123456789'
      const result = numberToFixed(smallString, { maxFixed: 35 })

      // New implementation preserves precision for string inputs
      expect(result).toBe('0.12345678901234567890123456789012345')
      expect(result.length).toBeGreaterThan(20)
    })
  })

  describe('edge cases', () => {
    it('should handle empty and zero values', () => {
      expect(numberToFixed(0, { maxFixed: 2 })).toBe('0')
      expect(numberToFixed('0', { maxFixed: 2 })).toBe('0')
      expect(numberToFixed('0.00', { maxFixed: 2 })).toBe('0')
    })

    it('should handle negative numbers', () => {
      expect(numberToFixed(-1.234, { maxFixed: 2 })).toBe('-1.23')
      expect(numberToFixed('-1.234', { maxFixed: 2 })).toBe('-1.23')
    })

    it('should handle scientific notation in strings', () => {
      expect(numberToFixed('1.23e-4', { maxFixed: 8 })).toBe('0.000123')
      expect(numberToFixed('1.23e+2', { maxFixed: 2 })).toBe('123')
    })
  })

  describe('string rounding edge cases', () => {
    it('should round fixed-decimal string inputs that overflow into a new integer digit', () => {
      expect(numberToFixed('9.995', { fixed: 2 })).toBe('10')
      expect(numberToFixed('-9.995', { fixed: 2 })).toBe('-10')
    })

    it('should round long leading-zero decimals when using significant digits', () => {
      expect(numberToFixed('0.00009999', { significant: 2 })).toBe('0.0001')
      expect(numberToFixed('-0.00009999', { significant: 2 })).toBe('-0.0001')
    })

    it('should round large negative strings when all significant digits are 9s', () => {
      expect(numberToFixed('-9999.9', { significant: 1 })).toBe('-10000')
    })
  })

  describe('fixed rounding cascades', () => {
    it('should cascade rounding across multiple integer digits for strings', () => {
      expect(numberToFixed('199.995', { fixed: 2 })).toBe('200')
      expect(numberToFixed('-199.995', { fixed: 2 })).toBe('-200')
    })

    it('should keep trailing zeros for numeric inputs when the same rounding occurs', () => {
      expect(numberToFixed(199.995, { fixed: 2 })).toBe('200.00')
      expect(numberToFixed(-199.995, { fixed: 2 })).toBe('-200.00')
    })

    it('should handle +/-0.005 thresholds symmetrically', () => {
      expect(numberToFixed('0.005', { fixed: 2 })).toBe('0.01')
      expect(numberToFixed('-0.005', { fixed: 2 })).toBe('-0.01')
      expect(numberToFixed(0.005, { fixed: 2 })).toBe('0.01')
      expect(numberToFixed(-0.005, { fixed: 2 })).toBe('-0.01')
    })

    it('should preserve decimal accuracy for strings at IEEE rounding pain points', () => {
      expect(numberToFixed('2.675', { fixed: 2 })).toBe('2.68')
      expect(numberToFixed(2.675, { fixed: 2 })).toBe('2.67')
    })
  })

  describe('maxFixed nuances', () => {
    it('should truncate (not round) string inputs for maxFixed', () => {
      expect(numberToFixed('2.999', { maxFixed: 2 })).toBe('2.99')
      expect(numberToFixed('-2.999', { maxFixed: 2 })).toBe('-2.99')
    })

    it('should round numeric inputs for maxFixed after trimming trailing zeros', () => {
      expect(numberToFixed(2.999, { maxFixed: 2 })).toBe('3')
      expect(numberToFixed(-2.999, { maxFixed: 2 })).toBe('-3')
    })

    it('should drop redundant zeros for very small fractions supplied as strings', () => {
      expect(numberToFixed('0.0001000', { maxFixed: 6 })).toBe('0.0001')
      expect(numberToFixed('-0.0001000', { maxFixed: 6 })).toBe('-0.0001')
    })

    it('should distinguish between truncation and rounding when maxFixed is zero', () => {
      expect(numberToFixed('12.9', { maxFixed: 0 })).toBe('12')
      expect(numberToFixed('-12.9', { maxFixed: 0 })).toBe('-12')
      expect(numberToFixed(12.9, { maxFixed: 0 })).toBe('13')
      expect(numberToFixed(-12.9, { maxFixed: 0 })).toBe('-13')
    })

    it('should trim or round repeating decimals based on input type', () => {
      expect(numberToFixed('0.10999', { maxFixed: 3 })).toBe('0.109')
      expect(numberToFixed('-0.10999', { maxFixed: 3 })).toBe('-0.109')
      expect(numberToFixed(0.10999, { maxFixed: 3 })).toBe('0.11')
      expect(numberToFixed(-0.10999, { maxFixed: 3 })).toBe('-0.11')
    })
  })

  describe('significant digits with decimals', () => {
    it('should keep track of leading zeros for negative decimals', () => {
      expect(numberToFixed('-0.00056789', { significant: 2 })).toBe('-0.0006')
    })

    it('should round decimals just below one down to -1 with a single significant digit', () => {
      expect(numberToFixed('-0.9994', { significant: 1 })).toBe('-1')
    })
  })

  describe('input validation', () => {
    it('should reject invalid numeric strings', () => {
      expect(() => numberToFixed('invalid', { fixed: 2 })).toThrow(
        'Invalid number string',
      )
    })

    it('should reject empty option objects', () => {
      expect(() => numberToFixed(1, {} as any)).toThrow(
        'Invalid arguments for numberToFixed',
      )
    })
  })
})
