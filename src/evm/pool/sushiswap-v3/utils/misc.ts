import type { EvmCurrency } from '~evm/currency/currency.js'
import type { Price } from '~generic/currency/price.js'

/**
 * Calculate captial efficiency of the given price range
 * @param priceCurrent Current price
 * @param priceLower Lower price boundary
 * @param priceUpper Upper price boundary
 * @returns Capitial efficiency, i.e., using the same amount of cash, the amount of liquidity obtained by a position
 * with the given price range v.s. that obtained by a full-range position.
 */
export function getCapitalEfficiency(
  priceCurrent: Price<EvmCurrency, EvmCurrency>,
  priceLower: Price<EvmCurrency, EvmCurrency>,
  priceUpper: Price<EvmCurrency, EvmCurrency>,
): number {
  const priceBounded = priceCurrent.gt(priceUpper)
    ? priceUpper
    : priceCurrent.lt(priceLower)
      ? priceLower
      : priceCurrent
  const sqrtPBounded = Math.sqrt(priceBounded.toNumber())
  const sqrtPLower = Math.sqrt(priceLower.toNumber())
  const sqrtPUpper = Math.sqrt(priceUpper.toNumber())

  const priceNow = priceCurrent.toNumber()
  const denom =
    priceNow * (1 / sqrtPBounded - 1 / sqrtPUpper) + (sqrtPBounded - sqrtPLower)
  const num = 2 * Math.sqrt(priceNow)
  return num / denom
}

/**
 * Calculate the weights of the two tokens in a position with the given price range in terms of cash value
 * @param priceCurrent Current price
 * @param priceLower Lower price boundary
 * @param priceUpper Upper price boundary
 * @returns [token0's weight, token1's weight] in terms of cash value.
 */
export function getTokenRatio(
  priceCurrent: Price<EvmCurrency, EvmCurrency>,
  priceLower: Price<EvmCurrency, EvmCurrency>,
  priceUpper: Price<EvmCurrency, EvmCurrency>,
): [number, number] {
  if (priceCurrent.gt(priceUpper) || priceCurrent.eq(priceUpper)) return [0, 1]
  if (priceCurrent.lt(priceLower) || priceCurrent.eq(priceLower)) return [1, 0]

  const a = priceLower.asFraction.mul(priceUpper).toNumber()
  const b = priceCurrent.asFraction.mul(priceUpper).toNumber()
  const p = priceCurrent.asFraction.toNumber()

  const w0 = 1 / ((Math.sqrt(a) - Math.sqrt(b)) / (p - Math.sqrt(b)) + 1)
  const w1 = 1 - w0
  return [w0, w1]
}

const MIN_SQRT_PRICE_APPROX = 2 ** -56
const MAX_SQRT_PRICE_APPROX = 2 ** 56

const getPriceLowerWithTokenRatio = (
  priceCurrent: number,
  priceUpper: number,
  weight0: number,
): number => {
  if (priceCurrent >= priceUpper) throw new Error('invalid inputs')

  const z = (1 / weight0 - 1) * priceCurrent
  const sqrtP = Math.sqrt(priceCurrent)
  const sqrtPLower = sqrtP - z * (1 / sqrtP - 1 / Math.sqrt(priceUpper))
  return Math.max(sqrtPLower, MIN_SQRT_PRICE_APPROX) ** 2
}

const getPriceUpperWithTokenRatio = (
  priceCurrent: number,
  priceLower: number,
  weight0: number,
): number => {
  if (priceLower >= priceCurrent) throw new Error('invalid inputs')

  const z = (1 / weight0 - 1) * priceCurrent
  const sqrtP = Math.sqrt(priceCurrent)
  const denom = z - (sqrtP - Math.sqrt(priceLower)) * sqrtP
  if (denom <= 0) return MAX_SQRT_PRICE_APPROX ** 2
  const sqrtUpper = (z * sqrtP) / denom
  return Math.min(sqrtUpper, MAX_SQRT_PRICE_APPROX) ** 2
}

/**
 * Given a price range, we alter the range to fit a desired token weight.
 * Note that the resulted price range has not been snapped to fit tick-spacing.
 */
export const getPriceRangeWithTokenRatio = (
  priceCurrent: number,
  priceLower: number,
  priceUpper: number,
  independentBound: 'LOWER' | 'UPPER',
  weight0: number,
): [number, number] => {
  if (weight0 === 1) {
    return [
      Math.max(priceLower, priceCurrent),
      Math.max(priceUpper, priceCurrent),
    ]
  }
  if (weight0 === 0) {
    return [
      Math.min(priceLower, priceCurrent),
      Math.min(priceUpper, priceCurrent),
    ]
  }

  // flipped
  if (
    weight0 < 1 &&
    priceLower > priceCurrent &&
    independentBound === 'LOWER'
  ) {
    independentBound = 'UPPER'
    priceUpper = priceLower
    priceLower = Number.NaN
  }
  if (
    weight0 > 0 &&
    priceUpper < priceCurrent &&
    independentBound === 'UPPER'
  ) {
    independentBound = 'LOWER'
    priceLower = priceUpper
    priceUpper = Number.NaN
  }

  if (independentBound === 'LOWER') {
    return [
      priceLower,
      getPriceUpperWithTokenRatio(priceCurrent, priceLower, weight0),
    ]
  } else {
    return [
      getPriceLowerWithTokenRatio(priceCurrent, priceUpper, weight0),
      priceUpper,
    ]
  }
}
