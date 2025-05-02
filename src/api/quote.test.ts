import { describe, expect, it } from 'vitest'
import { type QuoteRequest, getQuote } from './quote.js'

const baseQuoteRequest = {
  chainId: 1,
  tokenIn: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
  tokenOut: '0x6B3595068778DD592e39A122f4f5a5cF09C90fE2',
  amount: 1000000000000000000n,
  maxSlippage: 0.005,
} as const satisfies QuoteRequest<false>

describe('getSwap', () => {
  it('should return a swap when recipient is included', async () => {
    const result = await getQuote(baseQuoteRequest)

    expect(result).include({ status: 'Success' })
  })

  it.skip('should include a quote when url is set to staging true', async () => {
    const result = await getQuote({
      ...baseQuoteRequest,
      baseUrl: 'https://staging.sushi.com',
    })
    expect(result).include({ status: 'Success' })
  })
})
