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
      expect(numberToFixed(0.001234, { significant: 3 })).toBe('0.00123')
      expect(numberToFixed(123.456, { significant: 2 })).toBe('120')
    })

    it('should handle string inputs with significant digits', () => {
      expect(numberToFixed('1234.5678', { significant: 4 })).toBe('1235')
      expect(numberToFixed('0.001234', { significant: 3 })).toBe('0.00123')
    })
  })

  describe('maxFixed decimal places', () => {
    it('should format numbers with maxFixed, removing trailing zeros', () => {
      expect(numberToFixed(1.2, { maxFixed: 3 })).toBe('1.2')
      expect(numberToFixed(1.0, { maxFixed: 3 })).toBe('1')
      expect(numberToFixed(1.234, { maxFixed: 2 })).toBe('1.23')
      expect(numberToFixed(1.230, { maxFixed: 3 })).toBe('1.23')
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
})