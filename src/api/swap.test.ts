import { describe, expect, it } from 'vitest'
import { getSwap } from './swap.js'

const baseSwapRequest = {
  chainId: 1,
  tokenIn: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
  tokenOut: '0x6B3595068778DD592e39A122f4f5a5cF09C90fE2',
  amount: 1000000000000000000n,
  maxSlippage: 0.005,
  gasPrice: 8563095715n,
} as const

const to = '0x8f54C8c2df62c94772ac14CcFc85603742976312' as const

describe('getSwap', () => {
  it('should return a swap when to is omitted', async () => {
    const result = await getSwap(baseSwapRequest)

    expect(result).include({ status: 'Success' })
  })
  it('should return a swap when to is included', async () => {
    const result = await getSwap({
      ...baseSwapRequest,
      to,
    })

    expect(result).include({ status: 'Success' })
  })
  it('should return a swap tx when includeTransaction is true', async () => {
    const result = await getSwap({
      ...baseSwapRequest,
      to,
      includeTransaction: true,
    })

    expect(result).include({ status: 'Success' })
    expect(result).include.keys('tx')
  })
})
