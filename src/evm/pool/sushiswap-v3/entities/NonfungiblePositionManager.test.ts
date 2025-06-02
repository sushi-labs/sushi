import invariant from 'tiny-invariant'
import {
  type Hex,
  decodeAbiParameters,
  isHex,
  maxUint128,
  zeroAddress,
} from 'viem'
import { describe, expect, it } from 'vitest'
import {
  multicallAbi_multicall,
  peripheryPaymentsWithFeeAbi_sweepToken,
  peripheryPaymentsWithFeeAbi_unwrapWETH9,
} from '~sushi/abi/index.js'
import { nonfungiblePositionManagerAbi_collect } from '../../../abi/nonfungiblePositionManagerAbi/nonfungiblePositionManagerAbi_collect.js'
import {
  SushiSwapV3FeeAmount,
  TICK_SPACINGS,
} from '../../../config/features/sushiswap-v3.js'
import {
  Amount as CurrencyAmount,
  Native,
  Token,
  WETH9,
} from '../../../currency/index.js'
import { Percent } from '../../../math/index.js'
import { encodeSqrtRatioX96 } from '../utils/encodeSqrtRatioX96.js'
import { NonfungiblePositionManager } from './NonfungiblePositionManager.js'
import { Position } from './Position.js'
import { SushiSwapV3Pool } from './SushiSwapV3Pool.js'

function decodeCollectParams(calldata: string | Hex | undefined) {
  invariant(isHex(calldata))
  return decodeAbiParameters(
    nonfungiblePositionManagerAbi_collect[0].inputs,
    `0x${calldata.slice(10)}`,
  )
}

function decodeUnwrapParams(calldata: string | Hex | undefined) {
  invariant(isHex(calldata))
  return decodeAbiParameters(
    peripheryPaymentsWithFeeAbi_unwrapWETH9[0].inputs,
    `0x${calldata.slice(10)}`,
  )
}

function decodeSweepParams(calldata: string | Hex | undefined) {
  invariant(isHex(calldata))
  return decodeAbiParameters(
    peripheryPaymentsWithFeeAbi_sweepToken[0].inputs,
    `0x${calldata.slice(10)}`,
  )
}

describe('NonfungiblePositionManager', () => {
  const token0 = new Token({
    chainId: 1,
    address: '0x0000000000000000000000000000000000000001',
    decimals: 18,
    symbol: 't0',
    name: 'token0',
  })
  const token1 = new Token({
    chainId: 1,
    address: '0x0000000000000000000000000000000000000002',
    decimals: 18,
    symbol: 't1',
    name: 'token1',
  })

  const fee = SushiSwapV3FeeAmount.MEDIUM

  const pool_0_1 = new SushiSwapV3Pool(
    token0,
    token1,
    fee,
    encodeSqrtRatioX96(1, 1),
    0,
    0,
    [],
  )
  const pool_1_weth = new SushiSwapV3Pool(
    token1,
    WETH9[1],
    fee,
    encodeSqrtRatioX96(1, 1),
    0,
    0,
    [],
  )

  const recipient = '0x0000000000000000000000000000000000000003' as const
  const sender = '0x0000000000000000000000000000000000000004' as const
  const tokenId = 1n
  const slippageTolerance = new Percent(1, 100)
  const deadline = 123

  describe('#createCallParameters', () => {
    it('succeeds', () => {
      const { calldata, value } =
        NonfungiblePositionManager.createCallParameters(pool_0_1)

      expect(calldata).toEqual(
        '0x13ead562000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000bb80000000000000000000000000000000000000001000000000000000000000000',
      )
      expect(value).toEqual('0x00')
    })
  })

  describe('#addCallParameters', () => {
    it('throws if liquidity is 0', () => {
      expect(() =>
        NonfungiblePositionManager.addCallParameters(
          new Position({
            pool: pool_0_1,
            tickLower: -TICK_SPACINGS[SushiSwapV3FeeAmount.MEDIUM],
            tickUpper: TICK_SPACINGS[SushiSwapV3FeeAmount.MEDIUM],
            liquidity: 0,
          }),
          { recipient, slippageTolerance, deadline },
        ),
      ).toThrow('ZERO_LIQUIDITY')
    })

    it('throws if pool does not involve ether and useNative is true', () => {
      expect(() =>
        NonfungiblePositionManager.addCallParameters(
          new Position({
            pool: pool_0_1,
            tickLower: -TICK_SPACINGS[SushiSwapV3FeeAmount.MEDIUM],
            tickUpper: TICK_SPACINGS[SushiSwapV3FeeAmount.MEDIUM],
            liquidity: 1,
          }),
          {
            recipient,
            slippageTolerance,
            deadline,
            useNative: Native.onChain(1),
          },
        ),
      ).toThrow('NO_WETH')
    })

    it('succeeds for mint', () => {
      const { calldata, value } = NonfungiblePositionManager.addCallParameters(
        new Position({
          pool: pool_0_1,
          tickLower: -TICK_SPACINGS[SushiSwapV3FeeAmount.MEDIUM],
          tickUpper: TICK_SPACINGS[SushiSwapV3FeeAmount.MEDIUM],
          liquidity: 1,
        }),
        { recipient, slippageTolerance, deadline },
      )

      expect(calldata).toEqual(
        '0x88316456000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000bb8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc4000000000000000000000000000000000000000000000000000000000000003c00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000007b',
      )
      expect(value).toEqual('0x00')
    })

    it('succeeds for increase', () => {
      const { calldata, value } = NonfungiblePositionManager.addCallParameters(
        new Position({
          pool: pool_0_1,
          tickLower: -TICK_SPACINGS[SushiSwapV3FeeAmount.MEDIUM],
          tickUpper: TICK_SPACINGS[SushiSwapV3FeeAmount.MEDIUM],
          liquidity: 1,
        }),
        { tokenId, slippageTolerance, deadline },
      )

      expect(calldata).toEqual(
        '0x219f5d1700000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007b',
      )
      expect(value).toEqual('0x00')
    })

    it('createPool', () => {
      const { calldata, value } = NonfungiblePositionManager.addCallParameters(
        new Position({
          pool: pool_0_1,
          tickLower: -TICK_SPACINGS[SushiSwapV3FeeAmount.MEDIUM],
          tickUpper: TICK_SPACINGS[SushiSwapV3FeeAmount.MEDIUM],
          liquidity: 1,
        }),
        { recipient, slippageTolerance, deadline, createPool: true },
      )

      expect(calldata).toEqual(
        '0xac9650d80000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000008413ead562000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000bb8000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000016488316456000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000bb8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc4000000000000000000000000000000000000000000000000000000000000003c00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000007b00000000000000000000000000000000000000000000000000000000',
      )
      expect(value).toEqual('0x00')
    })

    it('useNative', () => {
      const { calldata, value } = NonfungiblePositionManager.addCallParameters(
        new Position({
          pool: pool_1_weth,
          tickLower: -TICK_SPACINGS[SushiSwapV3FeeAmount.MEDIUM],
          tickUpper: TICK_SPACINGS[SushiSwapV3FeeAmount.MEDIUM],
          liquidity: 1,
        }),
        {
          recipient,
          slippageTolerance,
          deadline,
          useNative: Native.onChain(1),
        },
      )

      expect(calldata).toEqual(
        '0xac9650d800000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000001e00000000000000000000000000000000000000000000000000000000000000164883164560000000000000000000000000000000000000000000000000000000000000002000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc20000000000000000000000000000000000000000000000000000000000000bb8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc4000000000000000000000000000000000000000000000000000000000000003c00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000007b00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000412210e8a00000000000000000000000000000000000000000000000000000000',
      )
      expect(value).toEqual('0x01')
    })
  })

  describe('#collectCallParameters', () => {
    const token2 = new Token({
      chainId: 1,
      address: '0x0000000000000000000000000000000000000003',
      decimals: 18,
      symbol: 't2',
      name: 'token2',
    })

    it('works', () => {
      const { calldata, value } =
        NonfungiblePositionManager.collectCallParameters({
          tokenId,
          expectedCurrencyOwed0: CurrencyAmount.fromRawAmount(token0, 0),
          expectedCurrencyOwed1: CurrencyAmount.fromRawAmount(token1, 0),
          recipient,
        })

      expect(calldata).toEqual(
        '0xfc6f78650000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000300000000000000000000000000000000ffffffffffffffffffffffffffffffff00000000000000000000000000000000ffffffffffffffffffffffffffffffff',
      )
      expect(value).toEqual('0x00')
    })

    it('works with eth', () => {
      const { calldata, value } =
        NonfungiblePositionManager.collectCallParameters({
          tokenId,
          expectedCurrencyOwed0: CurrencyAmount.fromRawAmount(token1, 0),
          expectedCurrencyOwed1: CurrencyAmount.fromRawAmount(
            Native.onChain(1),
            0,
          ),
          recipient,
        })

      expect(calldata).toEqual(
        '0xac9650d8000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000012000000000000000000000000000000000000000000000000000000000000001a00000000000000000000000000000000000000000000000000000000000000084fc6f78650000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffff00000000000000000000000000000000ffffffffffffffffffffffffffffffff00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004449404b7c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000064df2ab5bb00000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000300000000000000000000000000000000000000000000000000000000',
      )
      expect(value).toEqual('0x00')
    })

    it('works with multiple collections', () => {
      const { calldata, value } =
        NonfungiblePositionManager.collectCallParameters([
          {
            tokenId: 1,
            expectedCurrencyOwed0: CurrencyAmount.fromRawAmount(token0, 0),
            expectedCurrencyOwed1: CurrencyAmount.fromRawAmount(token1, 0),
            recipient,
          },
          {
            tokenId: 2,
            expectedCurrencyOwed0: CurrencyAmount.fromRawAmount(token0, 0),
            expectedCurrencyOwed1: CurrencyAmount.fromRawAmount(token2, 0),
            recipient,
          },
        ])

      const [[encodedCollect1Params, encodedCollect2Params]] =
        decodeAbiParameters(
          multicallAbi_multicall[0].inputs,
          `0x${calldata.slice(10)}`,
        )

      const collect1Params = decodeCollectParams(encodedCollect1Params)
      const collect2Params = decodeCollectParams(encodedCollect2Params)

      expect(collect1Params).toEqual([
        {
          tokenId: 1n,
          recipient,
          amount0Max: maxUint128,
          amount1Max: maxUint128,
        },
      ])

      expect(collect2Params).toEqual([
        {
          tokenId: 2n,
          recipient,
          amount0Max: maxUint128,
          amount1Max: maxUint128,
        },
      ])

      expect(value).toEqual('0x00')
    })

    it('aggregates multiple eth collections', () => {
      const { calldata, value } =
        NonfungiblePositionManager.collectCallParameters([
          {
            tokenId: 1,
            expectedCurrencyOwed0: CurrencyAmount.fromRawAmount(token0, 1n),
            expectedCurrencyOwed1: CurrencyAmount.fromRawAmount(
              Native.onChain(1),
              1n,
            ),
            recipient,
          },
          {
            tokenId: 2,
            expectedCurrencyOwed0: CurrencyAmount.fromRawAmount(token1, 2n),
            expectedCurrencyOwed1: CurrencyAmount.fromRawAmount(
              Native.onChain(1),
              2n,
            ),
            recipient,
          },
          {
            tokenId: 3,
            expectedCurrencyOwed0: CurrencyAmount.fromRawAmount(token2, 3n),
            expectedCurrencyOwed1: CurrencyAmount.fromRawAmount(
              Native.onChain(1),
              3n,
            ),
            recipient,
          },
        ])

      const [
        [
          encodedCollect1Params,
          encodedCollect2Params,
          encodedCollect3Params,
          encodedUnwrapParams,
          encodedSweep1Params,
          encodedSweep2Params,
          encodedSweep3Params,
        ],
      ] = decodeAbiParameters(
        multicallAbi_multicall[0].inputs,
        `0x${calldata.slice(10)}`,
      )

      const [
        collect1Params,
        collect2Params,
        collect3Params,
        unwrapParams,
        sweep1Params,
        sweep2Params,
        sweep3Params,
      ] = [
        decodeCollectParams(encodedCollect1Params),
        decodeCollectParams(encodedCollect2Params),
        decodeCollectParams(encodedCollect3Params),
        decodeUnwrapParams(encodedUnwrapParams),
        decodeSweepParams(encodedSweep1Params),
        decodeSweepParams(encodedSweep2Params),
        decodeSweepParams(encodedSweep3Params),
      ]

      expect(collect1Params).toEqual([
        {
          tokenId: 1n,
          recipient: zeroAddress,
          amount0Max: maxUint128,
          amount1Max: maxUint128,
        },
      ])
      expect(collect2Params).toEqual([
        {
          tokenId: 2n,
          recipient: zeroAddress,
          amount0Max: maxUint128,
          amount1Max: maxUint128,
        },
      ])
      expect(collect3Params).toEqual([
        {
          tokenId: 3n,
          recipient: zeroAddress,
          amount0Max: maxUint128,
          amount1Max: maxUint128,
        },
      ])

      expect(unwrapParams).toEqual([6n, recipient])

      expect(sweep1Params).toEqual([token0.address, 1n, recipient])
      expect(sweep2Params).toEqual([token1.address, 2n, recipient])
      expect(sweep3Params).toEqual([token2.address, 3n, recipient])

      expect(value).toEqual('0x00')
    })

    it('works with multiple tokens including eth and non-eth', () => {
      const { calldata, value } =
        NonfungiblePositionManager.collectCallParameters([
          {
            tokenId: 1,
            expectedCurrencyOwed0: CurrencyAmount.fromRawAmount(token0, 0),
            expectedCurrencyOwed1: CurrencyAmount.fromRawAmount(token1, 0),
            recipient,
          },
          {
            tokenId: 2,
            expectedCurrencyOwed0: CurrencyAmount.fromRawAmount(token1, 1n),
            expectedCurrencyOwed1: CurrencyAmount.fromRawAmount(
              Native.onChain(1),
              1n,
            ),
            recipient,
          },
        ])

      const [
        [
          encodedCollect1Params,
          encodedCollect2Params,
          encodedUnwrapParams,
          encodedSweep1Params,
        ],
      ] = decodeAbiParameters(
        multicallAbi_multicall[0].inputs,
        `0x${calldata.slice(10)}`,
      )

      const [collect1Params, collect2Params, unwrapParams, sweep1Params] = [
        decodeCollectParams(encodedCollect1Params),
        decodeCollectParams(encodedCollect2Params),
        decodeUnwrapParams(encodedUnwrapParams),
        decodeSweepParams(encodedSweep1Params),
      ]

      expect(collect1Params).toEqual([
        {
          tokenId: 1n,
          recipient,
          amount0Max: maxUint128,
          amount1Max: maxUint128,
        },
      ])
      expect(collect2Params).toEqual([
        {
          tokenId: 2n,
          recipient: zeroAddress,
          amount0Max: maxUint128,
          amount1Max: maxUint128,
        },
      ])

      expect(unwrapParams).toEqual([1n, recipient])

      expect(sweep1Params).toEqual([token1.address, 1n, recipient])

      expect(value).toEqual('0x00')
    })

    it('aggregates tokens and eth by recipient', () => {
      const recipient2 = '0x0000000000000000000000000000000000000004'

      const { calldata, value } =
        NonfungiblePositionManager.collectCallParameters([
          {
            tokenId: 1,
            expectedCurrencyOwed0: CurrencyAmount.fromRawAmount(token0, 1n),
            expectedCurrencyOwed1: CurrencyAmount.fromRawAmount(
              Native.onChain(1),
              2n,
            ),
            recipient: recipient,
          },
          {
            tokenId: 2,
            expectedCurrencyOwed0: CurrencyAmount.fromRawAmount(
              Native.onChain(1),
              4n,
            ),
            expectedCurrencyOwed1: CurrencyAmount.fromRawAmount(token0, 3n),
            recipient: recipient,
          },
          {
            tokenId: 3,
            expectedCurrencyOwed0: CurrencyAmount.fromRawAmount(token1, 5n),
            expectedCurrencyOwed1: CurrencyAmount.fromRawAmount(
              Native.onChain(1),
              6n,
            ),
            recipient: recipient2,
          },
          {
            tokenId: 4,
            expectedCurrencyOwed0: CurrencyAmount.fromRawAmount(
              Native.onChain(1),
              8n,
            ),
            expectedCurrencyOwed1: CurrencyAmount.fromRawAmount(token1, 7n),
            recipient: recipient2,
          },
        ])

      const [
        [
          encodedCollect1Params,
          encodedCollect2Params,
          encodedCollect3Params,
          encodedCollect4Params,
          encodedUnwrap1Params,
          encodedUnwrap2Params,
          encodedSweep1Params,
          encodedSweep2Params,
        ],
      ] = decodeAbiParameters(
        multicallAbi_multicall[0].inputs,
        `0x${calldata.slice(10)}`,
      )

      const [
        collect1Params,
        collect2Params,
        collect3Params,
        collect4Params,
        unwrap1Params,
        unwrap2Params,
        sweep1Params,
        sweep2Params,
      ] = [
        decodeCollectParams(encodedCollect1Params),
        decodeCollectParams(encodedCollect2Params),
        decodeCollectParams(encodedCollect3Params),
        decodeCollectParams(encodedCollect4Params),
        decodeUnwrapParams(encodedUnwrap1Params),
        decodeUnwrapParams(encodedUnwrap2Params),
        decodeSweepParams(encodedSweep1Params),
        decodeSweepParams(encodedSweep2Params),
      ]

      expect(collect1Params).toEqual([
        {
          tokenId: 1n,
          recipient: zeroAddress,
          amount0Max: maxUint128,
          amount1Max: maxUint128,
        },
      ])
      expect(collect2Params).toEqual([
        {
          tokenId: 2n,
          recipient: zeroAddress,
          amount0Max: maxUint128,
          amount1Max: maxUint128,
        },
      ])
      expect(collect3Params).toEqual([
        {
          tokenId: 3n,
          recipient: zeroAddress,
          amount0Max: maxUint128,
          amount1Max: maxUint128,
        },
      ])
      expect(collect4Params).toEqual([
        {
          tokenId: 4n,
          recipient: zeroAddress,
          amount0Max: maxUint128,
          amount1Max: maxUint128,
        },
      ])

      expect(unwrap1Params).toEqual([6n, recipient]) // 2n + 4n = 6n for recipient1
      expect(unwrap2Params).toEqual([14n, recipient2]) // 6n + 8n = 14n for recipient2

      expect(sweep1Params).toEqual([token0.address, 4n, recipient]) // 1n + 3n = 4n of token0 for recipient1
      expect(sweep2Params).toEqual([token1.address, 12n, recipient2]) // 5n + 7n = 12n of token1 for recipient2

      expect(value).toEqual('0x00')
    })
  })

  describe('#removeCallParameters', () => {
    it('throws for 0 liquidity', () => {
      expect(() =>
        NonfungiblePositionManager.removeCallParameters(
          new Position({
            pool: pool_0_1,
            tickLower: -TICK_SPACINGS[SushiSwapV3FeeAmount.MEDIUM],
            tickUpper: TICK_SPACINGS[SushiSwapV3FeeAmount.MEDIUM],
            liquidity: 0,
          }),
          {
            tokenId,
            liquidityPercentage: new Percent(1),
            slippageTolerance,
            deadline,
            collectOptions: {
              expectedCurrencyOwed0: CurrencyAmount.fromRawAmount(token0, 0),
              expectedCurrencyOwed1: CurrencyAmount.fromRawAmount(token1, 0),
              recipient,
            },
          },
        ),
      ).toThrow('ZERO_LIQUIDITY')
    })

    it('throws for 0 liquidity from small percentage', () => {
      expect(() =>
        NonfungiblePositionManager.removeCallParameters(
          new Position({
            pool: pool_0_1,
            tickLower: -TICK_SPACINGS[SushiSwapV3FeeAmount.MEDIUM],
            tickUpper: TICK_SPACINGS[SushiSwapV3FeeAmount.MEDIUM],
            liquidity: 50,
          }),
          {
            tokenId,
            liquidityPercentage: new Percent(1, 100),
            slippageTolerance,
            deadline,
            collectOptions: {
              expectedCurrencyOwed0: CurrencyAmount.fromRawAmount(token0, 0),
              expectedCurrencyOwed1: CurrencyAmount.fromRawAmount(token1, 0),
              recipient,
            },
          },
        ),
      ).toThrow('ZERO_LIQUIDITY')
    })

    it('throws for bad burn', () => {
      expect(() =>
        NonfungiblePositionManager.removeCallParameters(
          new Position({
            pool: pool_0_1,
            tickLower: -TICK_SPACINGS[SushiSwapV3FeeAmount.MEDIUM],
            tickUpper: TICK_SPACINGS[SushiSwapV3FeeAmount.MEDIUM],
            liquidity: 50,
          }),
          {
            tokenId,
            liquidityPercentage: new Percent(99, 100),
            slippageTolerance,
            deadline,
            burnToken: true,
            collectOptions: {
              expectedCurrencyOwed0: CurrencyAmount.fromRawAmount(token0, 0),
              expectedCurrencyOwed1: CurrencyAmount.fromRawAmount(token1, 0),
              recipient,
            },
          },
        ),
      ).toThrow('CANNOT_BURN')
    })

    it('works', () => {
      const { calldata, value } =
        NonfungiblePositionManager.removeCallParameters(
          new Position({
            pool: pool_0_1,
            tickLower: -TICK_SPACINGS[SushiSwapV3FeeAmount.MEDIUM],
            tickUpper: TICK_SPACINGS[SushiSwapV3FeeAmount.MEDIUM],
            liquidity: 100,
          }),
          {
            tokenId,
            liquidityPercentage: new Percent(1),
            slippageTolerance,
            deadline,
            collectOptions: {
              expectedCurrencyOwed0: CurrencyAmount.fromRawAmount(token0, 0),
              expectedCurrencyOwed1: CurrencyAmount.fromRawAmount(token1, 0),
              recipient,
            },
          },
        )

      expect(calldata).toEqual(
        '0xac9650d8000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000012000000000000000000000000000000000000000000000000000000000000000a40c49ccbe0000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000006400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007b000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000084fc6f78650000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000300000000000000000000000000000000ffffffffffffffffffffffffffffffff00000000000000000000000000000000ffffffffffffffffffffffffffffffff00000000000000000000000000000000000000000000000000000000',
      )
      expect(value).toEqual('0x00')
    })

    it('works for partial', () => {
      const { calldata, value } =
        NonfungiblePositionManager.removeCallParameters(
          new Position({
            pool: pool_0_1,
            tickLower: -TICK_SPACINGS[SushiSwapV3FeeAmount.MEDIUM],
            tickUpper: TICK_SPACINGS[SushiSwapV3FeeAmount.MEDIUM],
            liquidity: 100,
          }),
          {
            tokenId,
            liquidityPercentage: new Percent(1, 2),
            slippageTolerance,
            deadline,
            collectOptions: {
              expectedCurrencyOwed0: CurrencyAmount.fromRawAmount(token0, 0),
              expectedCurrencyOwed1: CurrencyAmount.fromRawAmount(token1, 0),
              recipient,
            },
          },
        )

      expect(calldata).toEqual(
        '0xac9650d8000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000012000000000000000000000000000000000000000000000000000000000000000a40c49ccbe0000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000003200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007b000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000084fc6f78650000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000300000000000000000000000000000000ffffffffffffffffffffffffffffffff00000000000000000000000000000000ffffffffffffffffffffffffffffffff00000000000000000000000000000000000000000000000000000000',
      )
      expect(value).toEqual('0x00')
    })

    it('works with eth', () => {
      const ethAmount = CurrencyAmount.fromRawAmount(Native.onChain(1), 0)
      const tokenAmount = CurrencyAmount.fromRawAmount(token1, 0)

      const { calldata, value } =
        NonfungiblePositionManager.removeCallParameters(
          new Position({
            pool: pool_1_weth,
            tickLower: -TICK_SPACINGS[SushiSwapV3FeeAmount.MEDIUM],
            tickUpper: TICK_SPACINGS[SushiSwapV3FeeAmount.MEDIUM],
            liquidity: 100,
          }),
          {
            tokenId,
            liquidityPercentage: new Percent(1),
            slippageTolerance,
            deadline,
            collectOptions: {
              expectedCurrencyOwed0: pool_1_weth.token0.equals(token1)
                ? tokenAmount
                : ethAmount,
              expectedCurrencyOwed1: pool_1_weth.token0.equals(token1)
                ? ethAmount
                : tokenAmount,
              recipient,
            },
          },
        )

      expect(calldata).toEqual(
        '0xac9650d80000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000160000000000000000000000000000000000000000000000000000000000000022000000000000000000000000000000000000000000000000000000000000002a000000000000000000000000000000000000000000000000000000000000000a40c49ccbe0000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000006400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007b000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000084fc6f78650000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffff00000000000000000000000000000000ffffffffffffffffffffffffffffffff00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004449404b7c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000064df2ab5bb00000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000300000000000000000000000000000000000000000000000000000000',
      )
      expect(value).toEqual('0x00')
    })

    it('works for partial with eth', () => {
      const ethAmount = CurrencyAmount.fromRawAmount(Native.onChain(1), 0)
      const tokenAmount = CurrencyAmount.fromRawAmount(token1, 0)

      const { calldata, value } =
        NonfungiblePositionManager.removeCallParameters(
          new Position({
            pool: pool_1_weth,
            tickLower: -TICK_SPACINGS[SushiSwapV3FeeAmount.MEDIUM],
            tickUpper: TICK_SPACINGS[SushiSwapV3FeeAmount.MEDIUM],
            liquidity: 100,
          }),
          {
            tokenId,
            liquidityPercentage: new Percent(1, 2),
            slippageTolerance,
            deadline,
            collectOptions: {
              expectedCurrencyOwed0: pool_1_weth.token0.equals(token1)
                ? tokenAmount
                : ethAmount,
              expectedCurrencyOwed1: pool_1_weth.token0.equals(token1)
                ? ethAmount
                : tokenAmount,
              recipient,
            },
          },
        )

      expect(calldata).toEqual(
        '0xac9650d80000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000160000000000000000000000000000000000000000000000000000000000000022000000000000000000000000000000000000000000000000000000000000002a000000000000000000000000000000000000000000000000000000000000000a40c49ccbe0000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000003200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007b000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000084fc6f78650000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffff00000000000000000000000000000000ffffffffffffffffffffffffffffffff00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004449404b7c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000064df2ab5bb00000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000300000000000000000000000000000000000000000000000000000000',
      )
      expect(value).toEqual('0x00')
    })
  })
  describe('#safeTransferFromParameters', () => {
    it('succeeds no data param', () => {
      const options = {
        sender,
        recipient,
        tokenId,
      }
      const { calldata, value } =
        NonfungiblePositionManager.safeTransferFromParameters(options)

      expect(calldata).toEqual(
        '0x42842e0e000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000000000000000000000001',
      )
      expect(value).toEqual('0x00')
    })
    it('succeeds data param', () => {
      const data = '0x0000000000000000000000000000000000009004' as const
      const options = {
        sender,
        recipient,
        tokenId,
        data,
      }
      const { calldata, value } =
        NonfungiblePositionManager.safeTransferFromParameters(options)

      expect(calldata).toEqual(
        '0xb88d4fde000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000140000000000000000000000000000000000009004000000000000000000000000',
      )
      expect(value).toEqual('0x00')
    })
  })
})
