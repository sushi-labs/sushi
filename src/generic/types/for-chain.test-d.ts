import { describe, expectTypeOf, it } from 'vitest'
import type { StellarAddress } from '../../stellar/address.js'
import type { StellarChainId } from '../../stellar/chain/chains.js'
import type { StellarID } from '../../stellar/types/id.js'
import type { SvmChainId } from '../../svm/index.js'
import type { SvmID } from '../../svm/types/id.js'
import type { IDFor } from './for-chain.js'

describe('generic/types/for-chain.ts types', () => {
  describe('IDFor', () => {
    it('should return the correct id type for SVM chains', () => {
      expectTypeOf<IDFor<SvmChainId>>().toEqualTypeOf<SvmID>()
      expectTypeOf<IDFor<SvmChainId, true>>().toEqualTypeOf<SvmID<true>>()
    })

    it('should return the correct id type for Stellar chains', () => {
      expectTypeOf<IDFor<StellarChainId>>().toEqualTypeOf<StellarID>()
      expectTypeOf<IDFor<StellarChainId, true>>().toEqualTypeOf<
        StellarID<true>
      >()
    })

    it('should use Stellar addresses in Stellar ids', () => {
      expectTypeOf<StellarID>().toEqualTypeOf<`${StellarChainId}:${StellarAddress}`>()
      expectTypeOf<StellarID<true>>().toEqualTypeOf<
        `${StellarChainId}:${StellarAddress}` | `${StellarChainId}:NATIVE`
      >()
    })
  })
})
