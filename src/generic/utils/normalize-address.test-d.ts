import { describe, expectTypeOf, it } from 'vitest'
import type {
  StellarAccountAddress,
  StellarContractAddress,
} from '../../stellar/address.js'
import { StellarChainId } from '../../stellar/chain/chains.js'
import { normalizeAddress } from './normalize-address.js'

describe('normalizeAddress types', () => {
  it('preserves Stellar account and contract address types', () => {
    const accountAddress =
      'GAAZI4TCR3TY5OJHCTJC2A4QSY6CJWJH5IAJTGKIN2ER7LBNVKOCCWN7' as StellarAccountAddress
    const contractAddress =
      'CCRSMJDITH3VK5QOGYCVZDAKIY5GL3RCG4TCVLIAVB662IW2V5KJGZGF' as StellarContractAddress

    expectTypeOf(
      normalizeAddress(StellarChainId.STELLAR, accountAddress),
    ).toEqualTypeOf<StellarAccountAddress>()
    expectTypeOf(
      normalizeAddress(StellarChainId.STELLAR, contractAddress),
    ).toEqualTypeOf<StellarContractAddress>()
  })
})
