import { describe, expect, expectTypeOf, it } from 'vitest'
import { EvmChainId } from '../../evm/chain/chains.js'
import { EvmNative } from '../../evm/currency/native.js'
import { EvmToken } from '../../evm/currency/token.js'
import { MvmChainId } from '../../mvm/chain/chains.js'
import { MvmToken } from '../../mvm/currency/token.js'
import { StellarChainId } from '../../stellar/chain/chains.js'
import { StellarToken } from '../../stellar/currency/token.js'
import { SvmChainId } from '../../svm/chain/chains.js'
import { SvmNative } from '../../svm/currency/native.js'
import { SvmToken, svmAddress } from '../../svm/currency/token.js'
import { getNativeFor, getTokenFor } from './for-chain.js'

describe('generic/currency/for-chain.ts', () => {
  describe('getNativeFor', () => {
    it('creates EVM native currencies with metadata', () => {
      type Metadata = { verified: boolean }
      const metadata: Metadata = { verified: true }

      const native = getNativeFor(EvmChainId.ETHEREUM, metadata)

      expect(native).toBeInstanceOf(EvmNative)
      expect(native.chainId).toBe(EvmChainId.ETHEREUM)
      expect(native.metadata).toBe(metadata)
      expectTypeOf(native).toEqualTypeOf<EvmNative<Metadata>>()
    })

    it('creates SVM native currencies with metadata', () => {
      type Metadata = { coingeckoId: string }
      const metadata: Metadata = { coingeckoId: 'solana' }

      const native = getNativeFor(SvmChainId.SOLANA, metadata)

      expect(native).toBeInstanceOf(SvmNative)
      expect(native.chainId).toBe(SvmChainId.SOLANA)
      expect(native.metadata).toBe(metadata)
      expectTypeOf(native).toEqualTypeOf<SvmNative<Metadata>>()
    })
  })

  describe('getTokenFor', () => {
    it('creates EVM tokens from constructor data', () => {
      type Metadata = { logoUrl: string }
      const metadata: Metadata = { logoUrl: 'https://example.com/token.png' }

      const token = getTokenFor(EvmChainId.ETHEREUM, {
        chainId: EvmChainId.POLYGON,
        address: '0x1234567890abcdef1234567890abcdef12345678',
        symbol: 'TEST',
        name: 'Test Token',
        decimals: 18,
        metadata,
      })

      expect(token).toBeInstanceOf(EvmToken)
      expect(token.chainId).toBe(EvmChainId.ETHEREUM)
      expect(token.metadata).toBe(metadata)
      expectTypeOf(token).toEqualTypeOf<EvmToken<Metadata>>()
    })

    it('creates MVM tokens from constructor data', () => {
      const token = getTokenFor(MvmChainId.APTOS, {
        address: '0x1::aptos_coin::AptosCoin',
        symbol: 'APT',
        name: 'Aptos Coin',
        decimals: 8,
      })

      expect(token).toBeInstanceOf(MvmToken)
      expect(token.chainId).toBe(MvmChainId.APTOS)
      expectTypeOf(token).toEqualTypeOf<MvmToken<Record<string, unknown>>>()
    })

    it('creates SVM tokens from constructor data', () => {
      type Metadata = { tags: string[] }
      const metadata: Metadata = { tags: ['stablecoin'] }

      const token = getTokenFor(SvmChainId.SOLANA, {
        address: svmAddress('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'),
        symbol: 'USDC',
        name: 'USD Coin',
        decimals: 6,
        metadata,
      })

      expect(token).toBeInstanceOf(SvmToken)
      expect(token.chainId).toBe(SvmChainId.SOLANA)
      expect(token.metadata).toBe(metadata)
      expectTypeOf(token).toEqualTypeOf<SvmToken<Metadata>>()
    })

    it('creates Stellar tokens from constructor data', () => {
      const token = getTokenFor(StellarChainId.STELLAR, {
        address: 'CAS3J7GYLGXMF6TDJBBYYSE3HQ6BBSMLNUQ34T6TZMYMW2EVH34XOWMA',
        issuer: 'GDMTVHLWJTHSUDMZVVMXXH6VJHA2ZV3HNG5LYNAZ6RTWB7GISM6PGTUV',
        symbol: 'XLM',
        name: 'XLM',
        decimals: 7,
        origin: 'stellar.org',
      })

      expect(token).toBeInstanceOf(StellarToken)
      expect(token.chainId).toBe(StellarChainId.STELLAR)
      expect(token.origin).toBe('stellar.org')
      expectTypeOf(token).toEqualTypeOf<StellarToken<Record<string, unknown>>>()
    })
  })
})
