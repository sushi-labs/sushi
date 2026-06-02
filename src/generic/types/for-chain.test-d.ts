import { describe, expectTypeOf, it } from 'vitest'
import type { EvmChainId } from '../../evm/chain/chains.js'
import type { EvmCurrency } from '../../evm/currency/currency.js'
import type { EvmNative } from '../../evm/currency/native.js'
import type { EvmToken } from '../../evm/currency/token.js'
import type { MvmChainId } from '../../mvm/chain/chains.js'
import type { MvmToken } from '../../mvm/currency/token.js'
import type { StellarAddress } from '../../stellar/address.js'
import type { StellarChainId } from '../../stellar/chain/chains.js'
import type { StellarCurrency } from '../../stellar/currency/currency.js'
import type { StellarToken } from '../../stellar/currency/token.js'
import type { StellarID } from '../../stellar/types/id.js'
import type { SvmCurrency } from '../../svm/currency/currency.js'
import type { SvmNative } from '../../svm/currency/native.js'
import type { SvmToken } from '../../svm/currency/token.js'
import type { SvmChainId } from '../../svm/index.js'
import type { SvmID } from '../../svm/types/id.js'
import type {
  CurrencyFor,
  IDFor,
  NativeChainId,
  NativeFor,
  TokenFor,
} from './for-chain.js'

describe('generic/types/for-chain.ts types', () => {
  type Metadata = {
    coingeckoId: string
    verified: boolean
  }

  describe('TokenFor', () => {
    it('should return the correct token type for each chain family', () => {
      expectTypeOf<TokenFor<EvmChainId, Metadata>>().toEqualTypeOf<
        EvmToken<Metadata>
      >()
      expectTypeOf<TokenFor<MvmChainId, Metadata>>().toEqualTypeOf<
        MvmToken<Metadata>
      >()
      expectTypeOf<TokenFor<SvmChainId, Metadata>>().toEqualTypeOf<
        SvmToken<Metadata>
      >()
      expectTypeOf<TokenFor<StellarChainId, Metadata>>().toEqualTypeOf<
        StellarToken<Metadata>
      >()
    })

    it('should distribute over chain id unions', () => {
      expectTypeOf<TokenFor<EvmChainId | SvmChainId, Metadata>>().toEqualTypeOf<
        EvmToken<Metadata> | SvmToken<Metadata>
      >()
    })
  })

  describe('CurrencyFor', () => {
    it('should return the correct currency type for each chain family', () => {
      expectTypeOf<CurrencyFor<EvmChainId, Metadata>>().toEqualTypeOf<
        EvmCurrency<Metadata>
      >()
      expectTypeOf<CurrencyFor<MvmChainId, Metadata>>().toEqualTypeOf<
        MvmToken<Metadata>
      >()
      expectTypeOf<CurrencyFor<SvmChainId, Metadata>>().toEqualTypeOf<
        SvmCurrency<Metadata>
      >()
      expectTypeOf<CurrencyFor<StellarChainId, Metadata>>().toEqualTypeOf<
        StellarCurrency<Metadata>
      >()
    })

    it('should distribute over chain id unions', () => {
      expectTypeOf<
        CurrencyFor<EvmChainId | SvmChainId, Metadata>
      >().toEqualTypeOf<EvmCurrency<Metadata> | SvmCurrency<Metadata>>()
    })
  })

  describe('NativeFor', () => {
    it('should only support chain families with native currency classes', () => {
      expectTypeOf<NativeChainId>().toEqualTypeOf<EvmChainId | SvmChainId>()
      expectTypeOf<NativeFor<EvmChainId, Metadata>>().toEqualTypeOf<
        EvmNative<Metadata>
      >()
      expectTypeOf<NativeFor<SvmChainId, Metadata>>().toEqualTypeOf<
        SvmNative<Metadata>
      >()
      expectTypeOf<NativeFor<NativeChainId, Metadata>>().toEqualTypeOf<
        EvmNative<Metadata> | SvmNative<Metadata>
      >()
    })

    it('should be assignable to CurrencyFor for native chain families', () => {
      expectTypeOf<NativeFor<EvmChainId, Metadata>>().toMatchTypeOf<
        CurrencyFor<EvmChainId, Metadata>
      >()
      expectTypeOf<NativeFor<SvmChainId, Metadata>>().toMatchTypeOf<
        CurrencyFor<SvmChainId, Metadata>
      >()
      expectTypeOf<NativeFor<NativeChainId, Metadata>>().toMatchTypeOf<
        CurrencyFor<NativeChainId, Metadata>
      >()
    })

    it('should be assignable to CurrencyFor for a generic native chain id', () => {
      // Regression guard: this only holds because CurrencyFor's branch order
      // matches NativeFor's, letting TypeScript relate the two conditional
      // types for an unresolved generic `T`. Concrete-type checks above pass
      // regardless of order, so they don't cover this case. The constraint
      // `A extends B` fails to compile if NativeFor<T> is not assignable to
      // CurrencyFor<T>.
      type AssertAssignable<_A extends B, B> = true
      type _Guard<T extends NativeChainId> = AssertAssignable<
        NativeFor<T, Metadata>,
        CurrencyFor<T, Metadata>
      >

      expectTypeOf<_Guard<NativeChainId>>().toEqualTypeOf<true>()
    })

    it('should reject token-only chain families', () => {
      type NativeForMvm = NativeFor<
        // @ts-expect-error MVM is intentionally excluded from NativeChainId.
        MvmChainId,
        Metadata
      >
      type NativeForStellar = NativeFor<
        // @ts-expect-error Stellar is intentionally excluded from NativeChainId.
        StellarChainId,
        Metadata
      >

      expectTypeOf<NativeForMvm>().toEqualTypeOf<never>()
      expectTypeOf<NativeForStellar>().toEqualTypeOf<never>()
    })
  })

  describe('IDFor', () => {
    it('should return the correct id type for SVM chains', () => {
      expectTypeOf<IDFor<SvmChainId>>().toEqualTypeOf<SvmID>()
      expectTypeOf<IDFor<SvmChainId, true>>().toEqualTypeOf<SvmID<true>>()
    })

    it('should return the correct id type for Stellar chains', () => {
      expectTypeOf<IDFor<StellarChainId>>().toEqualTypeOf<StellarID>()
      expectTypeOf<IDFor<StellarChainId, true>>().toEqualTypeOf<
        StellarID<true>
      >()
    })

    it('should use Stellar addresses in Stellar ids', () => {
      expectTypeOf<StellarID>().toEqualTypeOf<`${StellarChainId}:${StellarAddress}`>()
      expectTypeOf<StellarID<true>>().toEqualTypeOf<
        `${StellarChainId}:${StellarAddress}` | `${StellarChainId}:NATIVE`
      >()
    })
  })
})
