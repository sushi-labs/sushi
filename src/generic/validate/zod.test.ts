import { describe, expect, it } from 'vitest'
import { sz } from './zod.js'

describe('sz address validators', () => {
  it('validates, casts, and normalizes EVM addresses', () => {
    const address = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'

    expect(sz.evm.address().parse(address)).toBe(
      '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    )
    expect(sz.evm.address().safeParse('0x1234').success).toBe(false)
  })

  it('validates and casts SVM addresses', () => {
    const address = 'So11111111111111111111111111111111111111112'

    expect(sz.svm.address().parse(address)).toBe(address)
    expect(sz.svm.address().safeParse('0x1234').success).toBe(false)
  })

  it('validates and casts MVM addresses', () => {
    const address = '0x2::sui::SUI'

    expect(sz.mvm.address().parse(address)).toBe(address)
    expect(sz.mvm.address().safeParse('0x2::sui').success).toBe(false)
  })

  it('validates, casts, and normalizes Stellar addresses', () => {
    const accountAddress =
      'GAAZI4TCR3TY5OJHCTJC2A4QSY6CJWJH5IAJTGKIN2ER7LBNVKOCCWN7'
    const contractAddress =
      'CCRSMJDITH3VK5QOGYCVZDAKIY5GL3RCG4TCVLIAVB662IW2V5KJGZGF'

    expect(sz.stellar.address().parse(accountAddress.toLowerCase())).toBe(
      accountAddress,
    )
    expect(
      sz.stellar.contractAddress().parse(contractAddress.toLowerCase()),
    ).toBe(contractAddress)
    expect(sz.stellar.accountAddress().safeParse(contractAddress).success).toBe(
      false,
    )
  })
})
