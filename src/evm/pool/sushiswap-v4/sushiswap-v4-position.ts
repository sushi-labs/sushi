import invariant from 'tiny-invariant'
import { Amount } from '../../../generic/currency/amount.js'
import type { Price } from '../../../generic/currency/price.js'
import { MAX_UINT256 } from '../../../generic/math/constants.js'
import { Percent } from '../../../generic/math/percent.js'
import type { BigintIsh } from '../../../generic/types/bigintish.js'
import type { EvmCurrency } from '../../currency/currency.js'
import { encodeSqrtRatioX96 } from '../sushiswap-v3/utils/encodeSqrtRatioX96.js'
import { maxLiquidityForAmounts } from '../sushiswap-v3/utils/maxLiquidityForAmounts.js'
import { SqrtPriceMath } from '../sushiswap-v3/utils/sqrtPriceMath.js'
import { TickMath } from '../sushiswap-v3/utils/tickMath.js'
import {
  type SushiSwapV4Pool,
  sushiSwapV4TickToPrice,
} from './sushiswap-v4-pool.js'

type Amounts = Readonly<{ amount0: bigint; amount1: bigint }>

interface SushiSwapV4PositionConstructorArgs {
  pool: SushiSwapV4Pool
  tickLower: number
  tickUpper: number
  liquidity: BigintIsh
}

/** The token amounts `liquidity` between two ticks holds at a price. */
function getAmountsForLiquidity({
  sqrtRatioX96,
  tickCurrent,
  tickLower,
  tickUpper,
  liquidity,
  roundUp,
}: {
  sqrtRatioX96: bigint
  tickCurrent: number
  tickLower: number
  tickUpper: number
  liquidity: bigint
  roundUp: boolean
}): Amounts {
  const sqrtRatioLower = TickMath.getSqrtRatioAtTick(tickLower)
  const sqrtRatioUpper = TickMath.getSqrtRatioAtTick(tickUpper)

  if (tickCurrent < tickLower) {
    return {
      amount0: SqrtPriceMath.getAmount0Delta(
        sqrtRatioLower,
        sqrtRatioUpper,
        liquidity,
        roundUp,
      ),
      amount1: 0n,
    }
  }
  if (tickCurrent < tickUpper) {
    return {
      amount0: SqrtPriceMath.getAmount0Delta(
        sqrtRatioX96,
        sqrtRatioUpper,
        liquidity,
        roundUp,
      ),
      amount1: SqrtPriceMath.getAmount1Delta(
        sqrtRatioLower,
        sqrtRatioX96,
        liquidity,
        roundUp,
      ),
    }
  }
  return {
    amount0: 0n,
    amount1: SqrtPriceMath.getAmount1Delta(
      sqrtRatioLower,
      sqrtRatioUpper,
      liquidity,
      roundUp,
    ),
  }
}

/**
 * A position in a SushiSwap V4 pool. The math matches V3's `Position`,
 * except that adding liquidity is bounded by maximum amounts in rather than
 * minimum amounts, as the V4 position manager checks.
 */
export class SushiSwapV4Position {
  public readonly pool: SushiSwapV4Pool
  public readonly tickLower: number
  public readonly tickUpper: number
  public readonly liquidity: bigint

  private _amounts: Amounts | null = null
  private _mintAmounts: Amounts | null = null

  public constructor({
    pool,
    tickLower,
    tickUpper,
    liquidity,
  }: SushiSwapV4PositionConstructorArgs) {
    invariant(tickLower < tickUpper, 'TICK_ORDER')
    invariant(
      tickLower >= TickMath.MIN_TICK && tickLower % pool.tickSpacing === 0,
      'TICK_LOWER',
    )
    invariant(
      tickUpper <= TickMath.MAX_TICK && tickUpper % pool.tickSpacing === 0,
      'TICK_UPPER',
    )

    this.pool = pool
    this.tickLower = tickLower
    this.tickUpper = tickUpper
    this.liquidity = BigInt(liquidity.toString())
  }

  public get currency0PriceLower(): Price<EvmCurrency, EvmCurrency> {
    return sushiSwapV4TickToPrice(
      this.pool.currency0,
      this.pool.currency1,
      this.tickLower,
    )
  }

  public get currency0PriceUpper(): Price<EvmCurrency, EvmCurrency> {
    return sushiSwapV4TickToPrice(
      this.pool.currency0,
      this.pool.currency1,
      this.tickUpper,
    )
  }

  private amountsAt(pool: SushiSwapV4Pool, roundUp: boolean): Amounts {
    return getAmountsForLiquidity({
      sqrtRatioX96: pool.sqrtRatioX96,
      tickCurrent: pool.tickCurrent,
      tickLower: this.tickLower,
      tickUpper: this.tickUpper,
      liquidity: this.liquidity,
      roundUp,
    })
  }

  private get amounts(): Amounts {
    if (this._amounts === null) {
      this._amounts = this.amountsAt(this.pool, false)
    }
    return this._amounts
  }

  /** currency0 the liquidity could be burned for at the current price. */
  public get amount0(): Amount<EvmCurrency> {
    return new Amount(this.pool.currency0, this.amounts.amount0)
  }

  /** currency1 the liquidity could be burned for at the current price. */
  public get amount1(): Amount<EvmCurrency> {
    return new Amount(this.pool.currency1, this.amounts.amount1)
  }

  /** The amounts minting the liquidity costs at the current price, rounded up. */
  public get mintAmounts(): Amounts {
    if (this._mintAmounts === null) {
      this._mintAmounts = this.amountsAt(this.pool, true)
    }
    return this._mintAmounts
  }

  /** The pools at the lowest and highest prices `slippageTolerance` allows. */
  private poolsAfterSlippage(slippageTolerance: Percent): {
    poolLower: SushiSwapV4Pool
    poolUpper: SushiSwapV4Pool
  } {
    const price = this.pool.currency0Price.asFraction
    const priceLower = price.mul(new Percent(1).sub(slippageTolerance))
    const priceUpper = price.mul(slippageTolerance.add(1))

    let sqrtRatioX96Lower = encodeSqrtRatioX96(
      priceLower.numerator,
      priceLower.denominator,
    )
    if (sqrtRatioX96Lower <= TickMath.MIN_SQRT_RATIO) {
      sqrtRatioX96Lower = TickMath.MIN_SQRT_RATIO + 1n
    }
    let sqrtRatioX96Upper = encodeSqrtRatioX96(
      priceUpper.numerator,
      priceUpper.denominator,
    )
    if (sqrtRatioX96Upper >= TickMath.MAX_SQRT_RATIO) {
      sqrtRatioX96Upper = TickMath.MAX_SQRT_RATIO - 1n
    }

    return {
      poolLower: this.pool.withSqrtRatioX96(sqrtRatioX96Lower),
      poolUpper: this.pool.withSqrtRatioX96(sqrtRatioX96Upper),
    }
  }

  /**
   * The most of each currency minting the liquidity may cost if the price
   * slips by up to `slippageTolerance`: currency0 is dearest when the price
   * falls, currency1 when it rises.
   */
  public mintAmountsWithSlippage(slippageTolerance: Percent): Amounts {
    const { poolLower, poolUpper } = this.poolsAfterSlippage(slippageTolerance)
    return {
      amount0: this.amountsAt(poolLower, true).amount0,
      amount1: this.amountsAt(poolUpper, true).amount1,
    }
  }

  /**
   * The least of each currency burning the liquidity may return if the price
   * slips by up to `slippageTolerance`: currency0 is scarcest when the price
   * rises, currency1 when it falls.
   */
  public burnAmountsWithSlippage(slippageTolerance: Percent): Amounts {
    const { poolLower, poolUpper } = this.poolsAfterSlippage(slippageTolerance)
    return {
      amount0: this.amountsAt(poolUpper, false).amount0,
      amount1: this.amountsAt(poolLower, false).amount1,
    }
  }

  /**
   * The most liquidity `amount0` and `amount1` can mint at the pool's price.
   * @param useFullPrecision If false, liquidity is maximized as the periphery
   * computes it rather than as core could support
   */
  public static fromAmounts({
    pool,
    tickLower,
    tickUpper,
    amount0,
    amount1,
    useFullPrecision,
  }: {
    pool: SushiSwapV4Pool
    tickLower: number
    tickUpper: number
    amount0: BigintIsh
    amount1: BigintIsh
    useFullPrecision: boolean
  }): SushiSwapV4Position {
    return new SushiSwapV4Position({
      pool,
      tickLower,
      tickUpper,
      liquidity: maxLiquidityForAmounts(
        pool.sqrtRatioX96,
        TickMath.getSqrtRatioAtTick(tickLower),
        TickMath.getSqrtRatioAtTick(tickUpper),
        amount0,
        amount1,
        useFullPrecision,
      ),
    })
  }

  /** The most liquidity `amount0` can mint, given unlimited currency1. */
  public static fromAmount0({
    pool,
    tickLower,
    tickUpper,
    amount0,
    useFullPrecision,
  }: {
    pool: SushiSwapV4Pool
    tickLower: number
    tickUpper: number
    amount0: BigintIsh
    useFullPrecision: boolean
  }): SushiSwapV4Position {
    return SushiSwapV4Position.fromAmounts({
      pool,
      tickLower,
      tickUpper,
      amount0,
      amount1: MAX_UINT256,
      useFullPrecision,
    })
  }

  /** The most liquidity `amount1` can mint, given unlimited currency0. */
  public static fromAmount1({
    pool,
    tickLower,
    tickUpper,
    amount1,
  }: {
    pool: SushiSwapV4Pool
    tickLower: number
    tickUpper: number
    amount1: BigintIsh
  }): SushiSwapV4Position {
    return SushiSwapV4Position.fromAmounts({
      pool,
      tickLower,
      tickUpper,
      amount0: MAX_UINT256,
      amount1,
      useFullPrecision: true,
    })
  }
}
