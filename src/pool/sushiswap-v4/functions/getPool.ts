import invariant from 'tiny-invariant'
import type { Type } from '../../../currency/type.js'
import type { BigintIsh } from '../../../math/BigintIsh.js'
import {
  NoTickDataProvider,
  type Tick,
  type TickConstructorArgs,
  type TickDataProvider,
  TickListDataProvider,
} from '../../sushiswap-v3/index.js'
import type { PoolType } from '../types.js'
import { sortCurrencies } from '../utils/sortCurrencies.js'

export type SushiSwapV4PoolState = {
  currency0: Type
  currency1: Type
  fee: number
  tickCurrent: number
  tickSpacing: number
  sqrtRatioX96: bigint
  liquidity: bigint
  tickDataProvider: TickDataProvider
  poolType: PoolType
}

export interface GetPoolPrams {
  poolType: PoolType
  currencyA: Type
  currencyB: Type
  fee: number
  sqrtRatioX96: BigintIsh
  liquidity: BigintIsh
  tickCurrent: number
  tickSpacing: number
  ticks?: TickDataProvider | (Tick | TickConstructorArgs)[]
}

/**
 * By default, pools will not allow operations that require ticks.
 */
const NO_TICK_DATA_PROVIDER_DEFAULT = new NoTickDataProvider()
const MAX_FEE_AMOUNT = 1_000_000n

export const getPool = ({
  currencyA,
  currencyB,
  fee,
  sqrtRatioX96,
  liquidity,
  tickCurrent,
  tickSpacing,
  ticks = NO_TICK_DATA_PROVIDER_DEFAULT,
  poolType,
}: GetPoolPrams): SushiSwapV4PoolState => {
  invariant(Number.isInteger(fee) && BigInt(fee) < MAX_FEE_AMOUNT, 'FEE')

  const [currency0, currency1] = sortCurrencies(currencyA, currencyB)

  return {
    currency0,
    currency1,
    fee,
    tickCurrent,
    tickSpacing,
    sqrtRatioX96: BigInt(sqrtRatioX96),
    liquidity: BigInt(liquidity),
    tickDataProvider: Array.isArray(ticks)
      ? new TickListDataProvider(ticks, tickSpacing)
      : ticks,
    poolType,
  }
}
