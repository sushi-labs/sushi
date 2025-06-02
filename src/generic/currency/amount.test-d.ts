import { describe, expectTypeOf } from 'vitest'
import type { Native } from './native.js'
import { createToken, type Token } from './token.js'
import { it } from 'node:test'
import {
  addAmounts,
  addAmountsHumanReadable,
  createAmount,
  createAmountFromHumanReadable,
  divideAmounts,
  multiplyAmounts,
  subtractAmounts,
  subtractAmountsHumanReadable,
  type Amount,
} from './amount.js'

const mockNative: Native = {
  chainId: 1,
  symbol: 'ETH',
  name: 'Ethereum',
  decimals: 18,
  type: 'native',
}

const mockToken = createToken({
  chainId: 1,
  address: '0x1234567890abcdef1234567890abcdef12345678',
  symbol: 'MOCK',
  name: 'Mock Token',
  decimals: 18,
})

describe('generic/currency/amount.ts types', () => {
  for (const fn of [createAmount, createAmountFromHumanReadable]) {
    describe(fn.name, () => {
      it('should return an amount with a native currency', () => {
        const amount = fn(mockNative, 100n)
        expectTypeOf(amount.currency).toEqualTypeOf<Native>()
        expectTypeOf(amount).toEqualTypeOf<Amount<Native>>()
      })

      it('should return an amount with a token currency', () => {
        const amount = fn(mockToken, 100n)
        expectTypeOf(amount.currency).toEqualTypeOf<Token>()
        expectTypeOf(amount).toEqualTypeOf<Amount<Token>>()
      })
    })
  }

  for (const fn of [
    addAmounts,
    addAmountsHumanReadable,
    subtractAmounts,
    subtractAmountsHumanReadable,
    multiplyAmounts,
    divideAmounts,
  ]) {
    describe(fn.name, () => {
      it('should return an amount with a native currency', () => {
        const mockNativeAmount = createAmount(mockNative, 100n)

        const amount = fn(mockNativeAmount, '100')
        expectTypeOf(amount.currency).toEqualTypeOf<Native>()
        expectTypeOf(amount).toEqualTypeOf<Amount<Native>>()
      })

      it('should return an amount with a token currency', () => {
        const mockTokenAmount = createAmount(mockToken, 100n)

        const amount = fn(mockTokenAmount, '100')
        expectTypeOf(amount.currency).toEqualTypeOf<Token>()
        expectTypeOf(amount).toEqualTypeOf<Amount<Token>>()
      })
    })
  }
})
