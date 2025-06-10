import { it } from 'node:test'
import { describe, expectTypeOf } from 'vitest'
import type { EvmToken } from '~/evm/currency/token.js'
import { MvmToken } from '~/mvm/currency/token.js'
import { TvmNative } from '~/tvm/currency/native.js'
import type { TvmToken } from '~/tvm/currency/token.js'
import { EvmNative } from '../../evm/currency/native.js'

describe('generic/currency/currency.ts types', () => {
  describe('wrapCurrency', () => {
    it('should return the same chaintype - EVM', () => {
      const evmMockNative = new EvmNative({
        chainId: 1,
        symbol: 'ETH',
        name: 'Ethereum',
        decimals: 18,
      })

      expectTypeOf(evmMockNative.wrap()).toEqualTypeOf<EvmToken>()
    })

    it('should return the same chaintype - Mvm', () => {
      const mvmMockToken = new MvmToken({
        chainId: -1,
        address: '0x1234567890abcdef1234567890abcdef12345678::mvm::token',
        symbol: 'MVM',
        name: 'MVM Token',
        decimals: 18,
      })

      expectTypeOf(mvmMockToken.wrap()).toEqualTypeOf<MvmToken>()
    })

    it('should return the same chaintype - Tvm', () => {
      const tvmMockToken = new TvmNative({
        chainId: -2,
        symbol: 'TVM',
        name: 'Tvm Native',
        decimals: 18,
      })

      expectTypeOf(tvmMockToken.wrap()).toEqualTypeOf<TvmToken>()
    })
  })
})
