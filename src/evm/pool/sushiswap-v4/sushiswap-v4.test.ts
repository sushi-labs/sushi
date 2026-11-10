import {
  type Address,
  decodeAbiParameters,
  decodeFunctionData,
  type Hex,
  sliceHex,
  zeroAddress,
} from 'viem'
import { describe, expect, it } from 'vitest'
import { Percent } from '../../../generic/math/percent.js'
import {
  sushiSwapV4CLPositionManagerAbi_initializePool,
  sushiSwapV4CLPositionManagerAbi_modifyLiquidities,
  sushiSwapV4CLPositionManagerAbi_multicall,
  sushiSwapV4CLPositionManagerAbi_permitBatch,
} from '../../abi/sushiSwapV4CLPositionManagerAbi/index.js'
import {
  SushiSwapV3FeeAmount,
  TICK_SPACINGS,
} from '../../config/features/sushiswap-v3.js'
import type { EvmCurrency } from '../../currency/currency.js'
import { EvmNative } from '../../currency/native.js'
import { EvmToken } from '../../currency/token.js'
import { Position } from '../sushiswap-v3/entities/Position.js'
import { SushiSwapV3Pool } from '../sushiswap-v3/entities/SushiSwapV3Pool.js'
import { encodeSqrtRatioX96 } from '../sushiswap-v3/utils/encodeSqrtRatioX96.js'
import { nearestUsableTick } from '../sushiswap-v3/utils/nearestUsableTick.js'
import {
  priceToClosestTick,
  tickToPrice,
} from '../sushiswap-v3/utils/priceTickConversions.js'
import { TickMath } from '../sushiswap-v3/utils/tickMath.js'
import { SUSHISWAP_V4_MSG_SENDER, SushiSwapV4Action } from './constants.js'
import {
  computeSushiSwapV4PoolId,
  decodeSushiSwapV4CLPoolParameters,
  encodeSushiSwapV4CLPoolParameters,
  getSushiSwapV4PoolKey,
  sortSushiSwapV4Currencies,
} from './pool-key.js'
import {
  addSushiSwapV4LiquidityCallParameters,
  collectSushiSwapV4FeesCallParameters,
  removeSushiSwapV4LiquidityCallParameters,
} from './position-manager.js'
import {
  SushiSwapV4Pool,
  sushiSwapV4PriceToClosestTick,
  sushiSwapV4TickToPrice,
} from './sushiswap-v4-pool.js'
import { SushiSwapV4Position } from './sushiswap-v4-position.js'

const sushiSwapV4CLPositionManagerAbi = [
  ...sushiSwapV4CLPositionManagerAbi_initializePool,
  ...sushiSwapV4CLPositionManagerAbi_modifyLiquidities,
  ...sushiSwapV4CLPositionManagerAbi_multicall,
  ...sushiSwapV4CLPositionManagerAbi_permitBatch,
]

const POOL_MANAGER: Address = '0x81D732702f87D2D652aE79e9F52bf44928eCA210'

const USDC = new EvmToken({
  chainId: 1,
  address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  decimals: 6,
  symbol: 'USDC',
  name: 'USD Coin',
})
const DAI = new EvmToken({
  chainId: 1,
  address: '0x6b175474e89094c44da98b954eedeac495271d0f',
  decimals: 18,
  symbol: 'DAI',
  name: 'Dai Stablecoin',
})
const ETH = EvmNative.fromChainId(1)

const SQRT_RATIO = encodeSqrtRatioX96(100e6, 100e18)
const TICK = TickMath.getTickAtSqrtRatio(SQRT_RATIO)
const TICK_SPACING = TICK_SPACINGS[SushiSwapV3FeeAmount.LOW]

const v4Pool = new SushiSwapV4Pool({
  currencyA: USDC,
  currencyB: DAI,
  fee: SushiSwapV3FeeAmount.LOW,
  tickSpacing: TICK_SPACING,
  poolManager: POOL_MANAGER,
  sqrtRatioX96: SQRT_RATIO,
  liquidity: 0n,
  tickCurrent: TICK,
})
const v3Pool = new SushiSwapV3Pool(
  DAI,
  USDC,
  SushiSwapV3FeeAmount.LOW,
  SQRT_RATIO,
  0,
  TICK,
  [],
)

function decodeActions(payload: Hex) {
  const [actions, params] = decodeAbiParameters(
    [{ type: 'bytes' }, { type: 'bytes[]' }],
    payload,
  )
  return {
    actions: Array.from({ length: (actions.length - 2) / 2 }, (_, i) =>
      Number(sliceHex(actions, i, i + 1)),
    ),
    params,
  }
}

function decodeModifyLiquidities(calldata: Hex) {
  const { functionName, args } = decodeFunctionData({
    abi: sushiSwapV4CLPositionManagerAbi,
    data: calldata,
  })
  expect(functionName).toBe('modifyLiquidities')
  const [payload, deadline] = args as readonly [Hex, bigint]
  return { ...decodeActions(payload), deadline }
}

describe('pool key', () => {
  it('packs tick spacing and the hook registration bitmap', () => {
    const parameters = encodeSushiSwapV4CLPoolParameters({
      tickSpacing: 1,
      hooksRegistration: {
        beforeInitialize: true,
        beforeSwap: true,
        afterSwap: true,
        afterAddLiquidity: false,
        beforeDonate: false,
        beforeSwapReturnDelta: false,
        afterSwapReturnDelta: false,
      },
    })
    expect(parameters).toBe(
      '0x00000000000000000000000000000000000000000000000000000000000100c1',
    )
    expect(decodeSushiSwapV4CLPoolParameters(parameters)).toEqual({
      tickSpacing: 1,
      hooksRegistration: 0xc1,
    })
    expect(
      decodeSushiSwapV4CLPoolParameters(
        encodeSushiSwapV4CLPoolParameters({ tickSpacing: 32_767 }),
      ).tickSpacing,
    ).toBe(32_767)
  })

  it('rejects out of range tick spacings and fees', () => {
    expect(() =>
      encodeSushiSwapV4CLPoolParameters({ tickSpacing: 0 }),
    ).toThrow()
    expect(() =>
      encodeSushiSwapV4CLPoolParameters({ tickSpacing: 32_768 }),
    ).toThrow()
    expect(() =>
      getSushiSwapV4PoolKey({
        currencyA: USDC,
        currencyB: DAI,
        fee: 1_000_001,
        tickSpacing: 1,
        poolManager: POOL_MANAGER,
      }),
    ).toThrow()
  })

  // Pool keys and IDs read from Robinhood's pool manager
  it.each([
    {
      id: '0x292f9a076af01662cfa26814eb6080c87559eb7ae758d17c1447f919a483d2dc',
      currency0: '0x5fc5360D0400a0Fd4f2af552ADD042D716F1d168',
      currency1: '0xd0601CE157Db5bdC3162BbaC2a2C8aF5320D9EEC',
      hooks: '0x0F00b49945395061Edf3CdFEa515C212DF614125',
      parameters:
        '0x00000000000000000000000000000000000000000000000000000000000108c1',
    },
    {
      id: '0xa936e62f195b50f82f694055597d5c53bdaec960a1bb68967a1aebde6848d836',
      currency0: '0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73',
      currency1: '0x5fc5360D0400a0Fd4f2af552ADD042D716F1d168',
      hooks: '0x0f571aB54d2b85D53cfF0A092D9e35e30DD357c7',
      parameters:
        '0x00000000000000000000000000000000000000000000000000000000000a08c1',
    },
  ] as const)('computes the on-chain pool ID $id', ({ id, ...key }) => {
    expect(
      computeSushiSwapV4PoolId({
        ...key,
        poolManager: POOL_MANAGER,
        fee: 0x800000,
      }),
    ).toBe(id)
  })

  it('sorts native first', () => {
    expect(sortSushiSwapV4Currencies<EvmCurrency>(USDC, ETH)).toEqual([
      ETH,
      USDC,
    ])
    const key = getSushiSwapV4PoolKey({
      currencyA: USDC,
      currencyB: ETH,
      fee: 500,
      tickSpacing: 10,
      poolManager: POOL_MANAGER,
    })
    expect(key.currency0).toBe(zeroAddress)
    expect(key.hooks).toBe(zeroAddress)
  })
})

describe('SushiSwapV4Pool', () => {
  it('rejects hook registrations and dynamic fees without a hook', () => {
    const args = {
      currencyA: USDC,
      currencyB: DAI,
      tickSpacing: 1,
      poolManager: POOL_MANAGER,
      sqrtRatioX96: SQRT_RATIO,
      liquidity: 0n,
      tickCurrent: TICK,
    }
    expect(
      () =>
        new SushiSwapV4Pool({
          ...args,
          fee: 500,
          hooksRegistration: { beforeSwap: true },
        }),
    ).toThrow('HOOKS_REGISTRATION')
    expect(() => new SushiSwapV4Pool({ ...args, fee: 0x800000 })).toThrow('FEE')
  })

  it('prices match V3 for the same tokens', () => {
    expect(v4Pool.currency0.isSame(v3Pool.token0)).toBe(true)
    expect(v4Pool.currency0Price.toSignificant(10)).toBe(
      v3Pool.token0Price.toSignificant(10),
    )
    expect(v4Pool.priceOf(USDC).toSignificant(10)).toBe(
      v3Pool.priceOf(USDC).toSignificant(10),
    )
  })

  it('prices tokens as tickToPrice in either order', () => {
    for (const [base, quote] of [
      [USDC, ETH.wrap()],
      [ETH.wrap(), USDC],
    ] as const) {
      expect(sushiSwapV4TickToPrice(base, quote, 10_000).toSignificant(8)).toBe(
        tickToPrice(base, quote, 10_000).toSignificant(8),
      )
    }
  })

  it('round trips prices and ticks with a native currency0', () => {
    const tick = 200_000
    const price = sushiSwapV4TickToPrice(USDC, ETH, tick)
    expect(price.base.isSame(USDC)).toBe(true)
    expect(sushiSwapV4PriceToClosestTick(price)).toBe(tick)
    expect(sushiSwapV4PriceToClosestTick(price.invert())).toBe(tick)

    // Wrapped, WETH sorts after USDC and the tick's meaning flips
    const wrappedPrice = sushiSwapV4TickToPrice(USDC, ETH.wrap(), tick)
    expect(priceToClosestTick(wrappedPrice as never)).toBe(tick)
    expect(wrappedPrice.toSignificant(6)).not.toBe(price.toSignificant(6))
  })
})

describe('SushiSwapV4Position', () => {
  const tickLower = nearestUsableTick(TICK, TICK_SPACING) - TICK_SPACING * 20
  const tickUpper = nearestUsableTick(TICK, TICK_SPACING) + TICK_SPACING * 20
  const liquidity = 100e18

  const v4Position = new SushiSwapV4Position({
    pool: v4Pool,
    tickLower,
    tickUpper,
    liquidity,
  })
  const v3Position = new Position({
    pool: v3Pool,
    tickLower,
    tickUpper,
    liquidity,
  })

  it('amounts match V3', () => {
    expect(v4Position.amount0.amount).toBe(v3Position.amount0.amount)
    expect(v4Position.amount1.amount).toBe(v3Position.amount1.amount)
    expect(v4Position.mintAmounts).toEqual(v3Position.mintAmounts)
  })

  it('burn amounts with slippage match V3', () => {
    const slippage = new Percent({ numerator: 5, denominator: 100 })
    expect(v4Position.burnAmountsWithSlippage(slippage)).toEqual(
      v3Position.burnAmountsWithSlippage(slippage),
    )
  })

  it('bounds mint amounts with slippage from above', () => {
    const slippage = new Percent({ numerator: 5, denominator: 100 })
    const { amount0, amount1 } = v4Position.mintAmountsWithSlippage(slippage)
    expect(amount0 > v4Position.mintAmounts.amount0).toBe(true)
    expect(amount1 > v4Position.mintAmounts.amount1).toBe(true)
    expect(v4Position.mintAmountsWithSlippage(new Percent(0))).toEqual(
      v4Position.mintAmounts,
    )
  })

  it('creates positions from amounts as V3 does', () => {
    const args = { tickLower, tickUpper, useFullPrecision: true } as const
    expect(
      SushiSwapV4Position.fromAmount0({ pool: v4Pool, amount0: 1e18, ...args })
        .liquidity,
    ).toBe(
      Position.fromAmount0({ pool: v3Pool, amount0: 1e18, ...args }).liquidity,
    )
    expect(
      SushiSwapV4Position.fromAmount1({
        pool: v4Pool,
        amount1: 1e6,
        tickLower,
        tickUpper,
      }).liquidity,
    ).toBe(
      Position.fromAmount1({ pool: v3Pool, amount1: 1e6, tickLower, tickUpper })
        .liquidity,
    )
  })

  it('rejects ticks off the tick spacing', () => {
    expect(
      () =>
        new SushiSwapV4Position({
          pool: v4Pool,
          tickLower: tickLower + 1,
          tickUpper,
          liquidity,
        }),
    ).toThrow('TICK_LOWER')
  })
})

describe('position manager calldata', () => {
  const owner = '0x50f72c67ab509ddaffd35c385ffb904b9e255547'
  const slippage = new Percent({ numerator: 1, denominator: 100 })
  const deadline = 1_900_000_000n

  const ethPool = new SushiSwapV4Pool({
    currencyA: USDC,
    currencyB: ETH,
    fee: 3000,
    tickSpacing: 60,
    poolManager: POOL_MANAGER,
    sqrtRatioX96: TickMath.getSqrtRatioAtTick(200_000),
    liquidity: 0n,
    tickCurrent: 200_000,
  })
  const ethPosition = new SushiSwapV4Position({
    pool: ethPool,
    tickLower: 199_980,
    tickUpper: 200_040,
    liquidity: 10n ** 15n,
  })

  it('mints with the pool key inline where the decoder reads it', () => {
    const { calldata, value } = addSushiSwapV4LiquidityCallParameters({
      position: ethPosition,
      slippageTolerance: slippage,
      deadline,
      recipient: owner,
    })
    const decoded = decodeModifyLiquidities(calldata)
    expect(decoded.deadline).toBe(deadline)
    expect(decoded.actions).toEqual([
      SushiSwapV4Action.CL_MINT_POSITION,
      SushiSwapV4Action.SETTLE_PAIR,
      SushiSwapV4Action.SWEEP,
    ])

    // CLCalldataDecoder.decodeCLMintParams' fixed offsets
    const mint = decoded.params[0]!
    const word = (offset: number) => BigInt(sliceHex(mint, offset, offset + 32))
    expect(word(0)).toBe(0n) // currency0 = native
    expect(word(0xc0)).toBe(199_980n)
    expect(word(0xe0)).toBe(200_040n)
    expect(word(0x100)).toBe(10n ** 15n)

    const { amount0, amount1 } = ethPosition.mintAmountsWithSlippage(slippage)
    expect(word(0x120)).toBe(amount0)
    expect(word(0x140)).toBe(amount1)
    expect(value).toBe(amount0)

    const [sweepCurrency, sweepTo] = decodeAbiParameters(
      [{ type: 'address' }, { type: 'address' }],
      decoded.params[2]!,
    )
    expect(sweepCurrency).toBe(zeroAddress)
    expect(sweepTo.toLowerCase()).toBe(SUSHISWAP_V4_MSG_SENDER)
  })

  it('initializes and permits in a multicall', () => {
    const { calldata } = addSushiSwapV4LiquidityCallParameters({
      position: ethPosition,
      slippageTolerance: slippage,
      deadline,
      recipient: owner,
      createPool: true,
      permit2: {
        owner,
        permitBatch: {
          details: [
            {
              token: USDC.address,
              amount: 2n ** 160n - 1n,
              expiration: 1_900_000_000,
              nonce: 0,
            },
          ],
          spender: owner,
          sigDeadline: deadline,
        },
        signature: '0x1234',
      },
    })
    const { functionName, args } = decodeFunctionData({
      abi: sushiSwapV4CLPositionManagerAbi,
      data: calldata,
    })
    expect(functionName).toBe('multicall')
    const calls = (args as readonly [readonly Hex[]])[0]
    expect(
      calls.map(
        (call) =>
          decodeFunctionData({
            abi: sushiSwapV4CLPositionManagerAbi,
            data: call,
          }).functionName,
      ),
    ).toEqual(['initializePool', 'permitBatch', 'modifyLiquidities'])
  })

  it('increases without a sweep for token pairs, closing both currencies', () => {
    const position = new SushiSwapV4Position({
      pool: v4Pool,
      tickLower: -TICK_SPACING * 1000,
      tickUpper: TICK_SPACING * 1000,
      liquidity: 10n ** 18n,
    })
    const { calldata, value } = addSushiSwapV4LiquidityCallParameters({
      position,
      slippageTolerance: slippage,
      deadline,
      tokenId: 7n,
    })
    expect(value).toBe(0n)
    expect(decodeModifyLiquidities(calldata).actions).toEqual([
      SushiSwapV4Action.CL_INCREASE_LIQUIDITY,
      SushiSwapV4Action.CLOSE_CURRENCY,
      SushiSwapV4Action.CLOSE_CURRENCY,
    ])
  })

  it('decreases a share of the liquidity with minimum amounts', () => {
    const { calldata } = removeSushiSwapV4LiquidityCallParameters({
      position: ethPosition,
      tokenId: 7n,
      liquidityPercentage: new Percent({ numerator: 1, denominator: 4 }),
      slippageTolerance: slippage,
      deadline,
    })
    const decoded = decodeModifyLiquidities(calldata)
    expect(decoded.actions).toEqual([
      SushiSwapV4Action.CL_DECREASE_LIQUIDITY,
      SushiSwapV4Action.CLOSE_CURRENCY,
      SushiSwapV4Action.CLOSE_CURRENCY,
    ])
    const [tokenId, liquidity, amount0Min, amount1Min] = decodeAbiParameters(
      [
        { type: 'uint256' },
        { type: 'uint256' },
        { type: 'uint128' },
        { type: 'uint128' },
        { type: 'bytes' },
      ],
      decoded.params[0]!,
    )
    expect(tokenId).toBe(7n)
    expect(liquidity).toBe(10n ** 15n / 4n)
    const quarter = new SushiSwapV4Position({
      pool: ethPool,
      tickLower: ethPosition.tickLower,
      tickUpper: ethPosition.tickUpper,
      liquidity: 10n ** 15n / 4n,
    }).burnAmountsWithSlippage(slippage)
    expect([amount0Min, amount1Min]).toEqual([quarter.amount0, quarter.amount1])
  })

  it('burns only when removing everything', () => {
    const args = {
      position: ethPosition,
      tokenId: 7n,
      slippageTolerance: slippage,
      deadline,
      burnToken: true,
    }
    expect(
      decodeModifyLiquidities(
        removeSushiSwapV4LiquidityCallParameters({
          ...args,
          liquidityPercentage: new Percent(1),
        }).calldata,
      ).actions[0],
    ).toBe(SushiSwapV4Action.CL_BURN_POSITION)
    expect(() =>
      removeSushiSwapV4LiquidityCallParameters({
        ...args,
        liquidityPercentage: new Percent({ numerator: 1, denominator: 2 }),
      }),
    ).toThrow('CANNOT_BURN')
  })

  it('collects by decreasing no liquidity', () => {
    const decoded = decodeModifyLiquidities(
      collectSushiSwapV4FeesCallParameters({
        tokenId: 7n,
        poolKey: ethPool.poolKey,
        deadline,
      }).calldata,
    )
    expect(decoded.actions).toEqual([
      SushiSwapV4Action.CL_DECREASE_LIQUIDITY,
      SushiSwapV4Action.CLOSE_CURRENCY,
      SushiSwapV4Action.CLOSE_CURRENCY,
    ])
  })
})
