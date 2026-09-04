import { describe, expect, it } from 'vitest'
import { Amount } from './amount.js'
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
      expect(price.invert().toString({ maxFixed: 18 })).toBe('0.8')
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

  describe('string formatting', () => {
    it('formats very small prices without scientific notation', () => {
      const price = Price.fromHuman(wbtc, usdc, '0.000000000001')

      expect(price.toString({ maxFixed: 18 })).toBe('0.000000000001')
      expect(price.toString({ significant: 6 })).toBe('0.000000000001')
    })

    it('truncates repeating prices to maxFixed decimal places', () => {
      const price = new Price({
        base: wbtc,
        quote: wbtc,
        numerator: 1n,
        denominator: 3n,
      })

      expect(price.toString({ maxFixed: 18 })).toBe('0.333333333333333333')
    })

    it('preserves prices beyond Number.MAX_SAFE_INTEGER', () => {
      const price = new Price({
        base: wbtc,
        quote: wbtc,
        numerator: 9007199254740993n,
      })

      expect(price.toString({ maxFixed: 18 })).toBe('9007199254740993')
    })

    it('supports fixed, maxFixed, and significant formatting', () => {
      const price = new Price({
        base: wbtc,
        quote: wbtc,
        numerator: 1n,
        denominator: 8n,
      })

      expect(price.toString({ fixed: 3 })).toBe('0.125')
      expect(price.toString({ maxFixed: 2 })).toBe('0.12')
      expect(price.toString({ significant: 2 })).toBe('0.13')
    })
  })
  describe('getQuote', () => {
    it('quotes exactly for prices that are not representable as a double', () => {
      const price = new Price({
        base: wbtc,
        quote: wbtc,
        numerator: 1n,
        denominator: 3n,
      })

      expect(price.getQuote(new Amount(wbtc, 10n ** 18n)).amount).toBe(
        333333333333333333n,
      )
    })

    it('never rounds a quote up past the true value', () => {
      const base = new Amount(wbtc, 10n ** 18n)

      for (let denominator = 1n; denominator < 512n; denominator++) {
        const price = new Price({
          base: wbtc,
          quote: wbtc,
          numerator: 1n,
          denominator,
        })

        expect(price.getQuote(base).amount).toBe(base.amount / denominator)
      }
    })

    it('quotes exactly for high-precision human prices', () => {
      const price = Price.fromHuman(wbtc, usdc, `0.${'1'.repeat(400)}`)
      const base = new Amount(wbtc, 10n ** 8n)

      expect(price.getQuote(base).amount).toBe(
        (price.numerator * base.amount) / price.denominator,
      )
    })

    it('rounds negative quotes down', () => {
      const price = new Price({
        base: wbtc,
        quote: wbtc,
        numerator: 1n,
        denominator: 3n,
      })

      expect(price.getQuote(new Amount(wbtc, -10n)).amount).toBe(-4n)
    })

    it('throws for a price built from a zero base amount', () => {
      const price = new Price({
        baseAmount: new Amount(wbtc, 0n),
        quoteAmount: new Amount(usdc, 1_000_000n),
      })

      expect(() => price.getQuote(new Amount(wbtc, 10n ** 8n))).toThrow(
        'Cannot get a quote from a price of zero base',
      )
    })
  })
})
