import { it } from 'node:test'
import { describe, expectTypeOf } from 'vitest'
import { Price } from './price.js'
import { Token } from './token.js'

class BaseToken extends Token {
  public override toJSON() {
    return {} as any
  }

  public override wrap() {
    return this
  }
}

class QuoteToken extends Token {
  public override toJSON() {
    return {} as any
  }

  public override wrap() {
    return this
  }
}

const base = new BaseToken({
  chainId: 1,
  address: '0x1234567890abcdef1234567890abcdef12345678',
  symbol: 'BASE',
  name: 'Base',
  decimals: 18,
})

const quote = new QuoteToken({
  chainId: 1,
  address: '0xabcdefabcdefabcdefabcdefabcdefabcdefabcd',
  symbol: 'QUOTE',
  name: 'Quote',
  decimals: 6,
})

describe('generic/currency/price.ts types', () => {
  it('preserves concrete base and quote currency types', () => {
    const price = Price.fromHuman(base, quote, '1.25')

    expectTypeOf(price).toEqualTypeOf<Price<BaseToken, QuoteToken>>()
    expectTypeOf(price.base).toEqualTypeOf<BaseToken>()
    expectTypeOf(price.quote).toEqualTypeOf<QuoteToken>()
    expectTypeOf(price.invert()).toEqualTypeOf<Price<QuoteToken, BaseToken>>()
  })

  it('preserves types when trying to create a price', () => {
    const price = Price.tryFromHuman(base, quote, '1.25')

    expectTypeOf(price).toEqualTypeOf<
      Price<BaseToken, QuoteToken> | undefined
    >()
  })
})
