import { describe, expect, it } from 'vitest'
import { mvmAddress } from './zod.js'

describe('mvmAddress', () => {
  it('accepts Move coin-type addresses', () => {
    expect(mvmAddress().parse('0x1::aptos_coin::AptosCoin')).toBe(
      '0x1::aptos_coin::AptosCoin',
    )
  })

  it.each([
    '',
    '0x1',
    '0x1::coin',
    '0x1::coin::',
    ' 0x1::coin::Coin',
  ])('rejects %j', (address) =>
    expect(() => mvmAddress().parse(address)).toThrow())
})
