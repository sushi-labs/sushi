import { describe, expect, it } from 'vitest'
import { EvmChainId } from '~sushi/chain/index.js'
import { WNATIVE_ADDRESS } from '~sushi/currency/token-addresses.js'
import { type SwapRequest, getSwap } from './swap.js'

const baseSwapRequest = {
  chainId: EvmChainId.ETHEREUM,
  tokenIn: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
  tokenOut: '0x6B3595068778DD592e39A122f4f5a5cF09C90fE2',
  amount: 1000000000000000000n,
  maxSlippage: 0.005,
  sender: WNATIVE_ADDRESS[EvmChainId.ETHEREUM],
} as const satisfies SwapRequest

describe('getSwap', () => {
  it('should return a swap when recipient is included', async () => {
    const result = await getSwap({
      ...baseSwapRequest,
      recipient: WNATIVE_ADDRESS[EvmChainId.ETHEREUM],
    })

    expect(result).include({ status: 'Success' })
    if (result.status === 'Success') {
      expect(result.tx.gasPrice).toBeGreaterThan(0)
    }
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

  it.skip('should return a swap when url is set to staging', async () => {
    const result = await getSwap({
      ...baseSwapRequest,
      baseUrl: 'https://staging.sushi.com',
    })

    expect(result).include({ status: 'Success' })
  })
})
