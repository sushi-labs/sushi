import { describe, expect, it } from 'vitest'
import { getChainIdAddressFromId } from './id.js'

describe('getChainIdAddressFromId', () => {
  it('parses MVM addresses containing colons', () => {
    const id = '-1:0x1::module::token'

    expect(getChainIdAddressFromId(id)).toEqual({
      chainId: -1,
      address: '0x1::module::token',
    })
  })
})
