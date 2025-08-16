import { describe, expect, it } from 'vitest'
import { Fraction } from '../math/fraction.js'
import { Amount } from './amount.js'
import { Token } from './token.js'

class TestToken extends Token {
  public override toJSON() {
    return {
      chainId: this.chainId,
      address: this.address,
      symbol: this.symbol,
      name: this.name,
      decimals: this.decimals,
    } as any
  }

  public override wrap() {
    return this
  }
}

const mockToken = new TestToken({
  decimals: 18,
  symbol: 'MOCK',
  name: 'Mock Token',
  chainId: 1,
  address: '0xa0b86a33e6efefffff86a33e6efefffff86a33e',
})

const otherToken = new TestToken({
  decimals: 6,
  symbol: 'USDC',
  name: 'USD Coin',
  chainId: 1,
  address: '0xb1c47a22e6efefffff22e6efefffff22e6efefffff',
})

describe('Amount', () => {
  describe('construction', () => {
    it('creates Amount from raw bigint', () => {
      const amount = new Amount(mockToken, 1000n)
      expect(amount.currency).toBe(mockToken)
      expect(amount.amount).toBe(1000n)
    })

    it('creates Amount from human-readable string', () => {
      const amount = Amount.fromHuman(mockToken, '1.5')
      expect(amount.amount).toBe(1500000000000000000n) // 1.5 * 10^18
    })

    it('creates Amount from human-readable number', () => {
      const amount = Amount.fromHuman(mockToken, 2.5)
      expect(amount.amount).toBe(2500000000000000000n) // 2.5 * 10^18
    })

    it('handles different decimal places', () => {
      const amount = Amount.fromHuman(otherToken, '100.5') // USDC has 6 decimals
      expect(amount.amount).toBe(100500000n) // 100.5 * 10^6
    })
  })

  describe('arithmetic operations', () => {
    const amount1 = new Amount(mockToken, 1000n)
    const amount2 = new Amount(mockToken, 500n)

    describe('addition', () => {
      it('adds two amounts', () => {
        const result = amount1.add(amount2)
        expect(result.amount).toBe(1500n)
        expect(result.currency).toBe(mockToken)
      })

      it('adds bigint', () => {
        const result = amount1.add(300n)
        expect(result.amount).toBe(1300n)
      })

      it('adds string', () => {
        const result = amount1.add('200')
        expect(result.amount).toBe(1200n)
      })

      it('adds Fraction', () => {
        const fraction = new Fraction({ numerator: 100n, denominator: 1n })
        const result = amount1.add(fraction)
        expect(result.amount).toBe(1100n)
      })

      it('adds human-readable value', () => {
        const amount = Amount.fromHuman(mockToken, '1.0')
        const result = amount.addHuman('0.5')
        expect(result.amount).toBe(1500000000000000000n) // 1.5 * 10^18
      })
    })

    describe('subtraction', () => {
      it('subtracts two amounts', () => {
        const result = amount1.sub(amount2)
        expect(result.amount).toBe(500n)
        expect(result.currency).toBe(mockToken)
      })

      it('subtracts bigint', () => {
        const result = amount1.sub(300n)
        expect(result.amount).toBe(700n)
      })

      it('subtracts string', () => {
        const result = amount1.sub('200')
        expect(result.amount).toBe(800n)
      })

      it('subtracts Fraction', () => {
        const fraction = new Fraction({ numerator: 100n, denominator: 1n })
        const result = amount1.sub(fraction)
        expect(result.amount).toBe(900n)
      })

      it('subtracts human-readable value', () => {
        const amount = Amount.fromHuman(mockToken, '2.0')
        const result = amount.subHuman('0.5')
        expect(result.amount).toBe(1500000000000000000n) // 1.5 * 10^18
      })
    })

    describe('multiplication', () => {
      it('multiplies by another amount', () => {
        const result = amount1.mul(amount2)
        expect(result.amount).toBe(500000n)
        expect(result.currency).toBe(mockToken)
      })

      it('multiplies by bigint', () => {
        const result = amount1.mul(3n)
        expect(result.amount).toBe(3000n)
      })

      it('multiplies by string', () => {
        const result = amount1.mul('2')
        expect(result.amount).toBe(2000n)
      })

      it('multiplies by Fraction', () => {
        const fraction = new Fraction({ numerator: 3n, denominator: 2n })
        const result = amount1.mul(fraction)
        expect(result.amount).toBe(1500n) // 1000 * 3/2
      })

      it('multiplies by human-readable value', () => {
        const result = amount1.mulHuman('2.5')
        expect(result.amount).toBe(2500n)
      })
    })

    describe('division', () => {
      it('divides by human-readable divisor', () => {
        const amount = new Amount(mockToken, 1000n)
        const result = amount.div('2')
        expect(result.amount).toBe(500n)
      })

      it('divides by fractional divisor', () => {
        const amount = new Amount(mockToken, 150n)
        const result = amount.div('1.5')
        expect(result.amount).toBe(100n)
      })

      it('throws when dividing by zero', () => {
        expect(() => amount1.div('0')).toThrow('Cannot divide by zero')
      })

      it('returns Fraction when using divToFraction', () => {
        const result = amount1.divToFraction(amount2)
        expect(result.numerator).toBe(1000n)
        expect(result.denominator).toBe(500n)
      })

      it('divToFraction with Fraction input', () => {
        const fraction = new Fraction({ numerator: 2n, denominator: 1n })
        const result = amount1.divToFraction(fraction)
        expect(result.numerator).toBe(1000n)
        expect(result.denominator).toBe(2n)
      })

      it('divToFraction with bigint', () => {
        const result = amount1.divToFraction(4n)
        expect(result.numerator).toBe(1000n)
        expect(result.denominator).toBe(4n)
      })
    })
  })

  describe('comparison operations', () => {
    const amount1 = new Amount(mockToken, 1000n)
    const amount2 = new Amount(mockToken, 500n)
    const amount3 = new Amount(mockToken, 1000n)

    it('compares with gt (greater than)', () => {
      expect(amount1.gt(amount2)).toBe(true)
      expect(amount2.gt(amount1)).toBe(false)
      expect(amount1.gt(500n)).toBe(true)
      expect(amount1.gt('500')).toBe(true)
    })

    it('compares with gte (greater than or equal)', () => {
      expect(amount1.gte(amount2)).toBe(true)
      expect(amount1.gte(amount3)).toBe(true)
      expect(amount2.gte(amount1)).toBe(false)
      expect(amount1.gte(1000n)).toBe(true)
      expect(amount1.gte('1000')).toBe(true)
    })

    it('compares with lt (less than)', () => {
      expect(amount2.lt(amount1)).toBe(true)
      expect(amount1.lt(amount2)).toBe(false)
      expect(amount2.lt(1000n)).toBe(true)
      expect(amount2.lt('1000')).toBe(true)
    })

    it('compares with lte (less than or equal)', () => {
      expect(amount2.lte(amount1)).toBe(true)
      expect(amount1.lte(amount3)).toBe(true)
      expect(amount1.lte(amount2)).toBe(false)
      expect(amount1.lte(1000n)).toBe(true)
      expect(amount1.lte('1000')).toBe(true)
    })

    it('compares with eq (equal)', () => {
      expect(amount1.eq(amount3)).toBe(true)
      expect(amount1.eq(amount2)).toBe(false)
      expect(amount1.eq(1000n)).toBe(true)
      expect(amount1.eq('1000')).toBe(true)
    })

    it('allows comparing amounts with different currencies', () => {
      const usdcAmount = new Amount(otherToken, 1000n)
      expect(amount1.gt(usdcAmount)).toBe(false)
      expect(amount1.eq(usdcAmount)).toBe(true) // Same raw amount
    })
  })

  describe('utility methods', () => {
    const amount = Amount.fromHuman(mockToken, '123.456789')

    it('wraps currency', () => {
      const wrapped = amount.wrap()
      expect(wrapped.amount).toBe(amount.amount)
      expect(wrapped.currency).toBe(mockToken)
    })

    it('converts to JSON', () => {
      const json = amount.toJSON()

      // amount should be a string now (JSON-safe)
      expect(typeof json.amount).toBe('string')
      expect(json.amount).toBe(amount.amount.toString())

      // currency passthrough
      expect(json.currency).toEqual(mockToken.toJSON())

      // Should not throw when stringifying the instance itself
      expect(() => JSON.stringify(amount)).not.toThrow()

      // Simulate React Query queryKey usage
      const key = ['positions', amount]
      expect(() => JSON.stringify(key)).not.toThrow()

      // Ensure parsed shape matches expectation
      const parsed = JSON.parse(JSON.stringify(amount))
      expect(parsed).toEqual({
        currency: mockToken.toJSON(),
        amount: amount.amount.toString(),
      })
    })

    it('converts to string with default formatting', () => {
      const str = amount.toString()
      expect(typeof str).toBe('string')
      expect(str).toContain('123.456789')
    })

    it('converts to string with custom formatting', () => {
      const str = amount.toString({ fixed: 2 })
      expect(typeof str).toBe('string')
    })

    it('converts to significant digits', () => {
      const sig = amount.toSignificant(4)
      expect(typeof sig).toBe('string')
      expect(sig.length).toBeGreaterThan(0)
    })
  })

  describe('edge cases', () => {
    it('handles zero amounts', () => {
      const zero = new Amount(mockToken, 0n)
      expect(zero.amount).toBe(0n)
      expect(zero.toString()).toBe('0')
    })

    it('handles very large amounts', () => {
      const large = new Amount(mockToken, BigInt('999999999999999999999999999'))
      expect(large.amount).toBe(BigInt('999999999999999999999999999'))
    })

    it('handles fractional operations with precision', () => {
      const amount = new Amount(mockToken, 1000n)
      const fraction = new Fraction({ numerator: 1n, denominator: 3n })
      const result = amount.mul(fraction)
      expect(result.amount).toBe(333n) // Truncated division
    })

    it('handles operations between different decimal precision currencies', () => {
      const ethAmount = Amount.fromHuman(mockToken, '1.0') // 18 decimals
      const usdcAmount = Amount.fromHuman(otherToken, '1000.0') // 6 decimals

      const result = ethAmount.add(usdcAmount)
      expect(result.currency).toBe(mockToken)
      // Raw addition: 1000000000000000000 + 1000000000 = 1000000001000000000
      expect(result.amount).toBe(1000000001000000000n)
    })
  })

  describe('critical edge cases and bug scenarios', () => {
    describe('fromHuman precision edge cases', () => {
      it('should handle very small amounts', () => {
        const amount = Amount.fromHuman(mockToken, '0.000000000000000001')
        expect(amount.amount).toBe(1n) // 1 wei for 18 decimals
      })

      it('should handle very large amounts', () => {
        const largeValue = '999999999999999999999'
        const amount = Amount.fromHuman(mockToken, largeValue)
        expect(amount.amount).toBeGreaterThan(0n)
      })

      it('should throw on invalid decimal strings', () => {
        expect(() => Amount.fromHuman(mockToken, 'not a number')).toThrow()
        expect(() => Amount.fromHuman(mockToken, '1.2.3')).toThrow()
      })

      it('should handle different token decimals correctly', () => {
        const amount6 = Amount.fromHuman(otherToken, '1.5')
        const amount18 = Amount.fromHuman(mockToken, '1.5')

        expect(amount6.amount).toBe(1500000n) // 6 decimals
        expect(amount18.amount).toBe(1500000000000000000n) // 18 decimals
      })
    })

    describe('tryFromHuman safety', () => {
      it('should return undefined for invalid inputs instead of throwing', () => {
        expect(Amount.tryFromHuman(mockToken, 'invalid')).toBeUndefined()
        expect(Amount.tryFromHuman(mockToken, '1.2.3')).toBeUndefined()
        expect(Amount.tryFromHuman(mockToken, 'NaN')).toBeUndefined()
      })

      it('should return valid Amount for good inputs', () => {
        const result = Amount.tryFromHuman(mockToken, '1.5')
        expect(result).toBeInstanceOf(Amount)
        expect(result?.amount).toBe(1500000000000000000n)
      })
    })

    describe('Fraction scaling edge cases', () => {
      it('should handle very large Fraction operations without overflow', () => {
        const amount = new Amount(mockToken, 1000000000000000000n)
        const largeFraction = new Fraction({
          numerator: 2n ** 50n,
          denominator: 2n ** 50n + 1n,
        })

        // This should not overflow due to scaling
        expect(() => amount.add(largeFraction)).not.toThrow()
        expect(() => amount.sub(largeFraction)).not.toThrow()
      })

      it('should handle zero Fraction operations', () => {
        const amount = new Amount(mockToken, 1000000000000000000n)
        const zeroFraction = new Fraction({ numerator: 0, denominator: 1 })

        const addResult = amount.add(zeroFraction)
        const subResult = amount.sub(zeroFraction)

        expect(addResult.amount).toBe(amount.amount)
        expect(subResult.amount).toBe(amount.amount)
      })
    })

    describe('human operations precision', () => {
      it('should handle addHuman with high precision', () => {
        const amount = new Amount(mockToken, 1000000000000000000n) // 1.0
        const result = amount.addHuman('0.000000000000000001') // + 1 wei

        expect(result.amount).toBe(1000000000000000001n)
      })

      it('should handle subHuman with precision for different decimals', () => {
        const amount = new Amount(otherToken, 1000000n) // 1.0 USDC (6 decimals)

        // Try to subtract more precision than token supports - should round
        const result = amount.subHuman('0.0000001') // 7 decimals for 6-decimal token
        expect(result.amount).toBe(1000000n) // Should remain unchanged due to rounding
      })

      it('should handle mulHuman edge cases', () => {
        const amount = new Amount(mockToken, 1000000000000000000n)

        const doubled = amount.mulHuman('2')
        expect(doubled.amount).toBe(2000000000000000000n)

        const zeroed = amount.mulHuman('0')
        expect(zeroed.amount).toBe(0n)

        const halved = amount.mulHuman('0.5')
        expect(halved.amount).toBe(500000000000000000n)
      })

      it('should handle div edge cases', () => {
        const amount = new Amount(mockToken, 1000000000000000000n)

        const halved = amount.div('2')
        expect(halved.amount).toBe(500000000000000000n)

        expect(() => amount.div('0')).toThrow('Cannot divide by zero')

        const doubled = amount.div('0.5')
        expect(doubled.amount).toBe(2000000000000000000n)
      })
    })

    describe('formatting edge cases', () => {
      it('should handle toString with very small amounts', () => {
        const amount = new Amount(mockToken, 1n) // 1 wei
        const human = amount.toString()
        expect(human).toBe('0.000000000000000001')
      })

      it('should handle toString with very large amounts', () => {
        const largeAmount = new Amount(mockToken, 1000000000000000000000000n)
        const human = largeAmount.toString()
        expect(human).toBe('1000000')
      })

      it('should handle toString precision', () => {
        const amount = new Amount(mockToken, 1500000000000000000n) // 1.5
        expect(amount.toString()).toBe('1.5')

        const precise = new Amount(mockToken, 1234567890123456789n)
        console.log(precise.toString())
        expect(precise.toString()).toBe('1.234567890123456789')
      })
    })

    describe('arithmetic overflow scenarios', () => {
      it('should handle negative results in subtraction', () => {
        const amount = new Amount(mockToken, 1000000000000000000n)
        const larger = new Amount(mockToken, 2000000000000000000n)

        const result = amount.sub(larger)
        expect(result.amount).toBe(-1000000000000000000n)
      })

      it('should handle multiplication overflow potential', () => {
        const large = new Amount(mockToken, 2n ** 100n)
        const result = large.mul(2n)
        expect(result.amount).toBe(2n ** 101n)
      })

      it('should handle cross-multiplication in Fraction addition', () => {
        const amount = new Amount(mockToken, 2n ** 50n)
        const fraction = new Fraction({ numerator: 2n ** 50n, denominator: 1n })

        // This tests potential overflow in cross-multiplication
        expect(() => amount.add(fraction)).not.toThrow()
      })
    })

    describe('extreme decimal precision', () => {
      it('should handle zero-decimal tokens', () => {
        const zeroDecimalToken = new TestToken({
          chainId: 1,
          address: '0x789',
          symbol: 'ZERO',
          name: 'Zero',
          decimals: 0,
        })

        const amount = Amount.fromHuman(zeroDecimalToken, '5')
        expect(amount.amount).toBe(5n)
        expect(amount.toString()).toBe('5')
      })

      it('should handle high-decimal tokens', () => {
        const highDecimalToken = new TestToken({
          chainId: 1,
          address: '0xabc',
          symbol: 'HIGH',
          name: 'High Decimal',
          decimals: 30,
        })

        const amount = Amount.fromHuman(highDecimalToken, '1')
        expect(amount.amount).toBe(10n ** 30n)
      })
    })
  })
})
