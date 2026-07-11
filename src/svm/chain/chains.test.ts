import { describe, expect, it } from 'vitest'
import { svmAddress } from '../currency/token.js'
import { getSvmChainById, isSvmChainId, SvmChainId } from './chains.js'

describe('SVM chains', () => {
  it('returns Solana with working explorer URLs', () => {
    const chain = getSvmChainById(SvmChainId.SOLANA)
    const address = svmAddress('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v')

    expect(chain.getTransactionUrl('signature')).toBe(
      'https://solscan.io/tx/signature',
    )
    expect(chain.getAccountUrl(address)).toBe(
      `https://solscan.io/account/${address}`,
    )
    expect(chain.getTokenUrl(address)).toBe(
      `https://solscan.io/token/${address}`,
    )
    expect(isSvmChainId(SvmChainId.SOLANA)).toBe(true)
    expect(isSvmChainId(1)).toBe(false)
  })
})
