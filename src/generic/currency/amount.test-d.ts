import { it } from 'node:test'
import { describe, expectTypeOf } from 'vitest'
import type { BigintIsh } from '../types/bigintish.js'
import { Amount } from './amount.js'
import type { Currency } from './currency.js'
import { Native } from './native.js'
import { Token } from './token.js'

class TestNative extends Native {
  public override toJSON() {
    return {} as any
  }
  public override wrap() {
    return {} as any
  }
}

const mockNative = new TestNative({
  chainId: 1,
  symbol: 'ETH',
  name: 'Ethereum',
  decimals: 18,
})

class TestToken extends Token {
  public override toJSON() {
    return {} as any
  }

  public override wrap() {
    return this
  }
}

const mockToken = new TestToken({
  chainId: 1,
  address: '0x1234567890abcdef1234567890abcdef12345678',
  symbol: 'MOCK',
  name: 'Mock Token',
  decimals: 18,
})

function AmountFromRaw<TCurrency extends Currency>(
  currency: TCurrency,
  amount: BigintIsh,
) {
  return new Amount(currency, amount)
}

describe('generic/currency/amount.ts types', () => {
  for (const fn of [AmountFromRaw, Amount.fromHuman]) {
    describe(fn.name, () => {
      it('should return an amount with a native currency', () => {
        const amount = fn(mockNative, 100n)
        expectTypeOf(amount.currency).toEqualTypeOf<TestNative>()
        expectTypeOf(amount).toEqualTypeOf<Amount<TestNative>>()
      })

      it('should return an amount with a token currency', () => {
        const amount = fn(mockToken, 100n)
        expectTypeOf(amount.currency).toEqualTypeOf<TestToken>()
        expectTypeOf(amount).toEqualTypeOf<Amount<TestToken>>()
      })
    })
  }

  for (const fn of [
    'add',
    'addHuman',
    'sub',
    'subHuman',
    'mulHuman',
    'div',
  ] as const) {
    describe(fn, () => {
      it('should return an amount with a native currency', () => {
        const mockNativeAmount = new Amount(mockNative, 100n)

        const amount = mockNativeAmount[fn]('100')
        expectTypeOf(amount.currency).toEqualTypeOf<TestNative>()
        expectTypeOf(amount).toEqualTypeOf<Amount<TestNative>>()
      })

      it('should return an amount with a token currency', () => {
        const mockTokenAmount = new Amount(mockToken, 100n)

        const amount = mockTokenAmount[fn]('100')
        expectTypeOf(amount.currency).toEqualTypeOf<TestToken>()
        expectTypeOf(amount).toEqualTypeOf<Amount<TestToken>>()
      })
    })
  }
})
