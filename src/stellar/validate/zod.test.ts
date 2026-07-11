import { describe, expect, it } from 'vitest'
import {
  stellarAccountAddress,
  stellarAddress,
  stellarContractAddress,
} from './zod.js'

const accountAddress =
  'GAAZI4TCR3TY5OJHCTJC2A4QSY6CJWJH5IAJTGKIN2ER7LBNVKOCCWN7'
const contractAddress =
  'CCRSMJDITH3VK5QOGYCVZDAKIY5GL3RCG4TCVLIAVB662IW2V5KJGZGF'

describe('Stellar address schemas', () => {
  it('normalizes before validating', () => {
    expect(stellarAccountAddress().parse(accountAddress.toLowerCase())).toBe(
      accountAddress,
    )
    expect(stellarContractAddress().parse(contractAddress.toLowerCase())).toBe(
      contractAddress,
    )
  })

  it('distinguishes account and contract addresses', () => {
    expect(() => stellarAccountAddress().parse(contractAddress)).toThrow()
    expect(() => stellarContractAddress().parse(accountAddress)).toThrow()
    expect(stellarAddress().parse(accountAddress)).toBe(accountAddress)
    expect(stellarAddress().parse(contractAddress)).toBe(contractAddress)
  })

  it.each([
    '',
    '0x1234',
    `M${'A'.repeat(55)}`,
    `G${'0'.repeat(55)}`,
  ])('rejects %j', (value) =>
    expect(() => stellarAddress().parse(value)).toThrow())
})
