import { describe, expect, it } from 'vitest'
import { Price } from '../../../generic/currency/price.js'
import { Amount } from '../../../generic/index.js'
import { EvmChainId } from '../../chain/chains.js'
import { WETH9 } from '../../config/index.js'
import { EvmToken } from '../../currency/token.js'
import { InsufficientInputAmountError } from '../../dex/errors.js'
import { computeSushiSwapV2PoolAddress } from './compute-sushiswap-v2-pool-address.js'
import { SushiSwapV2Pool } from './sushiswap-v2-pool.js'

// import { EvmChainId, CurrencyAmount, Price, Token, V2_FACTORY_ADDRESSES, WETH9 } from '@uniswap/sdk-core'

describe('computePairAddress', () => {
  it('should correctly compute the pool address', () => {
    const tokenA = new EvmToken({
      chainId: EvmChainId.ETHEREUM,
      address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
      decimals: 18,
      symbol: 'USDC',
      name: 'USD Coin',
    })
    const tokenB = new EvmToken({
      chainId: EvmChainId.ETHEREUM,
      address: '0x6b175474e89094c44da98b954eedeac495271d0f',
      decimals: 18,
      symbol: 'DAI',
      name: 'DAI Stablecoin',
    })
    const result = computeSushiSwapV2PoolAddress({
      factoryAddress: '0x1111111111111111111111111111111111111111',
      tokenA,
      tokenB,
    })

    expect(result).toEqual('0xbcffcd50d09095e48cc5ea02d564caee61abc004')
  })
  it('should give same result regardless of token order', () => {
    const USDC = new EvmToken({
      chainId: EvmChainId.ETHEREUM,
      address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
      decimals: 18,
      symbol: 'USDC',
      name: 'USD Coin',
    })
    const DAI = new EvmToken({
      chainId: EvmChainId.ETHEREUM,
      address: '0x6b175474e89094c44da98b954eedeac495271d0f',
      decimals: 18,
      symbol: 'DAI',
      name: 'DAI Stablecoin',
    })
    let tokenA = USDC
    let tokenB = DAI
    const resultA = computeSushiSwapV2PoolAddress({
      factoryAddress: '0x1111111111111111111111111111111111111111',
      tokenA,
      tokenB,
    })

    tokenA = DAI
    tokenB = USDC
    const resultB = computeSushiSwapV2PoolAddress({
      factoryAddress: '0x1111111111111111111111111111111111111111',
      tokenA,
      tokenB,
    })

    expect(resultA).toEqual(resultB)
  })
})

describe('Pair', () => {
  const USDC = new EvmToken({
    chainId: EvmChainId.ETHEREUM,
    address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    decimals: 18,
    symbol: 'USDC',
    name: 'USD Coin',
  })
  const DAI = new EvmToken({
    chainId: EvmChainId.ETHEREUM,
    address: '0x6b175474e89094c44da98b954eedeac495271d0f',
    decimals: 18,
    symbol: 'DAI',
    name: 'DAI Stablecoin',
  })

  describe('constructor', () => {
    it('cannot be used for tokens on different chains', () => {
      expect(
        () =>
          new SushiSwapV2Pool(
            new Amount(USDC, '100'),
            new Amount(WETH9[EvmChainId.SEPOLIA], '100'),
          ),
      ).toThrow('Invariant failed: Tokens must be on the same chain')
    })
  })

  describe('#getAddress', () => {
    it('returns the correct address', () => {
      expect(SushiSwapV2Pool.getAddress(USDC, DAI)).toEqual(
        '0xaaf5110db6e744ff70fb339de037b990a20bdace',
      )
    })
  })

  describe('#token0', () => {
    it('always is the token that sorts before', () => {
      expect(
        new SushiSwapV2Pool(new Amount(USDC, '100'), new Amount(DAI, '100'))
          .token0,
      ).toEqual(DAI)
      expect(
        new SushiSwapV2Pool(new Amount(DAI, '100'), new Amount(USDC, '100'))
          .token0,
      ).toEqual(DAI)
    })
  })
  describe('#token1', () => {
    it('always is the token that sorts after', () => {
      expect(
        new SushiSwapV2Pool(new Amount(USDC, '100'), new Amount(DAI, '100'))
          .token1,
      ).toEqual(USDC)
      expect(
        new SushiSwapV2Pool(new Amount(DAI, '100'), new Amount(USDC, '100'))
          .token1,
      ).toEqual(USDC)
    })
  })
  describe('#reserve0', () => {
    it('always comes from the token that sorts before', () => {
      expect(
        new SushiSwapV2Pool(new Amount(USDC, '100'), new Amount(DAI, '101'))
          .reserve0,
      ).toEqual(new Amount(DAI, '101'))
      expect(
        new SushiSwapV2Pool(new Amount(DAI, '101'), new Amount(USDC, '100'))
          .reserve0,
      ).toEqual(new Amount(DAI, '101'))
    })
  })
  describe('#reserve1', () => {
    it('always comes from the token that sorts after', () => {
      expect(
        new SushiSwapV2Pool(new Amount(USDC, '100'), new Amount(DAI, '101'))
          .reserve1,
      ).toEqual(new Amount(USDC, '100'))
      expect(
        new SushiSwapV2Pool(new Amount(DAI, '101'), new Amount(USDC, '100'))
          .reserve1,
      ).toEqual(new Amount(USDC, '100'))
    })
  })

  describe('#token0Price', () => {
    it('returns price of token0 in terms of token1', () => {
      expect(
        new SushiSwapV2Pool(new Amount(USDC, '101'), new Amount(DAI, '100'))
          .token0Price,
      ).toEqual(
        new Price({
          base: DAI,
          quote: USDC,
          denominator: '100',
          numerator: '101',
        }),
      )
      expect(
        new SushiSwapV2Pool(new Amount(DAI, '100'), new Amount(USDC, '101'))
          .token0Price,
      ).toEqual(
        new Price({
          base: DAI,
          quote: USDC,
          denominator: '100',
          numerator: '101',
        }),
      )
    })
  })

  describe('#token1Price', () => {
    it('returns price of token1 in terms of token0', () => {
      expect(
        new SushiSwapV2Pool(new Amount(USDC, '101'), new Amount(DAI, '100'))
          .token1Price,
      ).toEqual(
        new Price({
          base: USDC,
          quote: DAI,
          denominator: '101',
          numerator: '100',
        }),
      )
      expect(
        new SushiSwapV2Pool(new Amount(DAI, '100'), new Amount(USDC, '101'))
          .token1Price,
      ).toEqual(
        new Price({
          base: USDC,
          quote: DAI,
          denominator: '101',
          numerator: '100',
        }),
      )
    })
  })

  describe('#priceOf', () => {
    const pair = new SushiSwapV2Pool(
      new Amount(USDC, '101'),
      new Amount(DAI, '100'),
    )
    it('returns price of token in terms of other token', () => {
      expect(pair.priceOf(DAI)).toEqual(pair.token0Price)
      expect(pair.priceOf(USDC)).toEqual(pair.token1Price)
    })

    it('throws if invalid token', () => {
      expect(() => pair.priceOf(WETH9[1])).toThrow('TOKEN')
    })
  })

  describe('#reserveOf', () => {
    it('returns reserves of the given token', () => {
      expect(
        new SushiSwapV2Pool(
          new Amount(USDC, '100'),
          new Amount(DAI, '101'),
        ).reserveOf(USDC),
      ).toEqual(new Amount(USDC, '100'))
      expect(
        new SushiSwapV2Pool(
          new Amount(DAI, '101'),
          new Amount(USDC, '100'),
        ).reserveOf(USDC),
      ).toEqual(new Amount(USDC, '100'))
    })

    it('throws if not in the pair', () => {
      expect(() =>
        new SushiSwapV2Pool(
          new Amount(DAI, '101'),
          new Amount(USDC, '100'),
        ).reserveOf(WETH9[1]),
      ).toThrow('TOKEN')
    })
  })

  describe('#chainId', () => {
    it('returns the token0 chainId', () => {
      expect(
        new SushiSwapV2Pool(new Amount(USDC, '100'), new Amount(DAI, '100'))
          .chainId,
      ).toEqual(1)
      expect(
        new SushiSwapV2Pool(new Amount(DAI, '100'), new Amount(USDC, '100'))
          .chainId,
      ).toEqual(1)
    })
  })
  describe('#involvesToken', () => {
    it('returns true for either token', () => {
      expect(
        new SushiSwapV2Pool(
          new Amount(USDC, '100'),
          new Amount(DAI, '100'),
        ).involvesToken(USDC),
      ).toEqual(true)
      expect(
        new SushiSwapV2Pool(
          new Amount(USDC, '100'),
          new Amount(DAI, '100'),
        ).involvesToken(DAI),
      ).toEqual(true)
      expect(
        new SushiSwapV2Pool(
          new Amount(USDC, '100'),
          new Amount(DAI, '100'),
        ).involvesToken(WETH9[1]),
      ).toEqual(false)
    })
  })
  describe('getInputAmount and getOutputAmount', () => {
    // const BLASTBuyFeeBps = 400n
    // const BLASTSellFeeBps = 10000n
    const BLAST = new EvmToken({
      chainId: EvmChainId.ETHEREUM,
      address: '0x3ed643e9032230f01c6c36060e305ab53ad3b482',
      decimals: 18,
      symbol: 'BLAST',
      name: 'BLASTERS',
      // buyFeeBps: BLASTBuyFeeBps,
      // sellFeeBps: BLASTSellFeeBps,
    })
    const BLAST_WIHTOUT_TAX = new EvmToken({
      chainId: EvmChainId.ETHEREUM,
      address: '0x3ed643e9032230f01c6c36060e305ab53ad3b482',
      decimals: 18,
      symbol: 'BLAST',
      name: 'BLASTERS',
    })
    // const BLASTERSBuyFeeBps = 300n
    // const BLASTERSSellFeeBps = 350n
    const BLASTERS = new EvmToken({
      chainId: EvmChainId.ETHEREUM,
      address: '0xab98093c7232e98a47d7270ce0c1c2106f61c73b',
      decimals: 9,
      symbol: 'BLAST',
      name: 'BLASTERS',
      // buyFeeBps: BLASTERSBuyFeeBps,
      // sellFeeBps: BLASTERSSellFeeBps,
    })
    const BLASTERS_WITHOUT_TAX = new EvmToken({
      chainId: EvmChainId.ETHEREUM,
      address: '0xab98093c7232e98a47d7270ce0c1c2106f61c73b',
      decimals: 9,
      symbol: 'BLAST',
      name: 'BLASTERS',
    })

    // let calculateFotFees = false

    // describe('when calculating FOT fees', () => {
    //   beforeEach(() => {
    //     calculateFotFees = true
    //   })

    //   describe('getOutputAmount', () => {
    //     it('getOutputAmount for input token BLASTERS and output token BLAST', () => {
    //       const reserveBlasterAmount = new Amount(
    //         BLASTERS,
    //         '10000',
    //       )
    //       const reserveBlastAmount = new Amount(
    //         BLAST,
    //         '10000',
    //       )

    //       const pair = new SushiSwapV2Pool(reserveBlasterAmount, reserveBlastAmount)

    //       const inputBlastersAmount = new Amount(
    //         BLASTERS_WITHOUT_TAX,
    //         '100',
    //       )
    //       const [outputBlastAmount] = pair.getOutputAmount(
    //         inputBlastersAmount,
    //         calculateFotFees,
    //       )

    //       // Theoretical amount out:
    //       // (10000 * 997 * 100 * (1 - 3.5%) / (10000 * 1000 + 997 * 100 * (1 - 3.5%))) * (1 - 4%)
    //       // = 91.48
    //       //
    //       // However in practice, we have round down of precisions in multiple steps
    //       // hence the amount out will be slightly less than 91.48:
    //       //
    //       // inputAmount = 100
    //       // percentAfterSellFeesInDecimal = fraction(9650, 10000)
    //       // inputAmountAfterTax = 100 * fraction(9650, 10000) = 96.5 = 96 (rounded down)
    //       // inputAmountWithFeeAndAfterTax = 96 * 997 = 95712
    //       // numerator = 95712 * 10000 = 957120000
    //       // denominator = 10000 * 1000 + 95712 = 10095712
    //       // outputAmount = 957120000 / 10095712 = 94.8046061536 = 94 (rounded down)
    //       // buyFeePercentInDecimal = fraction(400, 10000)
    //       // percentAfterBuyFeesInDecimal = fraction(9600, 10000)
    //       // outputAmountAfterTax = 94 * fraction(9600, 10000)
    //       //                     = 94 * 0.96
    //       //                     = 90.24
    //       //                     = 90 (rounded down)
    //       const expectedOutputBlastAmount = '0.00000000000000009'
    //       expect(outputBlastAmount.toExact()).toEqual(expectedOutputBlastAmount)
    //     })

    //     it('getInputAmount for input token BLASTERS and output token BLAST', () => {
    //       const reserveBlasterAmount = new Amount(
    //         BLASTERS,
    //         '10000',
    //       )
    //       const reserveBlastAmount = new Amount(
    //         BLAST,
    //         '10000',
    //       )

    //       const pair = new SushiSwapV2Pool(reserveBlasterAmount, reserveBlastAmount)

    //       const outputBlastAmount = new Amount(
    //         BLAST_WIHTOUT_TAX,
    //         '91',
    //       )
    //       const [inputBlasterAmount] = pair.getInputAmount(
    //         outputBlastAmount,
    //         calculateFotFees,
    //       )

    //       // Theoretical amount in:
    //       // 10000 * 100 * (1 - 4%) * 1000 / ((10000 - 100 * (1 - 4%)) * 997) / (1 - 3.5%)
    //       // = 100.7483934892
    //       //
    //       // However in practice, we have round up of precisions in multiple steps
    //       // hence the amount out will be slightly more than 100.7483934892:
    //       //
    //       // buyFeePercentInDecimal = fraction(400, 10000)
    //       // percentAfterBuyFeesInDecimal = 1 - fraction(400, 10000) = fraction(9600, 10000)
    //       // outputAmountBeforeTax = 91 / fraction(960000, 10000) + 1
    //       //                     = 91 / 0.96 + 1
    //       //                     = 94.7916666667 + 1
    //       //                     = 94 (rounded down) + 1
    //       //                     = 95 (rounded up)
    //       // numerator = 10000 * 95 * 1000 = 950000000
    //       // denominator = (10000 - 95) * 997 = 9875285
    //       // inputAmount = 950000000 / 9875285 + 1
    //       //             = 96.1997552476 + 1
    //       //             = 96 (rounded down) + 1
    //       //             = 97 (rounded up)
    //       // sellFeePercentInDecimal = fraction(350, 10000)
    //       // percentAfterSellFeesInDecimal = 1 - fraction(350, 10000) = fraction(9650, 10000)
    //       // inputAmountBeforeTax = (97 / fraction(9650, 10000)) + 1
    //       //                     = (97 / 0.965) + 1
    //       //                     = 100.518134715 + 1
    //       //                     = 100 (rounded down) + 1
    //       //                     = 101
    //       const expectedInputBlasterAmount = '0.000000101'
    //       expect(inputBlasterAmount.toExact()).toEqual(
    //         expectedInputBlasterAmount,
    //       )
    //     })
    //   })
    // })

    describe('when NOT calculating FOT fees', () => {
      describe('getOutputAmount', () => {
        it('getOutputAmount for input token BLASTERS and output token BLAST', () => {
          const reserveBlasterAmount = new Amount(BLASTERS, '10000')
          const reserveBlastAmount = new Amount(BLAST, '10000')

          const pair = new SushiSwapV2Pool(
            reserveBlasterAmount,
            reserveBlastAmount,
          )

          const inputBlastersAmount = new Amount(BLASTERS_WITHOUT_TAX, '100')
          const [outputBlastAmount] = pair.getOutputAmount(inputBlastersAmount)

          const expectedOutputBlastAmount = '0.000000000000000098'
          expect(outputBlastAmount.toString()).toEqual(
            expectedOutputBlastAmount,
          )
        })

        it('getInputAmount for input token BLASTERS and output token BLAST', () => {
          const reserveBlasterAmount = new Amount(BLASTERS, '10000')
          const reserveBlastAmount = new Amount(BLAST, '10000')

          const pair = new SushiSwapV2Pool(
            reserveBlasterAmount,
            reserveBlastAmount,
          )

          const outputBlastAmount = new Amount(BLAST_WIHTOUT_TAX, '91')
          const [inputBlasterAmount] = pair.getInputAmount(outputBlastAmount)

          const expectedInputBlasterAmount = '0.000000093'
          expect(inputBlasterAmount.toString()).toEqual(
            expectedInputBlasterAmount,
          )
        })
      })
    })
  })
  describe('miscellaneous', () => {
    it('getLiquidityMinted:0', async () => {
      const tokenA = new EvmToken({
        chainId: EvmChainId.ETHEREUM,
        address: '0x0000000000000000000000000000000000000001',
        decimals: 18,
        symbol: '',
        name: '',
      })
      const tokenB = new EvmToken({
        chainId: EvmChainId.ETHEREUM,
        address: '0x0000000000000000000000000000000000000002',
        decimals: 18,
        symbol: '',
        name: '',
      })
      const pair = new SushiSwapV2Pool(
        new Amount(tokenA, '0'),
        new Amount(tokenB, '0'),
      )

      expect(() => {
        pair.getLiquidityMinted(
          new Amount(pair.liquidityToken, '0'),
          new Amount(tokenA, '1000'),
          new Amount(tokenB, '1000'),
        )
      }).toThrow(InsufficientInputAmountError)

      expect(() => {
        pair.getLiquidityMinted(
          new Amount(pair.liquidityToken, '0'),
          new Amount(tokenA, '1000000'),
          new Amount(tokenB, '1'),
        )
      }).toThrow(InsufficientInputAmountError)

      const liquidity = pair.getLiquidityMinted(
        new Amount(pair.liquidityToken, '0'),
        new Amount(tokenA, '1001'),
        new Amount(tokenB, '1001'),
      )

      expect(liquidity.amount.toString()).toEqual('1')
    })

    it('getLiquidityMinted:!0', async () => {
      const tokenA = new EvmToken({
        chainId: EvmChainId.ETHEREUM,
        address: '0x0000000000000000000000000000000000000001',
        decimals: 18,
        symbol: '',
        name: '',
      })
      const tokenB = new EvmToken({
        chainId: EvmChainId.ETHEREUM,
        address: '0x0000000000000000000000000000000000000002',
        decimals: 18,
        symbol: '',
        name: '',
      })
      const pair = new SushiSwapV2Pool(
        new Amount(tokenA, '10000'),
        new Amount(tokenB, '10000'),
      )

      expect(
        pair
          .getLiquidityMinted(
            new Amount(pair.liquidityToken, '10000'),
            new Amount(tokenA, '2000'),
            new Amount(tokenB, '2000'),
          )
          .amount.toString(),
      ).toEqual('2000')
    })

    it('getLiquidityValue:!feeOn', async () => {
      const tokenA = new EvmToken({
        chainId: EvmChainId.ETHEREUM,
        address: '0x0000000000000000000000000000000000000001',
        decimals: 18,
        symbol: '',
        name: '',
      })
      const tokenB = new EvmToken({
        chainId: EvmChainId.ETHEREUM,
        address: '0x0000000000000000000000000000000000000002',
        decimals: 18,
        symbol: '',
        name: '',
      })
      const pair = new SushiSwapV2Pool(
        new Amount(tokenA, '1000'),
        new Amount(tokenB, '1000'),
      )

      {
        const liquidityValue = pair.getLiquidityValue(
          tokenA,
          new Amount(pair.liquidityToken, '1000'),
          new Amount(pair.liquidityToken, '1000'),
          false,
        )
        expect(liquidityValue.currency.isSame(tokenA)).toBe(true)
        expect(liquidityValue.amount.toString()).toBe('1000')
      }

      // 500
      {
        const liquidityValue = pair.getLiquidityValue(
          tokenA,
          new Amount(pair.liquidityToken, '1000'),
          new Amount(pair.liquidityToken, '500'),
          false,
        )
        expect(liquidityValue.currency.isSame(tokenA)).toBe(true)
        expect(liquidityValue.amount.toString()).toBe('500')
      }

      // tokenB
      {
        const liquidityValue = pair.getLiquidityValue(
          tokenB,
          new Amount(pair.liquidityToken, '1000'),
          new Amount(pair.liquidityToken, '1000'),
          false,
        )
        expect(liquidityValue.currency.isSame(tokenB)).toBe(true)
        expect(liquidityValue.amount.toString()).toBe('1000')
      }
    })

    it('getLiquidityValue:feeOn', async () => {
      const tokenA = new EvmToken({
        chainId: EvmChainId.ETHEREUM,
        address: '0x0000000000000000000000000000000000000001',
        decimals: 18,
        symbol: '',
        name: '',
      })
      const tokenB = new EvmToken({
        chainId: EvmChainId.ETHEREUM,
        address: '0x0000000000000000000000000000000000000002',
        decimals: 18,
        symbol: '',
        name: '',
      })
      const pair = new SushiSwapV2Pool(
        new Amount(tokenA, '1000'),
        new Amount(tokenB, '1000'),
      )

      const liquidityValue = pair.getLiquidityValue(
        tokenA,
        new Amount(pair.liquidityToken, '500'),
        new Amount(pair.liquidityToken, '500'),
        true,
        '250000', // 500 ** 2
      )
      expect(liquidityValue.currency.isSame(tokenA)).toBe(true)
      expect(liquidityValue.amount.toString()).toBe('917') // ceiling(1000 - (500 * (1 / 6)))
    })
  })
})
