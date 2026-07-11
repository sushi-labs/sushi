import { afterEach, describe, expect, it, vi } from 'vitest'
import { getQuote, type QuoteRequest } from './quote.js'

const baseQuoteRequest = {
  chainId: 1,
  tokenIn: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
  tokenOut: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2',
  amount: 1000000000000000000n,
  maxSlippage: 0.005,
} as const satisfies QuoteRequest

describe('getQuote', () => {
  afterEach(() => vi.unstubAllGlobals())

  it('should return a quote', async () => {
    const result = await getQuote(baseQuoteRequest)

    expect(result).include({ status: 'Success' })
  })

  it('should return a quote with visualize when true', async () => {
    const result = await getQuote({
      ...baseQuoteRequest,
      visualize: true,
    })

    expect(result).include({ status: 'Success' })
    if (result.status === 'Success') {
      expect(result.visualization).include.keys([
        'liquidityProviders',
        'nodes',
        'links',
      ])
    }
  })

  it.skip('should return a quote when url is set to staging', async () => {
    const result = await getQuote({
      ...baseQuoteRequest,
      baseUrl: 'https://staging.sushi.com',
    })
    expect(result).include({ status: 'Success' })
  })

  it('rejects parameters outside the aggregator bounds', async () => {
    const fetchMock = vi.fn()
    vi.stubGlobal('fetch', fetchMock)

    await expect(
      getQuote({ ...baseQuoteRequest, maxSlippage: 1 }),
    ).rejects.toThrow()
    await expect(
      getQuote({ ...baseQuoteRequest, maxPriceImpact: 0 }),
    ).rejects.toThrow()
    await expect(
      getQuote({ ...baseQuoteRequest, maxPriceImpact: 1.01 }),
    ).rejects.toThrow()
    await expect(getQuote({ ...baseQuoteRequest, fee: 0.51 })).rejects.toThrow()

    expect(fetchMock).not.toHaveBeenCalled()
  })

  it('sends a fractional fee without requiring a fee receiver', async () => {
    const fetchMock = vi.fn(async (_input: string | URL | Request) =>
      Response.json({ status: 'NoWay' }),
    )
    vi.stubGlobal('fetch', fetchMock)

    await getQuote({ ...baseQuoteRequest, fee: 0.003 })

    const url = new URL(fetchMock.mock.calls[0]![0] as string)
    expect(url.searchParams.get('fee')).toBe('0.003')
    expect(url.searchParams.has('feeReceiver')).toBe(false)
  })
})
