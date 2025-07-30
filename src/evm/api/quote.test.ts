import { describe, expect, it } from 'vitest'
import { type QuoteRequest, getQuote } from './quote.js'

const baseQuoteRequest = {
  chainId: 1,
  tokenIn: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
  tokenOut: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2',
  amount: 1000000000000000000n,
  maxSlippage: 0.005,
} as const satisfies QuoteRequest

describe('getQuote', () => {
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
})
