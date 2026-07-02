import { describe, expectTypeOf, it } from 'vitest'
import { EvmChainId } from '../../evm/chain/chains.js'
import type { EvmAddress } from '../../evm/currency/token.js'
import type {
  StellarAccountAddress,
  StellarContractAddress,
} from '../../stellar/address.js'
import { StellarChainId } from '../../stellar/chain/chains.js'
import { getNativeAddress } from './native-address.js'

describe('getNativeAddress', () => {
  it('returns contract address types', () => {
    expectTypeOf(
      getNativeAddress(EvmChainId.ETHEREUM),
    ).toEqualTypeOf<EvmAddress>()

    expectTypeOf(
      getNativeAddress(StellarChainId.STELLAR),
    ).toEqualTypeOf<StellarContractAddress>()

    expectTypeOf(
      getNativeAddress(StellarChainId.STELLAR),
    ).not.toEqualTypeOf<StellarAccountAddress>()
  })
})
