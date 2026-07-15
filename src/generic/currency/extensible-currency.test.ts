import { describe, expect, it } from 'vitest'
import * as z from 'zod'
import { subtractSlippage } from '../utils/subtract-slippage.js'
import { Amount, serializedAmountSchema } from './amount.js'
import { BaseCurrency } from './currency.js'
import { Price } from './price.js'

type SerializedPointsCurrency = Readonly<{
  type: 'points'
  chainId: 'rewards'
  id: `rewards:${string}`
}>

class PointsCurrency extends BaseCurrency<
  'rewards',
  Record<string, never>,
  'points',
  SerializedPointsCurrency
> {
  override readonly type = 'points' as const
  override readonly isNative = false as const
  override readonly isToken = false as const

  constructor(
    public override readonly id: `rewards:${string}` = 'rewards:POINTS',
  ) {
    super({
      chainId: 'rewards',
      decimals: 0,
      symbol: 'PTS',
      name: 'Reward Points',
    })
  }

  public override wrap(): PointsCurrency {
    return this
  }

  public override toJSON(): SerializedPointsCurrency {
    return { type: this.type, chainId: this.chainId, id: this.id }
  }
}

describe('external currency extension contract', () => {
  const points = new PointsCurrency()

  it('works with Amount without joining the Currency union', () => {
    const amount = new Amount(points, 100n)

    expect(amount.amount).toBe(100n)
    expect(amount.currency).toBe(points)
    expect(amount.wrap().currency).toBe(points)
    expect(amount.toJSON()).toEqual({
      currency: points.toJSON(),
      amount: '100',
    })
  })

  it('uses the currency id for value identity', () => {
    expect(points.isSame(new PointsCurrency('rewards:POINTS'))).toBe(true)
    expect(points.isSame(new PointsCurrency('rewards:OTHER'))).toBe(false)
  })

  it('accepts an external serialized currency schema', () => {
    const schema = serializedAmountSchema(
      z.object({
        type: z.literal('points'),
        chainId: z.literal('rewards'),
        id: z.literal('rewards:POINTS'),
      }),
    )

    expect(schema.parse(new Amount(points, 100n).toJSON()).amount).toBe('100')
  })

  it('works with the remaining generic currency utilities', () => {
    const price = Price.fromHuman(points, points, '1.5')
    const amount = new Amount(points, 100n)

    expect(price.getQuote(amount).amount).toBe(150n)
    expect(subtractSlippage(amount, 0.1).amount).toBe(90n)
  })
})
