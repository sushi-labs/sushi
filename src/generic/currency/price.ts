import { Fraction } from '~generic/math/fraction.js'
import type { BigintIsh } from '~generic/types/bigintish.js'
import { numberToFixed } from '../format/number.js'
import { Amount } from './amount.js'
import type { Currency } from './currency.js'

export class Price<
  TBase extends Currency,
  TQuote extends Currency,
> extends Fraction {
  public readonly base: TBase
  public readonly quote: TQuote

  constructor(
    args:
      | {
          base: TBase
          quote: TQuote
          numerator: BigintIsh
          denominator?: BigintIsh
        }
      | { baseAmount: Amount<TBase>; quoteAmount: Amount<TQuote> },
  ) {
    if ('baseAmount' in args && 'quoteAmount' in args) {
      const { baseAmount, quoteAmount } = args
      super({ numerator: baseAmount.amount, denominator: quoteAmount.amount })

      this.base = baseAmount.currency
      this.quote = quoteAmount.currency
      return
    }

    super({ numerator: args.numerator, denominator: args.denominator || 1n })
    this.base = args.base
    this.quote = args.quote
  }

  get scalar(): Fraction {
    return new Fraction({
      numerator: 10n ** BigInt(this.base.decimals),
      denominator: 10n ** BigInt(this.quote.decimals),
    })
  }

  /**
   *
   * @param baseAmount The amount of the base currency to convert
   * @returns The equivalent amount in the quote currency
   */
  public getQuote(baseAmount: Amount<TBase>): Amount<TQuote> {
    const quoteAmount = super.mul(baseAmount.amount).toNumber()
    return new Amount(this.quote, BigInt(Math.floor(quoteAmount)))
  }

  public override invert(): Price<TQuote, TBase> {
    return new Price({
      base: this.quote,
      quote: this.base,
      numerator: this.denominator,
      denominator: this.numerator,
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
