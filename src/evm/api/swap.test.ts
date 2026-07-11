import { afterEach, describe, expect, it, vi } from 'vitest'
import { EvmChainId } from '../chain/index.js'
import { WNATIVE_ADDRESS } from '../config/tokens/index.js'
import { getSwap, type SwapRequest } from './swap.js'

const baseSwapRequest = {
  chainId: EvmChainId.ETHEREUM,
  tokenIn: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
  tokenOut: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2',
  amount: 100000000000000000n,
  maxSlippage: 0.005,
  sender: WNATIVE_ADDRESS[EvmChainId.ETHEREUM],
} as const satisfies SwapRequest

describe('getSwap', () => {
  afterEach(() => vi.unstubAllGlobals())

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

  it('rejects parameters outside the aggregator bounds', async () => {
    const fetchMock = vi.fn()
    vi.stubGlobal('fetch', fetchMock)

    await expect(
      getSwap({ ...baseSwapRequest, maxSlippage: 1 }),
    ).rejects.toThrow()
    await expect(
      getSwap({ ...baseSwapRequest, maxPriceImpact: 0 }),
    ).rejects.toThrow()
    await expect(getSwap({ ...baseSwapRequest, fee: 0.51 })).rejects.toThrow()

    expect(fetchMock).not.toHaveBeenCalled()
  })

  it('requires fee and feeReceiver together', async () => {
    const fetchMock = vi.fn()
    vi.stubGlobal('fetch', fetchMock)

    await expect(getSwap({ ...baseSwapRequest, fee: 0.003 })).rejects.toThrow(
      'Fee receiver is required',
    )
    await expect(
      getSwap({
        ...baseSwapRequest,
        feeReceiver: WNATIVE_ADDRESS[EvmChainId.ETHEREUM],
      }),
    ).rejects.toThrow('Fee is required')

    expect(fetchMock).not.toHaveBeenCalled()
  })

  it('sends a valid fractional fee and receiver', async () => {
    const fetchMock = vi.fn(async (_input: string | URL | Request) =>
      Response.json({ status: 'NoWay' }),
    )
    vi.stubGlobal('fetch', fetchMock)

    await getSwap({
      ...baseSwapRequest,
      fee: 0.003,
      feeReceiver: WNATIVE_ADDRESS[EvmChainId.ETHEREUM],
    })

    const url = new URL(fetchMock.mock.calls[0]![0] as string)
    expect(url.searchParams.get('fee')).toBe('0.003')
    expect(url.searchParams.get('feeReceiver')).toBe(
      WNATIVE_ADDRESS[EvmChainId.ETHEREUM],
    )
  })
})
