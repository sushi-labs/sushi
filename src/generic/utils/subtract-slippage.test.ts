import { describe, expect, it } from 'vitest'
import { Amount } from '../currency/amount.js'
import { Token } from '../currency/token.js'
import { subtractSlippage } from './subtract-slippage.js'

class TestToken extends Token {
  public override toJSON() {
    return {
      chainId: this.chainId,
      address: this.address,
      symbol: this.symbol,
      name: this.name,
      decimals: this.decimals,
    } as any
  }

  public override wrap() {
    return this
  }
}

describe('subtractSlippage', () => {
  const token = new TestToken({
    chainId: 1,
    address: '0x123',
    symbol: 'TEST',
    name: 'Test Token',
    decimals: 18,
  })

  it('should subtract slippage correctly', () => {
    const amount = Amount.fromHuman(token, '100')
    const result = subtractSlippage(amount, 0.1) // 10%
    expect(result.toString()).toBe('90')
  })

  it('should handle 0% slippage', () => {
    const amount = Amount.fromHuman(token, '100')
    const result = subtractSlippage(amount, 0)
    expect(result.amount).toBe(amount.amount)
  })

  it('should handle 100% slippage', () => {
    const amount = Amount.fromHuman(token, '100')
    const result = subtractSlippage(amount, 1)
    expect(result.toString()).toBe('0')
  })

  it('should throw on invalid slippage values', () => {
    const amount = Amount.fromHuman(token, '100')
    expect(() => subtractSlippage(amount, -0.1)).toThrow(
      'Slippage must be between 0 and 1',
    )
    expect(() => subtractSlippage(amount, 1.1)).toThrow(
      'Slippage must be between 0 and 1',
    )
  })

  it('should handle very small amounts', () => {
    const amount = new Amount(token, 1n) // 1 wei
    const result = subtractSlippage(amount, 0.5)
    expect(result.amount).toBe(0n) // rounds down
  })
})
