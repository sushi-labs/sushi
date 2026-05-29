import { describe, expectTypeOf, it } from 'vitest'
import { EvmChainId } from '../../evm/chain/chains.js'
import type { EvmAddress } from '../../evm/currency/token.js'
import type {
  StellarAccountAddress,
  StellarContractAddress,
} from '../../stellar/address.js'
import { StellarChainId } from '../../stellar/chain/chains.js'
import { SvmChainId } from '../../svm/chain/chains.js'
import type { SvmAddress } from '../../svm/currency/token.js'
import { normalizeAddress } from './normalize-address.js'

describe('normalizeAddress types', () => {
  it('preserves EVM address types', () => {
    const address = '0x0000000000000000000000000000000000000000' as EvmAddress

    expectTypeOf(
      normalizeAddress(EvmChainId.ETHEREUM, address),
    ).toEqualTypeOf<EvmAddress>()
  })

  it('preserves SVM address types', () => {
    const address = 'So11111111111111111111111111111111111111112' as SvmAddress

    expectTypeOf(
      normalizeAddress(SvmChainId.SOLANA, address),
    ).toEqualTypeOf<SvmAddress>()
  })

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

  it('preserves same-chain address unions', () => {
    function normalizeStellarUnion(
      address: StellarAccountAddress | StellarContractAddress,
    ) {
      expectTypeOf(
        normalizeAddress(StellarChainId.STELLAR, address),
      ).toEqualTypeOf<StellarAccountAddress | StellarContractAddress>()
    }

    expectTypeOf(normalizeStellarUnion).returns.toEqualTypeOf<void>()
  })

  it('preserves cross-chain address unions', () => {
    function normalizeEvmOrSvmUnion(
      chainId: typeof EvmChainId.ETHEREUM | typeof SvmChainId.SOLANA,
      address: EvmAddress | SvmAddress,
    ) {
      expectTypeOf(normalizeAddress(chainId, address)).toEqualTypeOf<
        EvmAddress | SvmAddress
      >()
    }

    expectTypeOf(normalizeEvmOrSvmUnion).returns.toEqualTypeOf<void>()
  })
})
