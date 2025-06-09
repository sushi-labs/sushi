import { formatUnits, parseUnits } from 'viem/utils'
import type { Currency } from './currency.js'
import * as z from 'zod'
import type { BigintIsh } from '~generic/types/bigintish.js'
import type {
  SerializedCurrency,
  SerializedCurrencySchema,
} from './serialized-currency.js'
import { numberToFixed } from '../format/number.js'

/**
 * Represents an amount of a particular currency.
 */
export class Amount<TCurrency extends Currency> {
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

  private static getRawAmount<TCurrency extends Currency>(
    _ref: Amount<TCurrency>,
    other: Amount<TCurrency> | bigint | string,
  ): bigint {
    if (typeof other !== 'object') {
      return BigInt(other)
    }
    return other.amount
  }

  /**
   * Adds another Amount or raw value.
   */
  public add(other: Amount<TCurrency> | bigint | string): Amount<TCurrency> {
    const addend = Amount.getRawAmount(this, other)
    return new Amount(this.currency, this.amount + addend)
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
  public sub(other: Amount<TCurrency> | bigint | string): Amount<TCurrency> {
    const sub = Amount.getRawAmount(this, other)
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
   * Multiplies this amount by a human-readable multiplier.
   */
  public mulHuman(multiplier: bigint | number | string): Amount<TCurrency> {
    const mul = parseUnits(String(multiplier), Amount.SCALE_DECIMALS)
    const result = (this.amount * mul) / Amount.SCALE
    return new Amount(this.currency, result)
  }

  /**
   * Divides this amount by another Amount or raw value.
   * @returns an object with { numerator, denominator } for precise fractional result.
   */
  public div(other: Amount<TCurrency> | bigint | string): {
    numerator: bigint
    denominator: bigint
  } {
    const div = Amount.getRawAmount(this, other)
    return { numerator: this.amount, denominator: div }
  }

  /**
   * Divides this amount by a human-readable divisor, e.g. "0.5".
   * @throws Error if divisor is zero.
   */
  public divHuman(divisor: bigint | number | string): Amount<TCurrency> {
    const d = parseUnits(String(divisor), Amount.SCALE_DECIMALS)
    if (d === 0n) throw new Error('Cannot divide by zero')
    const result = (this.amount * Amount.SCALE) / d
    return new Amount(this.currency, result)
  }

  /**
   * Returns true if this amount > other.
   */
  public gt(other: Amount<TCurrency> | bigint | string): boolean {
    const cmp = Amount.getRawAmount(this, other)
    return this.amount > cmp
  }

  /**
   * Returns true if this amount >= other.
   */
  public gte(other: Amount<TCurrency> | bigint | string): boolean {
    const cmp = Amount.getRawAmount(this, other)
    return this.amount >= cmp
  }

  /**
   * Returns true if this amount < other.
   */
  public lt(other: Amount<TCurrency> | bigint | string): boolean {
    const cmp = Amount.getRawAmount(this, other)
    return this.amount < cmp
  }

  /**
   * Returns true if this amount <= other.
   */
  public lte(other: Amount<TCurrency> | bigint | string): boolean {
    const cmp = Amount.getRawAmount(this, other)
    return this.amount <= cmp
  }

  /**
   * Returns true if this amount == other.
   */
  public eq(other: Amount<TCurrency> | bigint | string): boolean {
    const cmp = Amount.getRawAmount(this, other)
    return this.amount === cmp
  }

  public toJSON(): SerializedAmount<SerializedCurrency> {
    return {
      currency: this.currency.toJSON(),
      amount: this.amount,
    } as const
  }

  /**
   *
   * @param args.maxFixed - The maximum number of fixed decimal places to display, only if relevant, eg. "0" for 0, "1.23" for 1.23, etc.
   * @param args.fixed - The number of fixed decimal places to display, always, eg. "0.00" for 0, "1.23" for 1.23, etc.
   * @returns
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

type SerializedAmount<TCurrency extends SerializedCurrency> = {
  currency: TCurrency
  amount: bigint
}

export function serializedAmountSchema<
  TSchema extends SerializedCurrencySchema,
>(currencySchema: TSchema) {
  return z.object({
    currency: currencySchema,
    amount: z.bigint(),
  })
}
