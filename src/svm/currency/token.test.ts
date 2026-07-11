import { describe, expect, it } from 'vitest'
import { SvmChainId } from '../chain/chains.js'
import { SVM_WNATIVE_ADDRESS } from '../config/tokens/wrapped-native.js'
import { deserializeSvmCurrency } from './deserialize-currency.js'
import { SvmNative } from './native.js'
import { SvmToken, serializedSvmTokenSchema, svmAddress } from './token.js'
import { unwrapSvmToken } from './unwrap-token.js'

const usdcAddress = svmAddress('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v')

describe('SVM currencies', () => {
  const token = new SvmToken({
    chainId: SvmChainId.SOLANA,
    address: usdcAddress,
    symbol: 'USDC',
    name: 'USD Coin',
    decimals: 6,
    metadata: { verified: true },
  })

  it('preserves case-sensitive addresses and wraps to itself', () => {
    expect(token.address).toBe(usdcAddress)
    expect(token.wrap()).toBe(token)
  })

  it('round-trips tokens through JSON, schema, and deserialization', () => {
    const serialized = serializedSvmTokenSchema().parse(token.toJSON())
    const restored = deserializeSvmCurrency(serialized)

    expect(restored).toBeInstanceOf(SvmToken)
    expect(restored).toEqual(token)
  })

  it('wraps native SOL to WSOL and unwraps WSOL', () => {
    const native = SvmNative.fromChainId(SvmChainId.SOLANA)
    const wrapped = native.wrap()

    expect(wrapped.address).toBe(SVM_WNATIVE_ADDRESS[SvmChainId.SOLANA])
    expect(unwrapSvmToken(wrapped)).toEqual(native)
    expect(unwrapSvmToken(token)).toBe(token)
  })

  it('rejects invalid serialized tokens', () => {
    const serialized = token.toJSON()
    expect(() =>
      serializedSvmTokenSchema().parse({ ...serialized, chainId: -1 }),
    ).toThrow()
    expect(() =>
      serializedSvmTokenSchema().parse({ ...serialized, address: 'invalid' }),
    ).toThrow()
    expect(() =>
      serializedSvmTokenSchema().parse({ ...serialized, decimals: 1.5 }),
    ).toThrow()
  })
})
