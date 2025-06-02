import { it } from 'node:test'
import { describe, expectTypeOf } from 'vitest'
import { wrapCurrency } from './currency.js'
import type { EvmToken } from '~evm/currency/token.js'
import { createEvmNative } from '~evm/currency/native.js'
import { createMvmToken, type MvmToken } from '~mvm/currency/token.js'
import { createTvmNative, type TvmToken } from '~tvm/index.js'
import { createToken, type Token } from './token.js'

describe('generic/currency/currency.ts types', () => {
  describe('wrapCurrency', () => {
    it('should return the same chaintype - Generic', () => {
      const token = createToken({
        chainId: 1,
        symbol: 'ETH',
        name: 'Ethereum',
        decimals: 18,
        address: 'address',
      })

      expectTypeOf(wrapCurrency(token)).toEqualTypeOf<Token>()
    })

    it('should return the same chaintype - EVM', () => {
      const evmMockNative = createEvmNative({
        chainId: 1,
        symbol: 'ETH',
        name: 'Ethereum',
        decimals: 18,
      })

      expectTypeOf(wrapCurrency(evmMockNative)).toEqualTypeOf<EvmToken>()
    })

    it('should return the same chaintype - Mvm', () => {
      const mvmMockToken = createMvmToken({
        chainId: -1,
        address: '0x1234567890abcdef1234567890abcdef12345678::mvm::token',
        symbol: 'MVM',
        name: 'MVM Token',
        decimals: 18,
      })

      expectTypeOf(wrapCurrency(mvmMockToken)).toEqualTypeOf<MvmToken>()
    })

    it('should return the same chaintype - Tvm', () => {
      const tvmMockToken = createTvmNative({
        chainId: -2,
        symbol: 'TVM',
        name: 'Tvm Native',
        decimals: 18,
      })

      expectTypeOf(wrapCurrency(tvmMockToken)).toEqualTypeOf<TvmToken>()
    })
  })
})
