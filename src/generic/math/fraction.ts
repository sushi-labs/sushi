import invariant from 'tiny-invariant'
import type { numberToFixed } from '../format/number.js'
import type { BigintIsh } from '../types/bigintish.js'

export class Fraction {
  public readonly numerator: bigint
  public readonly denominator: bigint

  public constructor(
    arg: { numerator: BigintIsh; denominator?: BigintIsh } | number,
  ) {
    if (typeof arg === 'number') {
      invariant(
        Number.isInteger(arg) && arg >= 0,
        'Fraction must be a non-negative integer',
      )
      this.numerator = BigInt(arg)
      this.denominator = 1n
      return
    }

    this.numerator = BigInt(arg.numerator)
    this.denominator = BigInt(arg.denominator ?? 1n)
  }

  public get quotient(): bigint {
    return this.numerator / this.denominator
  }

  public get remainder(): bigint {
    return this.numerator % this.denominator
  }

  public invert(): Fraction {
    invariant(
      this.numerator !== 0n,
      'Cannot invert a fraction with a numerator of 0',
    )

    return new Fraction({
      numerator: this.denominator,
      denominator: this.numerator,
    })
  }

  public add(other: Fraction | BigintIsh): Fraction {
    if (other instanceof Fraction) {
      return new Fraction({
        numerator:
          this.numerator * other.denominator +
          other.numerator * this.denominator,
        denominator: this.denominator * other.denominator,
      })
    }

    return new Fraction({
      numerator: this.numerator + this.denominator * BigInt(other),
      denominator: this.denominator,
    })
  }

  public sub(other: Fraction | BigintIsh): Fraction {
    if (other instanceof Fraction) {
      return new Fraction({
        numerator:
          this.numerator * other.denominator -
          other.numerator * this.denominator,
        denominator: this.denominator * other.denominator,
      })
    }

    return new Fraction({
      numerator: this.numerator - this.denominator * BigInt(other),
      denominator: this.denominator,
    })
  }

  public mul(other: Fraction | BigintIsh): Fraction {
    if (other instanceof Fraction) {
      return new Fraction({
        numerator: this.numerator * other.numerator,
        denominator: this.denominator * other.denominator,
      })
    }

    return new Fraction({
      numerator: this.numerator * BigInt(other),
      denominator: this.denominator,
    })
  }

  public div(other: Fraction | BigintIsh): Fraction {
    if (other instanceof Fraction) {
      return new Fraction({
        numerator: this.numerator * other.denominator,
        denominator: this.denominator * other.numerator,
      })
    }

    return new Fraction({
      numerator: this.numerator,
      denominator: this.denominator * BigInt(other),
    })
  }

  private compare(
    other: Fraction | BigintIsh,
    type: '<' | '<=' | '=' | '>=' | '>' | '!=',
  ): boolean {
    let a
    let b

    if (other instanceof Fraction) {
      a = this.numerator * other.denominator
      b = other.numerator * this.denominator
    } else {
      a = this.numerator
      b = BigInt(other) * this.denominator
    }

    switch (type) {
      case '<':
        return a < b
      case '<=':
        return a <= b
      case '=':
        return a === b
      case '>=':
        return a >= b
      case '>':
        return a > b
      case '!=':
        return a !== b
      default:
        throw new Error(`Invalid comparison type: ${type}`)
    }
  }

  public lt(other: Fraction | BigintIsh): boolean {
    return this.compare(other, '<')
  }

  public lte(other: Fraction | BigintIsh): boolean {
    return this.compare(other, '<=')
  }

  public eq(other: Fraction | BigintIsh): boolean {
    return this.compare(other, '=')
  }

  public gte(other: Fraction | BigintIsh): boolean {
    return this.compare(other, '>=')
  }

  public gt(other: Fraction | BigintIsh): boolean {
    return this.compare(other, '>')
  }

  public neq(other: Fraction | BigintIsh): boolean {
    return this.compare(other, '!=')
  }

  public toNumber(): number {
    return Number(this.numerator) / Number(this.denominator)
  }

  private formatDecimal(
    decimalPlaces: number,
    { round, trim }: { round: boolean; trim: boolean },
  ): string {
    invariant(
      Number.isSafeInteger(decimalPlaces),
      'Decimal places must be a safe integer',
    )
    invariant(this.denominator !== 0n, 'Cannot format a fraction by zero')

    const negative = this.numerator < 0n !== this.denominator < 0n
    const numerator = this.numerator < 0n ? -this.numerator : this.numerator
    const denominator =
      this.denominator < 0n ? -this.denominator : this.denominator

    const scale = 10n ** BigInt(Math.abs(decimalPlaces))
    const scaledDenominator =
      decimalPlaces >= 0 ? denominator : denominator * scale
    const scaledNumerator = decimalPlaces >= 0 ? numerator * scale : numerator

    let scaledValue = scaledNumerator / scaledDenominator
    const remainder = scaledNumerator % scaledDenominator
    if (round && remainder * 2n >= scaledDenominator) {
      scaledValue += 1n
    }

    let integerPart: string
    let decimalPart = ''
    if (decimalPlaces > 0) {
      const value = scaledValue.toString().padStart(decimalPlaces + 1, '0')
      integerPart = value.slice(0, -decimalPlaces)
      decimalPart = value.slice(-decimalPlaces)
    } else {
      integerPart = (scaledValue * scale).toString()
    }

    if (trim) {
      decimalPart = decimalPart.replace(/0+$/, '')
    }

    return `${negative ? '-' : ''}${integerPart}${
      decimalPart ? `.${decimalPart}` : ''
    }`
  }

  private getDecimalExponent(): number {
    const numerator = this.numerator < 0n ? -this.numerator : this.numerator
    const denominator =
      this.denominator < 0n ? -this.denominator : this.denominator

    invariant(numerator !== 0n, 'Cannot get the decimal exponent of zero')
    invariant(denominator !== 0n, 'Cannot format a fraction by zero')

    let exponent = numerator.toString().length - denominator.toString().length

    if (
      (exponent >= 0 && numerator < denominator * 10n ** BigInt(exponent)) ||
      (exponent < 0 && numerator * 10n ** BigInt(-exponent) < denominator)
    ) {
      exponent -= 1
    }

    return exponent
  }

  public toString(args: Parameters<typeof numberToFixed>[1]): string {
    if ('fixed' in args) {
      invariant(
        Number.isSafeInteger(args.fixed) && args.fixed >= 0,
        'Fixed digits must be a non-negative safe integer',
      )
      return this.formatDecimal(args.fixed, { round: true, trim: false })
    }

    if ('maxFixed' in args) {
      invariant(
        Number.isSafeInteger(args.maxFixed) && args.maxFixed >= 0,
        'Maximum fixed digits must be a non-negative safe integer',
      )
      return this.formatDecimal(args.maxFixed, { round: false, trim: true })
    }

    if ('significant' in args) {
      invariant(
        Number.isSafeInteger(args.significant) && args.significant > 0,
        'Significant digits must be a positive safe integer',
      )
      invariant(this.denominator !== 0n, 'Cannot format a fraction by zero')

      if (this.numerator === 0n) return '0'

      const decimalPlaces = args.significant - this.getDecimalExponent() - 1
      return this.formatDecimal(decimalPlaces, { round: true, trim: true })
    }

    throw new Error('Invalid arguments for Fraction.toString')
  }

  public toSignificant(significantDigits: number): string {
    return this.toString({ significant: significantDigits })
  }

  public toJSON() {
    return {
      n: this.numerator.toString(),
      d: this.denominator.toString(),
    }
  }

  /**
   * Helper method for converting any super class back to a fraction
   */
  public get asFraction(): Fraction {
    return new Fraction({
      numerator: this.numerator,
      denominator: this.denominator,
    })
  }
}
