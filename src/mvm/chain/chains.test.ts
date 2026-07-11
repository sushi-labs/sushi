import { describe, expect, it } from 'vitest'
import { getMvmChainById, isMvmChainId, MvmChainId } from './chains.js'

describe('MVM chains', () => {
  it('returns Aptos with working explorer URLs', () => {
    const chain = getMvmChainById(MvmChainId.APTOS)

    expect(chain.getTransactionUrl('0xabc')).toBe(
      'https://explorer.aptoslabs.com/txn/0xabc',
    )
    expect(chain.getAccountUrl('0x1')).toBe(
      'https://explorer.aptoslabs.com/account/0x1',
    )
    expect(chain.getTokenUrl('0x1::coin::Coin')).toBe(
      'https://explorer.aptoslabs.com/coin/0x1::coin::Coin',
    )
    expect(isMvmChainId(MvmChainId.APTOS)).toBe(true)
    expect(isMvmChainId(1)).toBe(false)
  })
})
