import { describe, expect, it } from 'vitest'
import { svmAddress } from '../currency/token.js'
import { svmAddressSchema } from './zod.js'

describe('svmAddressSchema', () => {
  const address = svmAddress('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v')

  it('accepts valid Solana addresses', () => {
    expect(svmAddressSchema().parse(address)).toBe(address)
  })

  it.each([
    '',
    '0x1234',
    'not-base58',
    `${address}0`,
    ` ${address}`,
  ])('rejects %j', (value) =>
    expect(() => svmAddressSchema().parse(value)).toThrow())
})
