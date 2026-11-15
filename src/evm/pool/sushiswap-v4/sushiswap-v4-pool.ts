import invariant from 'tiny-invariant'
import { type Address, type Hex, zeroAddress } from 'viem'
import { Price } from '../../../generic/currency/price.js'
import type { BigintIsh } from '../../../generic/types/bigintish.js'
import type { EvmChainId } from '../../chain/chains.js'
import type { EvmCurrency } from '../../currency/currency.js'
import { Q192 } from '../sushiswap-v3/internalConstants.js'
import { encodeSqrtRatioX96 } from '../sushiswap-v3/utils/encodeSqrtRatioX96.js'
import { TickMath } from '../sushiswap-v3/utils/tickMath.js'
import type { SushiSwapV4CLHooksRegistration } from './constants.js'
import {
  computeSushiSwapV4PoolId,
  decodeSushiSwapV4CLPoolParameters,
  encodeSushiSwapV4CLPoolParameters,
  encodeSushiSwapV4HooksRegistration,
  getSushiSwapV4CurrencyAddress,
  isSushiSwapV4DynamicFee,
  type SushiSwapV4PoolKey,
  sortSushiSwapV4Currencies,
  sushiSwapV4CurrencySortsBefore,
  validateSushiSwapV4Fee,
} from './pool-key.js'

interface SushiSwapV4PoolConstructorArgs {
  currencyA: EvmCurrency
  currencyB: EvmCurrency
  /** LP fee in hundredths of a bip, or the dynamic fee flag. */
  fee: number
  tickSpacing: number
  poolManager: Address
  hooks?: Address
  hooksRegistration?: SushiSwapV4CLHooksRegistration | number
  sqrtRatioX96: BigintIsh
  liquidity: BigintIsh
  tickCurrent: number
}

/**
 * A SushiSwap V4 (Infinity CL) pool. Unlike V3, either currency may be
 * native, so prices are between currencies rather than wrapped tokens, and
 * fee and tick spacing are independent.
 */
export class SushiSwapV4Pool {
  public readonly currency0: EvmCurrency
  public readonly currency1: EvmCurrency
  public readonly fee: number
  public readonly tickSpacing: number
  public readonly poolManager: Address
  public readonly hooks: Address
  public readonly hooksRegistration: number
  public readonly sqrtRatioX96: bigint
  public readonly liquidity: bigint
  public readonly tickCurrent: number

  private _currency0Price?: Price<EvmCurrency, EvmCurrency>
  private _currency1Price?: Price<EvmCurrency, EvmCurrency>
  private _poolKey?: SushiSwapV4PoolKey
  private _poolId?: Hex

  public constructor({
    currencyA,
    currencyB,
    fee,
    tickSpacing,
    poolManager,
    hooks = zeroAddress,
    hooksRegistration,
    sqrtRatioX96,
    liquidity,
    tickCurrent,
  }: SushiSwapV4PoolConstructorArgs) {
    validateSushiSwapV4Fee(fee)

    const sqrtRatio = BigInt(sqrtRatioX96.toString())
    invariant(
      sqrtRatio >= TickMath.getSqrtRatioAtTick(tickCurrent) &&
        sqrtRatio <= TickMath.getSqrtRatioAtTick(tickCurrent + 1),
      'PRICE_BOUNDS',
    )

    const bitmap =
      typeof hooksRegistration === 'number'
        ? hooksRegistration
        : encodeSushiSwapV4HooksRegistration(hooksRegistration)
    invariant(hooks !== zeroAddress || bitmap === 0, 'HOOKS_REGISTRATION')
    invariant(hooks !== zeroAddress || !isSushiSwapV4DynamicFee(fee), 'FEE')

    ;[this.currency0, this.currency1] = sortSushiSwapV4Currencies(
      currencyA,
      currencyB,
    )
    this.fee = fee
    // Validates tick spacing and bitmap bounds
    encodeSushiSwapV4CLPoolParameters({
      tickSpacing,
      hooksRegistration: bitmap,
    })
    this.tickSpacing = tickSpacing
    this.poolManager = poolManager
    this.hooks = hooks
    this.hooksRegistration = bitmap
    this.sqrtRatioX96 = sqrtRatio
    this.liquidity = BigInt(liquidity.toString())
    this.tickCurrent = tickCurrent
  }

  /** A pool from its on-chain key and slot0, given the key's currencies. */
  public static fromPoolKey({
    poolKey,
    currencies,
    sqrtRatioX96,
    liquidity,
    tickCurrent,
  }: {
    poolKey: SushiSwapV4PoolKey
    currencies: [EvmCurrency, EvmCurrency]
    sqrtRatioX96: BigintIsh
    liquidity: BigintIsh
    tickCurrent: number
  }): SushiSwapV4Pool {
    const [currency0, currency1] = sortSushiSwapV4Currencies(...currencies)
    invariant(
      getSushiSwapV4CurrencyAddress(currency0).toLowerCase() ===
        poolKey.currency0.toLowerCase() &&
        getSushiSwapV4CurrencyAddress(currency1).toLowerCase() ===
          poolKey.currency1.toLowerCase(),
      'CURRENCIES',
    )
    const { tickSpacing, hooksRegistration } =
      decodeSushiSwapV4CLPoolParameters(poolKey.parameters)

    return new SushiSwapV4Pool({
      currencyA: currency0,
      currencyB: currency1,
      fee: poolKey.fee,
      tickSpacing,
      poolManager: poolKey.poolManager,
      hooks: poolKey.hooks,
      hooksRegistration,
      sqrtRatioX96,
      liquidity,
      tickCurrent,
    })
  }

  public get chainId(): EvmChainId {
    return this.currency0.chainId
  }

  public get isDynamicFee(): boolean {
    return isSushiSwapV4DynamicFee(this.fee)
  }

  public get poolKey(): SushiSwapV4PoolKey {
    if (!this._poolKey) {
      this._poolKey = {
        currency0: getSushiSwapV4CurrencyAddress(this.currency0),
        currency1: getSushiSwapV4CurrencyAddress(this.currency1),
        hooks: this.hooks,
        poolManager: this.poolManager,
        fee: this.fee,
        parameters: encodeSushiSwapV4CLPoolParameters({
          tickSpacing: this.tickSpacing,
          hooksRegistration: this.hooksRegistration,
        }),
      }
    }
    return this._poolKey
  }

  public get poolId(): Hex {
    if (!this._poolId) {
      this._poolId = computeSushiSwapV4PoolId(this.poolKey)
    }
    return this._poolId
  }

  public involvesCurrency(currency: EvmCurrency): boolean {
    return currency.isSame(this.currency0) || currency.isSame(this.currency1)
  }

  /** The current mid price of currency0, in currency1. */
  public get currency0Price(): Price<EvmCurrency, EvmCurrency> {
    if (!this._currency0Price) {
      this._currency0Price = new Price({
        base: this.currency0,
        quote: this.currency1,
        denominator: Q192,
        numerator: this.sqrtRatioX96 * this.sqrtRatioX96,
      })
    }
    return this._currency0Price
  }

  /** The current mid price of currency1, in currency0. */
  public get currency1Price(): Price<EvmCurrency, EvmCurrency> {
    if (!this._currency1Price) {
      this._currency1Price = new Price({
        base: this.currency1,
        quote: this.currency0,
        denominator: this.sqrtRatioX96 * this.sqrtRatioX96,
        numerator: Q192,
      })
    }
    return this._currency1Price
  }

  public priceOf(currency: EvmCurrency): Price<EvmCurrency, EvmCurrency> {
    invariant(this.involvesCurrency(currency), 'CURRENCY')
    return currency.isSame(this.currency0)
      ? this.currency0Price
      : this.currency1Price
  }

  /** The same pool at another price, for counterfactual amounts. */
  public withSqrtRatioX96(sqrtRatioX96: bigint): SushiSwapV4Pool {
    return new SushiSwapV4Pool({
      currencyA: this.currency0,
      currencyB: this.currency1,
      fee: this.fee,
      tickSpacing: this.tickSpacing,
      poolManager: this.poolManager,
      hooks: this.hooks,
      hooksRegistration: this.hooksRegistration,
      sqrtRatioX96,
      liquidity: 0n,
      tickCurrent: TickMath.getTickAtSqrtRatio(sqrtRatioX96),
    })
  }
}

/**
 * The price of `base` in `quote` at a tick, for a pool of the two currencies.
 * Ticks price currency0 in currency1, so the order decides the orientation.
 */
export function sushiSwapV4TickToPrice<
  TBase extends EvmCurrency,
  TQuote extends EvmCurrency,
>(base: TBase, quote: TQuote, tick: number): Price<TBase, TQuote> {
  const sqrtRatioX96 = TickMath.getSqrtRatioAtTick(tick)
  const ratioX192 = sqrtRatioX96 * sqrtRatioX96
  return sushiSwapV4CurrencySortsBefore(base, quote)
    ? new Price({ base, quote, numerator: ratioX192, denominator: Q192 })
    : new Price({ base, quote, numerator: Q192, denominator: ratioX192 })
}

/** The first tick whose price is at or below `price`, as V3's `priceToClosestTick`. */
export function sushiSwapV4PriceToClosestTick(
  price: Price<EvmCurrency, EvmCurrency>,
): number {
  const [currency0] = sortSushiSwapV4Currencies(price.base, price.quote)
  const sorted = currency0.isSame(price.base)

  const sqrtRatioX96 = sorted
    ? encodeSqrtRatioX96(price.numerator, price.denominator)
    : encodeSqrtRatioX96(price.denominator, price.numerator)

  let tick = TickMath.getTickAtSqrtRatio(sqrtRatioX96)
  const nextTickPrice = sushiSwapV4TickToPrice(
    price.base,
    price.quote,
    tick + 1,
  )
  if (sorted ? !price.lt(nextTickPrice) : !price.gt(nextTickPrice)) {
    tick++
  }
  return tick
}
