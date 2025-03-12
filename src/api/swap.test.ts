import { describe, expect, it } from 'vitest'
import { getSwap } from './swap.js'

const baseSwapRequest = {
  chainId: 1,
  tokenIn: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
  tokenOut: '0x6B3595068778DD592e39A122f4f5a5cF09C90fE2',
  amount: 1000000000000000000n,
  maxSlippage: 0.005,
  gasPrice: 8563095715n,
  sender: '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045',
} as const

describe('getSwap', () => {
  it('should return a swap when recipient is included', async () => {
    const result = await getSwap({
      ...baseSwapRequest,
      recipient: '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045',
    })

    expect(result).include({ status: 'Success' })
  })

  it('should include a swap with tx.gas when simulate is true', async () => {
    const result = await getSwap({
      ...baseSwapRequest,
      simulate: true,
    })

    expect(result).include({ status: 'Success' })
    if (result.status === 'Success') {
      expect(result.tx).include.keys('gas')
    }
  })

  it.skip('should include a swap when url is set to staging true', async () => {
    const result = await getSwap({
      ...baseSwapRequest,
      baseUrl: 'https://staging.sushi.com',
    })

    expect(result).include({ status: 'Success' })
  })
})
