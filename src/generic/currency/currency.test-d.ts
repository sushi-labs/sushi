import { it } from 'node:test'
import { describe, expectTypeOf } from 'vitest'
import * as z from 'zod'
import type { EvmChainId } from '~/evm/chain/chains.js'
import type { EvmCurrency } from '~/evm/currency/currency.js'
import type { EvmID } from '~/evm/types/id.js'
import { EvmNative } from '../../evm/currency/native.js'
import {
  type EvmAddress,
  EvmToken,
  type SerializedEvmToken,
  serializedEvmTokenSchema,
} from '../../evm/currency/token.js'
import { MvmToken } from '../../mvm/currency/token.js'
import { TvmNative } from '../../tvm/currency/native.js'
import type { TvmToken } from '../../tvm/currency/token.js'
import { getChainIdAddressFromId } from '../utils/id.js'
import {
  BaseCurrency,
  type Currency,
  type CurrencyMetadata,
} from './currency.js'
import type { Native } from './native.js'
import type { Token } from './token.js'

describe('generic/currency/currency.ts types', () => {
  describe('id', () => {
    it('should return the correct id for EvmNative', () => {
      const evmMockNative = new EvmNative({
        chainId: 1,
        symbol: 'ETH',
        name: 'Ethereum',
        decimals: 18,
      })

      expectTypeOf(evmMockNative.id).toEqualTypeOf<`${EvmChainId}:NATIVE`>()
    })

    it('should return the correct id for EvmToken', () => {
      const evmMockToken = new EvmToken({
        chainId: 1,
        address: '0x1234567890abcdef1234567890abcdef12345678',
        symbol: 'USDT',
        name: 'Tether USD',
        decimals: 6,
      })

      expectTypeOf(
        evmMockToken.id,
      ).toEqualTypeOf<`${EvmChainId}:${EvmAddress}`>()
    })
  })

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

  describe('isNative/isToken', () => {
    it('should correctly narrow the type based on isNative', () => {
      const mockCurrency = {} as Currency

      expectTypeOf(mockCurrency)
        .extract<{ isNative: true }>()
        .toEqualTypeOf<Native>()
      expectTypeOf(mockCurrency)
        .extract<{ isNative: false }>()
        .toEqualTypeOf<Token>()

      const mockEvmCurrency = {} as EvmCurrency

      expectTypeOf(mockEvmCurrency)
        .extract<{ isNative: true }>()
        .toEqualTypeOf<EvmNative>()
      expectTypeOf(mockEvmCurrency)
        .extract<{ isNative: false }>()
        .toEqualTypeOf<EvmToken>()
    })

    it('should correctly narrow the type based on isToken', () => {
      const evmMockCurrency = {} as EvmCurrency

      expectTypeOf(evmMockCurrency)
        .extract<{ isToken: true }>()
        .toEqualTypeOf<EvmToken>()
      expectTypeOf(evmMockCurrency)
        .extract<{ isToken: false }>()
        .toEqualTypeOf<EvmNative>()

      const mockEvmCurrency = {} as EvmCurrency

      expectTypeOf(mockEvmCurrency)
        .extract<{ isToken: true }>()
        .toEqualTypeOf<EvmToken>()
      expectTypeOf(mockEvmCurrency)
        .extract<{ isToken: false }>()
        .toEqualTypeOf<EvmNative>()
    })
  })

  describe('currency type extension', () => {
    type CustomAddress = `${EvmAddress}-${EvmAddress}`
    type SerializedCustomToken = {
      chainId: EvmChainId
      vaultAddress: EvmAddress
      tokenAddress: EvmAddress
      symbol: string
      name: string
      decimals: number
      type: 'vault-token'
    }

    class CustomToken<
        TMetadata extends CurrencyMetadata = Record<string, unknown>,
      >
      extends BaseCurrency<
        EvmChainId,
        TMetadata,
        'vault-token',
        SerializedCustomToken
      >
      implements
        Omit<
          Token<EvmChainId, CustomAddress>,
          'type' | 'isToken' | 'wrap' | 'toJSON'
        >
    {
      override readonly type = 'vault-token'
      override readonly isNative = false
      override readonly isToken = false

      public readonly tokenAddress
      public readonly vaultAddress

      public readonly address

      constructor({
        tokenAddress,
        vaultAddress,
        ...rest
      }: { tokenAddress: EvmAddress; vaultAddress: EvmAddress } & Omit<
        ConstructorParameters<
          typeof Token<EvmChainId, CustomAddress, TMetadata>
        >[0],
        'address'
      >) {
        super({ ...rest })

        this.tokenAddress = tokenAddress.toLowerCase() as EvmAddress
        this.vaultAddress = vaultAddress.toLowerCase() as EvmAddress

        this.address = `${this.vaultAddress}-${this.tokenAddress}` as const
      }

      get id() {
        return `${this.chainId}:${this.vaultAddress}-${this.tokenAddress}` as const
      }

      wrap(): CustomToken<TMetadata> {
        return this
      }

      toJSON(): SerializedCustomToken {
        return {
          chainId: this.chainId,
          vaultAddress: this.vaultAddress,
          tokenAddress: this.tokenAddress,
          symbol: this.symbol,
          name: this.name,
          decimals: this.decimals,
          type: this.type,
        }
      }
    }

    type ExtendedCurrency = CustomToken | EvmNative | EvmToken

    it('should narrow to the correct type', () => {
      const customToken = new CustomToken({
        chainId: 1,
        vaultAddress: '0x1234567890abcdef1234567890abcdef12345678',
        tokenAddress: '0xabcdefabcdefabcdefabcdefabcdefabcdefabcd',
        symbol: 'CTK',
        name: 'Custom Token',
        decimals: 18,
      }) as ExtendedCurrency

      expectTypeOf(customToken)
        .extract<{ type: 'vault-token' }>()
        .toEqualTypeOf<CustomToken>()
    })

    it('should wrap to itself', () => {
      const customToken = new CustomToken({
        chainId: 1,
        vaultAddress: '0x1234567890abcdef1234567890abcdef12345678',
        tokenAddress: '0xabcdefabcdefabcdefabcdefabcdefabcdefabcd',
        symbol: 'CTK',
        name: 'Custom Token',
        decimals: 18,
      })

      expectTypeOf(customToken.wrap()).toEqualTypeOf<CustomToken>()
    })

    it('should wrap to a union if a part of a union', () => {
      const customToken = new CustomToken({
        chainId: 1,
        vaultAddress: '0x1234567890abcdef1234567890abcdef12345678',
        tokenAddress: '0xabcdefabcdefabcdefabcdefabcdefabcdefabcd',
        symbol: 'CTK',
        name: 'Custom Token',
        decimals: 18,
      }) as ExtendedCurrency

      expectTypeOf(customToken.wrap()).toEqualTypeOf<CustomToken | EvmToken>()
    })

    it('should have the correct id', () => {
      const customToken = new CustomToken({
        chainId: 1,
        vaultAddress: '0x1234567890abcdef1234567890abcdef12345678',
        tokenAddress: '0xabcdefabcdefabcdefabcdefabcdefabcdefabcd',
        symbol: 'CTK',
        name: 'Custom Token',
        decimals: 18,
      })

      expectTypeOf(
        customToken.id,
      ).toEqualTypeOf<`${EvmChainId}:${EvmAddress}-${EvmAddress}`>()

      expectTypeOf(getChainIdAddressFromId(customToken.id)).toEqualTypeOf<{
        chainId: EvmChainId
        address: `${EvmAddress}-${EvmAddress}`
      }>()

      const extendedCurrency = customToken as ExtendedCurrency

      expectTypeOf(extendedCurrency.id).toEqualTypeOf<
        `${EvmChainId}:${EvmAddress}-${EvmAddress}` | EvmID<true>
      >()

      expectTypeOf(getChainIdAddressFromId(extendedCurrency.id)).toEqualTypeOf<{
        chainId: EvmChainId
        address: `${EvmAddress}-${EvmAddress}` | EvmAddress | 'NATIVE'
      }>
    })
  })

  describe('serialization', () => {
    describe('SerializedEvmToken', () => {
      it('should have correct type with default metadata', () => {
        type DefaultSerializedEvmToken = SerializedEvmToken

        expectTypeOf<DefaultSerializedEvmToken>().toEqualTypeOf<{
          chainId: EvmChainId
          address: EvmAddress
          symbol: string
          name: string
          decimals: number
          type: 'token'
          metadata: Record<string, unknown>
        }>()
      })

      it('should infer metadata type from toJSON', () => {
        const tokenWithDefaultMetadata = new EvmToken({
          chainId: 1,
          address: '0x1234567890abcdef1234567890abcdef12345678',
          symbol: 'TEST',
          name: 'Test Token',
          decimals: 18,
        })

        expectTypeOf(tokenWithDefaultMetadata.toJSON().metadata).toEqualTypeOf<
          Record<string, unknown>
        >()

        type CustomMetadata = {
          logoUrl?: string
          verified: boolean
        }

        const tokenWithCustomMetadata = new EvmToken<CustomMetadata>({
          chainId: 1,
          address: '0x1234567890abcdef1234567890abcdef12345678',
          symbol: 'TEST',
          name: 'Test Token',
          decimals: 18,
          metadata: {
            logoUrl: 'https://example.com/logo.png',
            verified: true,
          },
        })

        expectTypeOf(
          tokenWithCustomMetadata.toJSON().metadata,
        ).toEqualTypeOf<CustomMetadata>()
      })
    })

    describe('serializedEvmTokenSchema', () => {
      it('should create schema with default metadata', () => {
        const schema = serializedEvmTokenSchema()
        type InferredType = z.infer<typeof schema>

        expectTypeOf<InferredType>().toEqualTypeOf<{
          chainId: EvmChainId
          address: EvmAddress
          symbol: string
          name: string
          decimals: number
          type: 'token'
          metadata: Record<string, unknown>
        }>()
      })

      it('should create schema with custom metadata type', () => {
        const customMetadataSchema = z.object({
          logoUrl: z.string().optional(),
          tags: z.array(z.string()).optional(),
          verified: z.boolean(),
        })

        const schema = serializedEvmTokenSchema({
          metadata: customMetadataSchema,
        })

        type InferredType = z.infer<typeof schema>

        expectTypeOf<InferredType>().toEqualTypeOf<{
          chainId: EvmChainId
          address: EvmAddress
          symbol: string
          name: string
          decimals: number
          type: 'token'
          metadata: {
            logoUrl?: string
            tags?: string[]
            verified: boolean
          }
        }>()
      })

      it('should handle optional metadata parameter', () => {
        const schemaWithoutMetadata = serializedEvmTokenSchema()
        const schemaWithEmptyOptions = serializedEvmTokenSchema({})

        type TypeWithoutMetadata = z.infer<typeof schemaWithoutMetadata>
        type TypeWithEmptyOptions = z.infer<typeof schemaWithEmptyOptions>

        expectTypeOf<TypeWithoutMetadata>().toEqualTypeOf<TypeWithEmptyOptions>()
      })
    })
  })
})
