import { describe, expect, it } from 'vitest'
import { EvmToken } from '../../../../evm/currency/token.js'
import { SushiSwapV3FeeAmount } from '../../../config/index.js'
import { computeSushiSwapV3PoolAddress } from './computePoolAddress.js'

describe('#computePoolAddress', () => {
  const factoryAddress = '0x1111111111111111111111111111111111111111'
  it('should correctly compute the pool address', () => {
    const tokenA = new EvmToken({
      chainId: 1,
      address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
      decimals: 18,
      symbol: 'USDC',
      name: 'USD Coin',
    })
    const tokenB = new EvmToken({
      chainId: 1,
      address: '0x6b175474e89094c44da98b954eedeac495271d0f',
      decimals: 18,
      symbol: 'DAI',
      name: 'Dai Stablecoin',
    })
    const result = computeSushiSwapV3PoolAddress({
      factoryAddress,
      fee: SushiSwapV3FeeAmount.LOW,
      tokenA,
      tokenB,
    })

    expect(result).toEqual('0x90b1b09a9715cadbfd9331b3a7652b24bfbefd32')
  })

  it('should correctly compute the pool address', () => {
    const USDC = new EvmToken({
      chainId: 1,
      address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
      decimals: 18,
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
    let tokenA = USDC
    let tokenB = DAI
    const resultA = computeSushiSwapV3PoolAddress({
      factoryAddress,
      fee: SushiSwapV3FeeAmount.LOW,
      tokenA,
      tokenB,
    })

    tokenA = DAI

    tokenB = USDC
    const resultB = computeSushiSwapV3PoolAddress({
      factoryAddress,
      fee: SushiSwapV3FeeAmount.LOW,
      tokenA,
      tokenB,
    })

    expect(resultA).toEqual(resultB)
  })
})
