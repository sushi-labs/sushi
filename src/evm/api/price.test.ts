import { describe, expect, it } from 'vitest'
import { getPrice, getPrices } from './price.js'
import { SUSHI_ADDRESS } from '~evm/config/tokens/tokens/SUSHI.js'

describe('getPrice', () => {
  it('should return a number', async () => {
    const result = await getPrice(1, SUSHI_ADDRESS[1])
    expect(result).toBeTypeOf('number')
  })
})

describe('getPrices', () => {
  it('should return a an object of type address=>number', async () => {
    const result = await getPrices(1)
    expect(result).toBeTypeOf('object')
  })
})
