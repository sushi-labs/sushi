import invariant from 'tiny-invariant'
import type { BigintIsh } from '~generic/types/bigintish.js'

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

  public toSignificant(significantDigits: number): string {
    return this.toNumber().toPrecision(significantDigits)
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
