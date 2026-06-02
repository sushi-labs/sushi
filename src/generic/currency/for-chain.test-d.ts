import { describe, expectTypeOf, it } from 'vitest'
import { EvmChainId } from '../../evm/chain/chains.js'
import type { EvmNative } from '../../evm/currency/native.js'
import type {
  EvmAddress,
  EvmToken,
  EvmTokenOrigin,
} from '../../evm/currency/token.js'
import { MvmChainId } from '../../mvm/chain/chains.js'
import type { MvmAddress, MvmToken } from '../../mvm/currency/token.js'
import type { StellarContractAddress } from '../../stellar/address.js'
import { StellarChainId } from '../../stellar/chain/chains.js'
import type { StellarToken } from '../../stellar/currency/token.js'
import { SvmChainId } from '../../svm/chain/chains.js'
import type { SvmNative } from '../../svm/currency/native.js'
import {
  type SvmAddress,
  type SvmToken,
  svmAddress,
} from '../../svm/currency/token.js'
import type { NativeChainId } from '../types/for-chain.js'
import {
  getNativeFor,
  getTokenFor,
  type TokenConstructorDataFor,
} from './for-chain.js'

describe('generic/currency/for-chain.ts types', () => {
  type Metadata = {
    coingeckoId: string
    verified: boolean
  }

  describe('getNativeFor', () => {
    it('returns the native currency class for each supported native chain family', () => {
      const metadata: Metadata = { coingeckoId: 'ethereum', verified: true }

      expectTypeOf(getNativeFor(EvmChainId.ETHEREUM, metadata)).toEqualTypeOf<
        EvmNative<Metadata>
      >()
      expectTypeOf(getNativeFor(SvmChainId.SOLANA, metadata)).toEqualTypeOf<
        SvmNative<Metadata>
      >()
    })

    it('returns a native union for native chain id unions', () => {
      const chainId = {} as NativeChainId
      const metadata: Metadata = { coingeckoId: 'native', verified: true }

      expectTypeOf(getNativeFor(chainId, metadata)).toEqualTypeOf<
        EvmNative<Metadata> | SvmNative<Metadata>
      >()
    })

    it('rejects chain families without native currency classes', () => {
      // @ts-expect-error MVM currently models currencies as tokens only.
      getNativeFor(MvmChainId.APTOS, {})

      // @ts-expect-error Stellar currently models currencies as tokens only.
      getNativeFor(StellarChainId.STELLAR, {})
    })
  })

  describe('TokenConstructorDataFor', () => {
    it('matches EVM token constructor data without chainId', () => {
      expectTypeOf<
        TokenConstructorDataFor<EvmChainId, Metadata>
      >().toMatchTypeOf<{
        chainId?: EvmChainId
        address: EvmAddress
        symbol: string
        name: string
        decimals: number
        metadata?: Metadata
        origin?: EvmTokenOrigin | undefined
      }>()

      const data = {
        address: '0x1234567890abcdef1234567890abcdef12345678',
        symbol: 'TEST',
        name: 'Test Token',
        decimals: 18,
        metadata: { coingeckoId: 'test-token', verified: true },
      } satisfies TokenConstructorDataFor<EvmChainId, Metadata>

      expectTypeOf(data.metadata).toMatchTypeOf<Metadata>()
    })

    it('matches MVM token constructor data without EVM/SVM/Stellar-only fields', () => {
      const data = {
        address: '0x1::aptos_coin::AptosCoin',
        symbol: 'APT',
        name: 'Aptos Coin',
        decimals: 8,
      } satisfies TokenConstructorDataFor<MvmChainId>

      expectTypeOf(data.address).toMatchTypeOf<MvmAddress>()

      const dataWithOrigin = {
        address: '0x1::aptos_coin::AptosCoin',
        symbol: 'APT',
        name: 'Aptos Coin',
        decimals: 8,
        // @ts-expect-error origin is not part of MVM token constructor data.
        origin: 'native',
      } satisfies TokenConstructorDataFor<MvmChainId>

      void dataWithOrigin
    })

    it('matches SVM token constructor data and preserves branded addresses', () => {
      const data = {
        address: svmAddress('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'),
        symbol: 'USDC',
        name: 'USD Coin',
        decimals: 6,
        metadata: { coingeckoId: 'usd-coin', verified: true },
      } satisfies TokenConstructorDataFor<SvmChainId, Metadata>

      expectTypeOf(data.address).toMatchTypeOf<SvmAddress>()
      expectTypeOf(data.metadata).toMatchTypeOf<Metadata>()
    })

    it('matches Stellar token constructor data including issuer and origin', () => {
      const data = {
        address: 'CAS3J7GYLGXMF6TDJBBYYSE3HQ6BBSMLNUQ34T6TZMYMW2EVH34XOWMA',
        issuer: 'GDMTVHLWJTHSUDMZVVMXXH6VJHA2ZV3HNG5LYNAZ6RTWB7GISM6PGTUV',
        symbol: 'XLM',
        name: 'XLM',
        decimals: 7,
        origin: 'stellar.org',
      } satisfies TokenConstructorDataFor<StellarChainId>

      expectTypeOf(data.address).toMatchTypeOf<StellarContractAddress>()
      expectTypeOf(data.origin).toMatchTypeOf<string>()
    })

    it('accepts chainId for compatibility', () => {
      const dataWithChainId = {
        address: '0x1234567890abcdef1234567890abcdef12345678',
        symbol: 'TEST',
        name: 'Test Token',
        decimals: 18,
        chainId: EvmChainId.ETHEREUM,
      } satisfies TokenConstructorDataFor<EvmChainId>

      void dataWithChainId
    })
  })

  describe('getTokenFor', () => {
    it('returns the token class selected by the chain id', () => {
      expectTypeOf(
        getTokenFor(EvmChainId.ETHEREUM, {
          chainId: EvmChainId.POLYGON,
          address: '0x1234567890abcdef1234567890abcdef12345678',
          symbol: 'TEST',
          name: 'Test Token',
          decimals: 18,
          metadata: { coingeckoId: 'test-token', verified: true },
        }),
      ).toEqualTypeOf<EvmToken<Metadata>>()

      expectTypeOf(
        getTokenFor(MvmChainId.APTOS, {
          address: '0x1::aptos_coin::AptosCoin',
          symbol: 'APT',
          name: 'Aptos Coin',
          decimals: 8,
        }),
      ).toEqualTypeOf<MvmToken<Record<string, unknown>>>()

      expectTypeOf(
        getTokenFor(SvmChainId.SOLANA, {
          address: svmAddress('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'),
          symbol: 'USDC',
          name: 'USD Coin',
          decimals: 6,
          metadata: { coingeckoId: 'usd-coin', verified: true },
        }),
      ).toEqualTypeOf<SvmToken<Metadata>>()

      expectTypeOf(
        getTokenFor(StellarChainId.STELLAR, {
          address: 'CAS3J7GYLGXMF6TDJBBYYSE3HQ6BBSMLNUQ34T6TZMYMW2EVH34XOWMA',
          symbol: 'XLM',
          name: 'XLM',
          decimals: 7,
        }),
      ).toEqualTypeOf<StellarToken<Record<string, unknown>>>()
    })

    it('returns a token union for generic chain id unions', () => {
      const chainId = {} as EvmChainId | SvmChainId
      const data = {} as TokenConstructorDataFor<
        EvmChainId | SvmChainId,
        Metadata
      >

      expectTypeOf(getTokenFor(chainId, data)).toEqualTypeOf<
        EvmToken<Metadata> | SvmToken<Metadata>
      >()
    })

    it('rejects constructor data for a different chain family', () => {
      getTokenFor(SvmChainId.SOLANA, {
        // @ts-expect-error SVM token data requires an SVM address.
        address: '0x1234567890abcdef1234567890abcdef12345678',
        symbol: 'TEST',
        name: 'Test Token',
        decimals: 18,
      })

      getTokenFor(MvmChainId.APTOS, {
        address: '0x1::aptos_coin::AptosCoin',
        symbol: 'APT',
        name: 'Aptos Coin',
        decimals: 8,
        // @ts-expect-error issuer is Stellar-specific token data.
        issuer: 'GDMTVHLWJTHSUDMZVVMXXH6VJHA2ZV3HNG5LYNAZ6RTWB7GISM6PGTUV',
      })
    })
  })
})
