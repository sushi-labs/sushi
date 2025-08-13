import { formatUnits, parseUnits } from 'viem/utils'
import * as z from 'zod'
import { numberToFixed } from '../format/number.js'
import { Fraction } from '../math/fraction.js'
import type { BigintIsh } from '../types/bigintish.js'
import type { Currency } from './currency.js'
import type {
  SerializedCurrency,
  SerializedCurrencySchema,
} from './serialized-currency.js'

export type SerializedAmount<TCurrency extends SerializedCurrency> = {
  currency: TCurrency
  amount: string
}

/**
 * Represents an amount of a particular currency.
 */
export class Amount<TCurrency extends Currency = Currency> {
  /** The currency of this amount */
  public readonly currency: TCurrency

  /** The raw integer amount */
  public readonly amount: bigint

  private static readonly SCALE_DECIMALS = 27
  private static readonly SCALE = 10n ** BigInt(Amount.SCALE_DECIMALS)

  constructor(currency: TCurrency, amount: BigintIsh) {
    this.currency = currency
    this.amount = BigInt(amount)
  }

  /**
   * Creates an Amount from a human-readable value, e.g. "1.5".
   */
  public static fromHuman<TCurrency extends Currency>(
    currency: TCurrency,
    human: bigint | number | string,
  ): Amount<TCurrency> {
    const amt = parseUnits(String(human), currency.decimals)
    return new Amount(currency, amt)
  }

  /**
   * Wraps the amount's currency into a Token.
   */
  public wrap() {
    return new Amount(
      this.currency.wrap() as ReturnType<TCurrency['wrap']>,
      this.amount,
    )
  }

  private static getRawAmount<TCurrency extends Currency>(
    _ref: Amount<TCurrency>,
    other: Amount | bigint | string,
  ): bigint {
    if (other instanceof Amount) {
      return other.amount
    }
    return BigInt(other)
  }

  /**
   * Adds another Amount or raw value.
   */
  public add(other: Amount | Fraction | bigint | string): Amount<TCurrency> {
    let add: bigint

    if (other instanceof Fraction) {
      add = (other.numerator * Amount.SCALE) / other.denominator / Amount.SCALE
    } else {
      add = Amount.getRawAmount(this, other)
    }

    return new Amount(this.currency, this.amount + add)
  }

  /**
   * Adds a human-readable value, e.g. "0.5".
   */
  public addHuman(other: number | string): Amount<TCurrency> {
    const addend = parseUnits(String(other), this.currency.decimals)
    return new Amount(this.currency, this.amount + addend)
  }

  /**
   * Subtracts another Amount or raw value.
   */
  public sub(other: Amount | Fraction | bigint | string): Amount<TCurrency> {
    let sub: bigint

    if (other instanceof Fraction) {
      sub = (other.numerator * Amount.SCALE) / other.denominator / Amount.SCALE
    } else {
      sub = Amount.getRawAmount(this, other)
    }

    return new Amount(this.currency, this.amount - sub)
  }

  /**
   * Subtracts a human-readable value, e.g. "0.5".
   */
  public subHuman(other: number | string): Amount<TCurrency> {
    const sub = parseUnits(String(other), this.currency.decimals)
    return new Amount(this.currency, this.amount - sub)
  }

  /**
   * Multiplies this amount by another amount or raw value.
   */
  public mul(other: Amount | Fraction | bigint | string): Amount<TCurrency> {
    if (other instanceof Fraction) {
      return new Amount(
        this.currency,
        (this.amount * other.numerator) / other.denominator,
      )
    }

    const mul = Amount.getRawAmount(this, other)
    return new Amount(this.currency, this.amount * mul)
  }

  /**
   * Multiplies this amount by a human-readable multiplier.
   */
  public mulHuman(other: bigint | number | string): Amount<TCurrency> {
    const mul = parseUnits(String(other), Amount.SCALE_DECIMALS)
    const result = (this.amount * mul) / Amount.SCALE
    return new Amount(this.currency, result)
  }

  /**
   * Divides this amount by a divisor.
   * @throws Error if divisor is zero.
   * @returns a new Amount with the result.
   */
  public div(divisor: bigint | number | string): Amount<TCurrency> {
    const d = parseUnits(String(divisor), Amount.SCALE_DECIMALS)
    if (d === 0n) throw new Error('Cannot divide by zero')
    const result = (this.amount * Amount.SCALE) / d
    return new Amount(this.currency, result)
  }

  /**
   * Divides this amount by another Amount or raw value.
   * @returns a {@link Fraction} for a precise fractional result.
   */
  public divToFraction(other: Amount | Fraction | bigint | string): Fraction {
    if (other instanceof Fraction) {
      return new Fraction({
        numerator: this.amount * other.denominator,
        denominator: other.numerator,
      })
    }

    const div = Amount.getRawAmount(this, other)
    return new Fraction({ numerator: this.amount, denominator: div })
  }

  /**
   * Returns true if this amount > other.
   */
  public gt(other: Amount | bigint | string): boolean {
    const cmp = Amount.getRawAmount(this, other)
    return this.amount > cmp
  }

  /**
   * Returns true if this amount >= other.
   */
  public gte(other: Amount | bigint | string): boolean {
    const cmp = Amount.getRawAmount(this, other)
    return this.amount >= cmp
  }

  /**
   * Returns true if this amount < other.
   */
  public lt(other: Amount | bigint | string): boolean {
    const cmp = Amount.getRawAmount(this, other)
    return this.amount < cmp
  }

  /**
   * Returns true if this amount <= other.
   */
  public lte(other: Amount | bigint | string): boolean {
    const cmp = Amount.getRawAmount(this, other)
    return this.amount <= cmp
  }

  /**
   * Returns true if this amount == other.
   */
  public eq(other: Amount | bigint | string): boolean {
    const cmp = Amount.getRawAmount(this, other)
    return this.amount === cmp
  }

  public toJSON(): SerializedAmount<SerializedCurrency> {
    return {
      currency: this.currency.toJSON(),
      amount: this.amount.toString(),
    } as const
  }

  /**
   * @param args.maxFixed - The maximum number of fixed decimal places to display, only if relevant, eg. "0" for 0, "1.23" for 1.23, etc.
   * @param args.fixed - The number of fixed decimal places to display, always, eg. "0.00" for 0, "1.23" for 1.23, etc.
   * @returns Formatted string representation of the amount
   */
  public toString(
    args: Parameters<typeof numberToFixed>[1] = {
      maxFixed: this.currency.decimals,
    },
  ): string {
    const str = formatUnits(this.amount, this.currency.decimals)
    return numberToFixed(str, args)
  }

  public toSignificant(significantDigits = 5): string {
    return this.toString({
      significant: significantDigits,
    })
  }
}

export function serializedAmountSchema<
  TSchema extends SerializedCurrencySchema,
>(currencySchema: TSchema) {
  return z.object({
    currency: currencySchema,
    amount: z.string(),
  })
}
