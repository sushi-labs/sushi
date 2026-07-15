import { Fraction } from '../math/fraction.js'
import type { BigintIsh } from '../types/bigintish.js'
import { Amount } from './amount.js'
import type { AnyCurrency } from './currency.js'

export class Price<
  TBase extends AnyCurrency,
  TQuote extends AnyCurrency,
> extends Fraction {
  public readonly base: TBase
  public readonly quote: TQuote

  /**
   * Creates a Price from a human-readable quote-per-base value, e.g. "1.5".
   */
  public static fromHuman<
    TBase extends AnyCurrency,
    TQuote extends AnyCurrency,
  >(base: TBase, quote: TQuote, value: string): Price<TBase, TQuote> {
    if (!value.match(/^\d*\.?\d+$/)) {
      throw new Error(`Invalid price: ${value}`)
    }

    const [whole = '', fraction = ''] = value.split('.')
    const decimalScale = 10n ** BigInt(fraction.length)
    const valueWithoutDecimals = BigInt(`${whole}${fraction}`)

    return new Price({
      base,
      quote,
      numerator: valueWithoutDecimals * 10n ** BigInt(quote.decimals),
      denominator: decimalScale * 10n ** BigInt(base.decimals),
    })
  }

  /**
   * Tries to create a Price from a human-readable quote-per-base value.
   */
  public static tryFromHuman<
    TBase extends AnyCurrency,
    TQuote extends AnyCurrency,
  >(
    base: TBase,
    quote: TQuote,
    value: string,
  ): Price<TBase, TQuote> | undefined {
    try {
      return Price.fromHuman(base, quote, value)
    } catch {
      return undefined
    }
  }

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
      super({ numerator: quoteAmount.amount, denominator: baseAmount.amount })

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

  public override toString(args: Parameters<Fraction['toString']>[0]): string {
    return super.mul(this.scalar).toString(args)
  }

  public override toSignificant(significantDigits = 5): string {
    return this.toString({
      significant: significantDigits,
    })
  }
}
