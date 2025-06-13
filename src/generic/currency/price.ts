import { Fraction } from '~generic/math/fraction.js'
import type { BigintIsh } from '~generic/types/bigintish.js'
import { numberToFixed } from '../format/number.js'
import type { Currency } from './currency.js'

export class Price<
  TBase extends Currency,
  TQuote extends Currency,
> extends Fraction {
  public readonly base: TBase
  public readonly quote: TQuote

  constructor({
    base,
    quote,
    numerator,
    denominator = 1n,
  }: {
    base: TBase
    quote: TQuote
    numerator: BigintIsh
    denominator?: BigintIsh
  }) {
    super({ numerator, denominator })
    this.base = base
    this.quote = quote
  }

  get scalar(): Fraction {
    return new Fraction({
      numerator: 10n ** BigInt(this.base.decimals),
      denominator: 10n ** BigInt(this.quote.decimals),
    })
  }

  public override toNumber(): number {
    return super.mul(this.scalar).toNumber()
  }

  public override toString(args: Parameters<typeof numberToFixed>[1]): string {
    return numberToFixed(this.toNumber(), args)
  }

  public override toSignificant(significantDigits = 5): string {
    return this.toString({
      significant: significantDigits,
    })
  }
}
