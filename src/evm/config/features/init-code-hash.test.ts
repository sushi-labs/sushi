import { describe, expect, it } from 'vitest'
import * as features from './index.js'

describe('DEX init code hashes', () => {
  it('are 32-byte hex values', () => {
    for (const [name, value] of Object.entries(features)) {
      if (!name.endsWith('_INIT_CODE_HASH')) continue

      const hashes = typeof value === 'string' ? [value] : Object.values(value)
      for (const hash of hashes) {
        expect(hash, name).toMatch(/^0x[0-9a-f]{64}$/i)
      }
    }
  })
})
