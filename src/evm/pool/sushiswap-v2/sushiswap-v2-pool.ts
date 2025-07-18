import invariant from 'tiny-invariant'
import type { Address } from 'viem'
import { getEvmChainById } from '~evm/chain/index.js'
import {
  SUSHISWAP_V2_FACTORY_ADDRESS,
  isSushiSwapV2ChainId,
} from '~evm/config/features/sushiswap-v2.js'
import { EvmToken } from '~evm/currency/index.js'
import {
  InsufficientInputAmountError,
  InsufficientReservesError,
} from '~evm/dex/index.js'
import { Amount } from '~generic/currency/amount.js'
import { Price } from '~generic/currency/price.js'
import { FIVE, ONE, ZERO, _997, _1000 } from '~generic/math/constants.js'
import { sqrt } from '~generic/math/sqrt.js'
import type { BigintIsh } from '~generic/types/bigintish.js'
import { computeSushiSwapV2PoolAddress } from './compute-sushiswap-v2-pool-address.js'
import { type SerializedSushiSwapV2Pool, sushiSwapV2PoolSchema } from './zod.js'

export class SushiSwapV2Pool {
  public readonly liquidityToken: EvmToken
  public readonly swapGasCost = 60000n
  public readonly minLiquidity = 1000n
  private readonly tokenAmounts: [Amount<EvmToken>, Amount<EvmToken>]

  public static getAddress(tokenA: EvmToken, tokenB: EvmToken): Address {
    if (!isSushiSwapV2ChainId(tokenA.chainId)) {
      throw new Error(
        `ChainId Error: SushiSwapV2 is not available on ${
          getEvmChainById(tokenA.chainId).name
        }`,
      )
    }

    return computeSushiSwapV2PoolAddress({
      factoryAddress: SUSHISWAP_V2_FACTORY_ADDRESS[tokenA.chainId],
      tokenA,
      tokenB,
    })
  }

  public constructor(amountA: Amount<EvmToken>, amountB: Amount<EvmToken>) {
    const amounts = (
      amountA.currency.sortsBefore(amountB.currency) // does safety checks
        ? [amountA, amountB]
        : [amountB, amountA]
    ) as [Amount<EvmToken>, Amount<EvmToken>]
    this.liquidityToken = new EvmToken({
      chainId: amounts[0]!.currency.chainId,
      address: SushiSwapV2Pool.getAddress(
        amounts[0].currency,
        amounts[1].currency,
      ),
      decimals: 18,
      symbol: 'UNI-V2',
      name: 'Uniswap V2',
    })
    this.tokenAmounts = amounts
  }

  /**
   * Returns true if the token is either token0 or token1
   * @param token to check
   */
  public involvesToken(token: EvmToken): boolean {
    return token.isSame(this.token0) || token.isSame(this.token1)
  }

  /**
   * Returns the current mid price of the pair in terms of token0, i.e. the ratio of reserve1 to reserve0
   */
  public get token0Price(): Price<EvmToken, EvmToken> {
    const result = this.tokenAmounts[1].divToFraction(
      this.tokenAmounts[0].amount,
    )

    return new Price({
      base: this.token0,
      quote: this.token1,
      denominator: result.denominator,
      numerator: result.numerator,
    })
  }

  /**
   * Returns the current mid price of the pair in terms of token1, i.e. the ratio of reserve0 to reserve1
   */
  public get token1Price(): Price<EvmToken, EvmToken> {
    const result = this.tokenAmounts[0].divToFraction(this.tokenAmounts[1])

    return new Price({
      base: this.token1,
      quote: this.token0,
      denominator: result.denominator,
      numerator: result.numerator,
    })
  }

  /**
   * Return the price of the given token in terms of the other token in the pair.
   * @param token token to return price of
   */
  public priceOf(token: EvmToken): Price<EvmToken, EvmToken> {
    invariant(this.involvesToken(token), 'TOKEN')
    return token.isSame(this.token0) ? this.token0Price : this.token1Price
  }

  /**
   * Returns the chain ID of the tokens in the pair.
   */
  public get chainId(): number {
    return this.token0.chainId
  }

  public get token0(): EvmToken {
    return this.tokenAmounts[0].currency
  }

  public get token1(): EvmToken {
    return this.tokenAmounts[1].currency
  }

  public get reserve0(): Amount<EvmToken> {
    return this.tokenAmounts[0]
  }

  public get reserve1(): Amount<EvmToken> {
    return this.tokenAmounts[1]
  }

  public reserveOf(token: EvmToken): Amount<EvmToken> {
    invariant(this.involvesToken(token), 'TOKEN')
    return token.isSame(this.token0) ? this.reserve0 : this.reserve1
  }

  public getOutputAmount(
    inputAmount: Amount<EvmToken>,
  ): [Amount<EvmToken>, SushiSwapV2Pool] {
    invariant(this.involvesToken(inputAmount.currency), 'TOKEN')
    if (this.reserve0.amount === ZERO || this.reserve1.amount === ZERO) {
      throw new InsufficientReservesError()
    }
    const inputReserve = this.reserveOf(inputAmount.currency)
    const outputReserve = this.reserveOf(
      inputAmount.currency.isSame(this.token0) ? this.token1 : this.token0,
    )
    const inputAmountWithFee = inputAmount.amount * _997
    const numerator = inputAmountWithFee * outputReserve.amount
    const denominator = inputReserve.amount * _1000 + inputAmountWithFee
    const outputAmount = new Amount(
      inputAmount.currency.isSame(this.token0) ? this.token1 : this.token0,
      numerator / denominator,
    )
    if (outputAmount.amount === ZERO) {
      throw new InsufficientInputAmountError()
    }
    return [
      outputAmount,
      new SushiSwapV2Pool(
        inputReserve.add(inputAmount),
        outputReserve.sub(outputAmount),
      ),
    ]
  }

  public getInputAmount(
    outputAmount: Amount<EvmToken>,
  ): [Amount<EvmToken>, SushiSwapV2Pool] {
    invariant(this.involvesToken(outputAmount.currency), 'TOKEN')
    if (
      this.reserve0.amount === ZERO ||
      this.reserve1.amount === ZERO ||
      outputAmount.amount >= this.reserveOf(outputAmount.currency).amount
    ) {
      throw new InsufficientReservesError()
    }

    const outputReserve = this.reserveOf(outputAmount.currency)
    const inputReserve = this.reserveOf(
      outputAmount.currency.isSame(this.token0) ? this.token1 : this.token0,
    )
    const numerator = inputReserve.amount * outputAmount.amount * _1000
    const denominator = (outputReserve.amount - outputAmount.amount) * _997
    const inputAmount = new Amount(
      outputAmount.currency.isSame(this.token0) ? this.token1 : this.token0,
      numerator / denominator + ONE,
    )
    return [
      inputAmount,
      new SushiSwapV2Pool(
        inputReserve.add(inputAmount),
        outputReserve.sub(outputAmount),
      ),
    ]
  }

  public getLiquidityMinted(
    totalSupply: Amount<EvmToken>,
    tokenAmountA: Amount<EvmToken>,
    tokenAmountB: Amount<EvmToken>,
  ): Amount<EvmToken> {
    invariant(totalSupply.currency.isSame(this.liquidityToken), 'LIQUIDITY')
    const tokenAmounts = (
      tokenAmountA.currency.sortsBefore(tokenAmountB.currency) // does safety checks
        ? [tokenAmountA, tokenAmountB]
        : [tokenAmountB, tokenAmountA]
    ) as [Amount<EvmToken>, Amount<EvmToken>]
    invariant(
      tokenAmounts[0].currency.isSame(this.token0) &&
        tokenAmounts[1].currency.isSame(this.token1),
      'TOKEN',
    )

    let liquidity: bigint
    if (totalSupply.amount === ZERO) {
      liquidity =
        sqrt(tokenAmounts[0].amount * tokenAmounts[1].amount) -
        this.minLiquidity
    } else {
      const amount0 =
        (tokenAmounts[0].amount * totalSupply.amount) / this.reserve0.amount
      const amount1 =
        (tokenAmounts[1].amount * totalSupply.amount) / this.reserve1.amount
      liquidity = amount0 <= amount1 ? amount0 : amount1
    }
    if (liquidity <= ZERO) {
      throw new InsufficientInputAmountError()
    }

    return new Amount(this.liquidityToken, liquidity)
  }

  public getLiquidityValue(
    token: EvmToken,
    totalSupply: Amount<EvmToken>,
    liquidity: Amount<EvmToken>,
    feeOn = false,
    kLast?: BigintIsh,
  ): Amount<EvmToken> {
    invariant(this.involvesToken(token), 'TOKEN')
    invariant(totalSupply.currency.isSame(this.liquidityToken), 'TOTAL_SUPPLY')
    invariant(liquidity.currency.isSame(this.liquidityToken), 'LIQUIDITY')
    invariant(liquidity.amount <= totalSupply.amount, 'LIQUIDITY')

    let totalSupplyAdjusted: Amount<EvmToken>
    if (!feeOn) {
      totalSupplyAdjusted = totalSupply
    } else {
      invariant(typeof kLast !== 'undefined', 'K_LAST')
      const kLastParsed = BigInt(
        typeof kLast === 'bigint' ? kLast.toString() : kLast,
      )
      if (kLastParsed !== ZERO) {
        const rootK = sqrt(this.reserve0.amount * this.reserve1.amount)
        const rootKLast = sqrt(kLastParsed)
        if (rootK > rootKLast) {
          const numerator = totalSupply.amount * (rootK - rootKLast)
          const denominator = rootK * FIVE + rootKLast
          const feeLiquidity = numerator / denominator
          totalSupplyAdjusted = totalSupply.add(
            new Amount(this.liquidityToken, feeLiquidity),
          )
        } else {
          totalSupplyAdjusted = totalSupply
        }
      } else {
        totalSupplyAdjusted = totalSupply
      }
    }

    return new Amount(
      token,
      (liquidity.amount * this.reserveOf(token).amount) /
        totalSupplyAdjusted.amount,
    )
  }

  public serialize(): SerializedSushiSwapV2Pool {
    return sushiSwapV2PoolSchema.parse({
      reserve0: this.tokenAmounts[0].toJSON(),
      reserve1: this.tokenAmounts[1].toJSON(),
    })
  }

  public static deserialize(pair: SerializedSushiSwapV2Pool): SushiSwapV2Pool {
    const tokenA = new EvmToken(pair.reserve0.currency)
    const tokenB = new EvmToken(pair.reserve1.currency)

    const amountA = new Amount(tokenA, pair.reserve0.amount)
    const amountB = new Amount(tokenB, pair.reserve1.amount)

    return new SushiSwapV2Pool(amountA, amountB)
  }
}
