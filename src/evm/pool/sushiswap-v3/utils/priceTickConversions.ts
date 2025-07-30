import { Price } from '../../../../generic/currency/price.js'
import type { EvmToken } from '../../../currency/token.js'
import { Q192 } from '../internalConstants.js'
import { encodeSqrtRatioX96 } from './encodeSqrtRatioX96.js'
import { TickMath } from './tickMath.js'

/**
 * Returns a price object corresponding to the input tick and the base/quote token
 * Inputs must be tokens because the address order is used to interpret the price represented by the tick
 * @param baseToken the base token of the price
 * @param quoteToken the quote token of the price
 * @param tick the tick for which to return the price
 */
export function tickToPrice(
  baseToken: EvmToken,
  quoteToken: EvmToken,
  tick: number,
): Price<EvmToken, EvmToken> {
  const sqrtRatioX96 = TickMath.getSqrtRatioAtTick(tick)

  const ratioX192 = sqrtRatioX96 * sqrtRatioX96

  return baseToken.sortsBefore(quoteToken)
    ? new Price({
        base: baseToken,
        quote: quoteToken,
        denominator: Q192,
        numerator: ratioX192,
      })
    : new Price({
        base: baseToken,
        quote: quoteToken,
        denominator: ratioX192,
        numerator: Q192,
      })
}

/**
 * Returns the first tick for which the given price is greater than or equal to the tick price
 * @param price for which to return the closest tick that represents a price less than or equal to the input price,
 * i.e. the price of the returned tick is less than or equal to the input price
 */
export function priceToClosestTick(price: Price<EvmToken, EvmToken>): number {
  const sorted = price.base.sortsBefore(price.quote)

  const sqrtRatioX96 = sorted
    ? encodeSqrtRatioX96(price.numerator, price.denominator)
    : encodeSqrtRatioX96(price.denominator, price.numerator)

  let tick = TickMath.getTickAtSqrtRatio(sqrtRatioX96)
  const nextTickPrice = tickToPrice(price.base, price.quote, tick + 1)
  if (sorted) {
    if (!price.lt(nextTickPrice)) {
      tick++
    }
  } else {
    if (!price.gt(nextTickPrice)) {
      tick++
    }
  }
  return tick
}
