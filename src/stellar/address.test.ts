import { describe, expect, it } from 'vitest'
import {
  isStellarAccountAddress,
  isStellarAddress,
  isStellarContractAddress,
  type StellarAccountAddress,
  type StellarContractAddress,
} from './address.js'
import { normalizeStellarAddress } from './utils/normalize-address.js'

describe('stellar addresses', () => {
  const accountAddress =
    'GAAZI4TCR3TY5OJHCTJC2A4QSY6CJWJH5IAJTGKIN2ER7LBNVKOCCWN7'
  const contractAddress =
    'CCRSMJDITH3VK5QOGYCVZDAKIY5GL3RCG4TCVLIAVB662IW2V5KJGZGF'

  it('distinguishes account and contract addresses', () => {
    expect(isStellarAccountAddress(accountAddress)).toBe(true)
    expect(isStellarAccountAddress(contractAddress)).toBe(false)
    expect(isStellarContractAddress(accountAddress)).toBe(false)
    expect(isStellarContractAddress(contractAddress)).toBe(true)
  })

  it('accepts both account and contract addresses as Stellar addresses', () => {
    expect(isStellarAddress(accountAddress)).toBe(true)
    expect(isStellarAddress(contractAddress)).toBe(true)
    expect(isStellarAddress('0x1234')).toBe(false)
  })

  it('normalizes account, contract, and chain addresses', () => {
    expect(
      normalizeStellarAddress(
        accountAddress.toLowerCase() as StellarAccountAddress,
      ),
    ).toBe(accountAddress)
    expect(
      normalizeStellarAddress(
        contractAddress.toLowerCase() as StellarContractAddress,
      ),
    ).toBe(contractAddress)
    expect(
      normalizeStellarAddress(
        contractAddress.toLowerCase() as StellarContractAddress,
      ),
    ).toBe(contractAddress)
  })
})
