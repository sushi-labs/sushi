import { describe, expect, it } from 'vitest'
import { Price } from './price.js'
import { Token } from './token.js'

class TestToken extends Token {
  public override toJSON() {
    return {} as any
  }

  public override wrap() {
    return this
  }
}

const wbtc = new TestToken({
  decimals: 8,
  symbol: 'WBTC',
  name: 'Wrapped Bitcoin',
  chainId: 1,
  address: '0x1234567890abcdef1234567890abcdef12345678',
})

const usdc = new TestToken({
  decimals: 6,
  symbol: 'USDC',
  name: 'USD Coin',
  chainId: 1,
  address: '0xabcdefabcdefabcdefabcdefabcdefabcdefabcd',
})

describe('Price', () => {
  describe('fromHuman', () => {
    it('creates a price for currencies with different decimals', () => {
      const price = Price.fromHuman(wbtc, usdc, '1.25')

      expect(price.base).toBe(wbtc)
      expect(price.quote).toBe(usdc)
      expect(price.toNumber()).toBe(1.25)
      expect(price.numerator).toBe(125000000n)
      expect(price.denominator).toBe(10000000000n)
      expect(price.invert().toNumber()).toBe(0.8)
    })

    it('accepts a decimal without a leading zero', () => {
      expect(Price.fromHuman(wbtc, usdc, '.5').toNumber()).toBe(0.5)
    })

    it('accepts zero', () => {
      const price = Price.fromHuman(wbtc, usdc, '0')

      expect(price.toNumber()).toBe(0)
      expect(price.numerator).toBe(0n)
    })

    it('preserves more than 18 fractional digits', () => {
      const price = Price.fromHuman(wbtc, usdc, '0.0000000000000000001')

      expect(price.numerator).toBe(1000000n)
      expect(price.denominator).toBe(1000000000000000000000000000n)
    })

    it.each([
      '',
      '-1',
      '1e6',
      'Infinity',
    ])('rejects invalid input %j', (value) => {
      expect(() => Price.fromHuman(wbtc, usdc, value)).toThrow(
        `Invalid price: ${value}`,
      )
    })
  })

  describe('tryFromHuman', () => {
    it('returns a price for valid input', () => {
      expect(Price.tryFromHuman(wbtc, usdc, '1.25')?.toNumber()).toBe(1.25)
    })

    it.each([
      '',
      '-1',
      '1e6',
      'Infinity',
    ])('returns undefined for invalid input %j', (value) => {
      expect(Price.tryFromHuman(wbtc, usdc, value)).toBeUndefined()
    })
  })
})
