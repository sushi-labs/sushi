import type { Hex } from 'viem'
import { isSameCurrency, type Currency } from './currency.js'
import { parseUnits } from 'viem/utils'

export type Amount<TCurrency extends Currency> = {
  currency: TCurrency
  amount: bigint
}

export function isAmount<TCurrency extends Currency>(value: {
  currency: TCurrency
  amount: unknown
}): value is Amount<TCurrency> {
  return 'amount' in value && typeof (value as any).amount === 'bigint'
}

/**
 *
 * @param currency The currency for which the amount is being created
 * @param _amount The raw amount of the currency, which can be a bigint, hexadecimal string, or decadal string representation.
 * @returns
 */
export function createAmount<TCurrency extends Currency>(
  currency: TCurrency,
  _amount: bigint | Hex | string,
): Amount<TCurrency> {
  const amount = typeof _amount === 'bigint' ? _amount : BigInt(_amount)

  return {
    currency,
    amount,
  }
}

/**
 *
 * @brief Creates an amount from a human-readable number or string representation of the currency amount.
 *
 * @param currency The currency for which the amount is being created
 * @param humanReadableAmount The unscaled amount of the currency, eg. 1.5 or 1000.25
 *
 * @throws {Error}  If the currencies of the amounts do not match.
 */
export function createAmountFromHumanReadable<TCurrency extends Currency>(
  currency: TCurrency,
  humanReadableAmount: bigint | number | string,
): Amount<TCurrency> {
  const amount = parseUnits(String(humanReadableAmount), currency.decimals)
  return createAmount(currency, amount)
}

function getRawAmount(
  amountA: Amount<Currency>,
  amountB: Amount<Currency> | bigint | string,
): bigint {
  if (typeof amountB !== 'object') {
    return BigInt(amountB)
  } else {
    if (!isSameCurrency(amountA.currency, amountB.currency)) {
      throw new Error('Cannot add amounts of different currencies')
    }
    return amountB.amount
  }
}

/**
 *
 * @param amountA The amount to which the other amount will be added.
 * @param amountB The amount to add, which can be an amount, a bigint, hexadecimal string, or decadal string representation of the amount.
 */
export function addAmounts<TCurrency extends Currency>(
  amountA: Amount<TCurrency>,
  amountB: Amount<TCurrency> | bigint | string,
): Amount<TCurrency> {
  const addendB = getRawAmount(amountA, amountB)
  return createAmount(amountA.currency, amountA.amount + addendB)
}

/**
 *
 * @param amountA The amount to which the other amount will be added.
 * @param amountB The amount to add, which can be a human-readable number or string representation, for example "2" or "0.5".
 */
export function addAmountsHumanReadable<TCurrency extends Currency>(
  amountA: Amount<TCurrency>,
  amountB: number | string,
): Amount<TCurrency> {
  const addendB = parseUnits(String(amountB), amountA.currency.decimals)
  return createAmount(amountA.currency, amountA.amount + addendB)
}

/**
 *
 * @param amountA The amount from which to subtract.
 * @param amountB The raw, decimal adjusted amount to subtract.
 *
 * @throws {Error} If the currencies of the amounts do not match.
 */
export function subtractAmounts<TCurrency extends Currency>(
  amountA: Amount<TCurrency>,
  amountB: Amount<TCurrency> | bigint | string,
): Amount<TCurrency> {
  const subtrahendB = getRawAmount(amountA, amountB)
  return createAmount(amountA.currency, amountA.amount - subtrahendB)
}

/**
 *
 * @param amountA The amount from which to subtract.
 * @param amountB The amount to subtract, which can be a human-readable number or string representation, for example "2" or "0.5".
 *
 */
export function subtractAmountsHumanReadable<TCurrency extends Currency>(
  amountA: Amount<TCurrency>,
  amountB: number | string,
): Amount<TCurrency> {
  const subtrahendB = parseUnits(String(amountB), amountA.currency.decimals)
  return createAmount(amountA.currency, amountA.amount - subtrahendB)
}

const SCALE_DECIMALS = 27
const SCALE = 10n ** BigInt(SCALE_DECIMALS)

/**
 *
 * @param amount The amount to multiply.
 * @param multiplier The multiplier, which can be a human-readable number or string representation, for example "2" or "0.5".
 *
 */
export function multiplyAmounts<TCurrency extends Currency>(
  amount: Amount<TCurrency>,
  _multiplier: bigint | number | string,
): Amount<TCurrency> {
  const multiplier = parseUnits(String(_multiplier), SCALE_DECIMALS)
  const result = (amount.amount * multiplier) / SCALE

  return createAmount(amount.currency, result)
}

/**
 *
 * @param amount The amount to divide.
 * @param divisor The divisor, which can be a human-readable number or string representation, for example "2" or "0.5".
 *
 * @throws {Error} If the divisor is zero.
 */
export function divideAmounts<TCurrency extends Currency>(
  amount: Amount<TCurrency>,
  _divisor: bigint | number | string,
): Amount<TCurrency> {
  const divisor = parseUnits(String(_divisor), SCALE_DECIMALS)

  if (divisor === 0n) {
    throw new Error('Cannot divide by zero')
  }

  const result = (amount.amount * SCALE) / divisor

  return createAmount(amount.currency, result)
}

/**
 *
 * @param amountA The left-hand side amount to compare.
 * @param amountB The right-hand side amount to compare, which can be also be a bigint or string representation of the amount.
 *
 * @returns true if amountA is greater than amountB, false otherwise.
 */
export function amountGt<TCurrency extends Currency>(
  amountA: Amount<TCurrency>,
  amountB: Amount<TCurrency> | bigint | string,
): boolean {
  const compareTo = getRawAmount(amountA, amountB)
  return amountA.amount > compareTo
}

/**
 *
 * @param amountA The left-hand side amount to compare.
 * @param amountB The right-hand side amount to compare, which is a human-readable number or string representation of the amount, for example "2" or "0.5".
 *
 * @returns true if amountA is greater than amountB, false otherwise.
 */
export function amountGtHumanReadable<TCurrency extends Currency>(
  amountA: Amount<TCurrency>,
  amountB: number | string,
): boolean {
  const compareTo = parseUnits(String(amountB), amountA.currency.decimals)
  return amountA.amount > compareTo
}

/**
 *
 * @param amountA The left-hand side amount to compare.
 * @param amountB The right-hand side amount to compare, which can be also be a bigint or string representation of the amount.
 *
 * @returns true if amountA is greater than or equal to amountB, false otherwise.
 */
export function amountGte<TCurrency extends Currency>(
  amountA: Amount<TCurrency>,
  amountB: Amount<TCurrency> | bigint | string,
): boolean {
  const compareTo = getRawAmount(amountA, amountB)
  return amountA.amount >= compareTo
}

/**
 *
 * @param amountA The left-hand side amount to compare.
 * @param amountB The right-hand side amount to compare, which is a human-readable number or string representation of the amount, for example "2" or "0.5".
 *
 * @returns true if amountA is greater than or equal to amountB, false otherwise.
 */
export function amountGteHumanReadable<TCurrency extends Currency>(
  amountA: Amount<TCurrency>,
  amountB: number | string,
): boolean {
  const compareTo = parseUnits(String(amountB), amountA.currency.decimals)
  return amountA.amount >= compareTo
}

/**
 *
 * @param amountA The left-hand side amount to compare.
 * @param amountB The right-hand side amount to compare, which can be also be a bigint or string representation of the amount.
 *
 * @returns true if amountA is less than amountB, false otherwise.
 */
export function amountLt<TCurrency extends Currency>(
  amountA: Amount<TCurrency>,
  amountB: Amount<TCurrency> | bigint | string,
): boolean {
  const compareTo = getRawAmount(amountA, amountB)
  return amountA.amount < compareTo
}

/**
 *
 * @param amountA The left-hand side amount to compare.
 * @param amountB The right-hand side amount to compare, which is a human-readable number or string representation of the amount, for example "2" or "0.5".
 *
 * @returns true if amountA is less than amountB, false otherwise.
 */
export function amountLtHumanReadable<TCurrency extends Currency>(
  amountA: Amount<TCurrency>,
  amountB: number | string,
): boolean {
  const compareTo = parseUnits(String(amountB), amountA.currency.decimals)
  return amountA.amount < compareTo
}

/**
 *
 * @param amountA The left-hand side amount to compare.
 * @param amountB The right-hand side amount to compare, which can be also be a bigint or string representation of the amount.
 *
 * @returns true if amountA is less than or equal to amountB, false otherwise.
 */
export function amountLte<TCurrency extends Currency>(
  amountA: Amount<TCurrency>,
  amountB: Amount<TCurrency> | bigint | string,
): boolean {
  const compareTo = getRawAmount(amountA, amountB)
  return amountA.amount <= compareTo
}

/**
 *
 * @param amountA The left-hand side amount to compare.
 * @param amountB The right-hand side amount to compare, which is a human-readable number or string representation of the amount, for example "2" or "0.5".
 *
 * @returns true if amountA is less than or equal to amountB, false otherwise.
 */
export function amountLteHumanReadable<TCurrency extends Currency>(
  amountA: Amount<TCurrency>,
  amountB: number | string,
): boolean {
  const compareTo = parseUnits(String(amountB), amountA.currency.decimals)
  return amountA.amount <= compareTo
}

/**
 *
 * @param amountA The left-hand side amount to compare.
 * @param amountB The right-hand side amount to compare, which can be also be a bigint or string representation of the amount.
 *
 * @returns true if amountA is equal to amountB, false otherwise.
 */
export function amountEq<TCurrency extends Currency>(
  amountA: Amount<TCurrency>,
  amountB: Amount<TCurrency> | bigint | string,
): boolean {
  const compareTo = getRawAmount(amountA, amountB)
  return amountA.amount === compareTo
}
