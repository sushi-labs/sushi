import { describe, expect, it } from 'vitest'
import { NoTickDataProvider } from './TickDataProvider.js'

describe('TickDataProvider', () => {
  describe('NoTickDataProvider', () => {
    const provider = new NoTickDataProvider()
    it('throws on getTick', async () => {
      await expect(provider.getTick(0)).rejects.toThrow(
        'No tick data provider was given',
      )
    })
    it('throws on nextInitializedTickWithinOneWord', async () => {
      await expect(
        provider.nextInitializedTickWithinOneWord(0, false, 1),
      ).rejects.toThrow('No tick data provider was given')
    })
  })
})
