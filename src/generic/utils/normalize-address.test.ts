import { describe, expect, it } from 'vitest'
import type { EvmAddress } from '../../evm/currency/token.js'
import type { MvmAddress } from '../../mvm/currency/token.js'
import type { StellarContractAddress } from '../../stellar/address.js'
import type { SvmAddress } from '../../svm/currency/token.js'
import { normalizeAddress } from './normalize-address.js'

describe('normalizeAddress', () => {
  it('normalizes addresses without chain ids by address format', () => {
    expect(
      normalizeAddress(
        '0x000000000000000000000000000000000000dEaD' as EvmAddress,
      ),
    ).toBe('0x000000000000000000000000000000000000dead')

    const mvmAddress = '0xABC::Coin::T' as MvmAddress
    expect(normalizeAddress(mvmAddress)).toBe(mvmAddress)

    const svmAddress =
      'So11111111111111111111111111111111111111112' as SvmAddress
    expect(normalizeAddress(svmAddress)).toBe(svmAddress)

    expect(
      normalizeAddress(
        'ccrsmjdith3vk5qogycvzdakiy5gl3rcg4tcvliavb662iw2v5kjgzgf' as StellarContractAddress,
      ),
    ).toBe('CCRSMJDITH3VK5QOGYCVZDAKIY5GL3RCG4TCVLIAVB662IW2V5KJGZGF')
  })
})
