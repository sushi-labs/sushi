import { describe, expectTypeOf, it } from 'vitest'
import { subtractSlippage } from '../utils/subtract-slippage.js'
import { Amount } from './amount.js'
import { BaseCurrency, type Currency } from './currency.js'
import { Price } from './price.js'

type SerializedPoints = Readonly<{
  type: 'points'
  chainId: 'rewards'
  id: 'rewards:POINTS'
}>

class PointsCurrency extends BaseCurrency<
  'rewards',
  Record<string, never>,
  'points',
  SerializedPoints
> {
  override readonly type = 'points' as const
  override readonly isNative = false as const
  override readonly isToken = false as const
  override readonly id = 'rewards:POINTS' as const

  public override wrap(): PointsCurrency {
    return this
  }

  public override toJSON(): SerializedPoints {
    return { type: this.type, chainId: this.chainId, id: this.id }
  }
}

declare const points: PointsCurrency

describe('external currency extension types', () => {
  it('preserves external currency and serialization types', () => {
    const amount = new Amount(points, 1n)

    expectTypeOf(amount).toEqualTypeOf<Amount<PointsCurrency>>()
    expectTypeOf(amount.toJSON().currency).toEqualTypeOf<SerializedPoints>()
    expectTypeOf<PointsCurrency>().not.toMatchTypeOf<Currency>()

    expectTypeOf(amount.wrap()).toEqualTypeOf<Amount<PointsCurrency>>()
    expectTypeOf(Price.fromHuman(points, points, '1')).toEqualTypeOf<
      Price<PointsCurrency, PointsCurrency>
    >()
    expectTypeOf(subtractSlippage(amount, 0.1)).toEqualTypeOf<
      Amount<PointsCurrency>
    >()
  })
})
