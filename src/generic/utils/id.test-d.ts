import { describe, expectTypeOf, it } from 'vitest'
import type { EvmChainId } from '../../evm/chain/chains.js'
import type { EvmAddress } from '../../evm/currency/token.js'
import { SvmChainId } from '../../svm/chain/chains.js'
import type { SvmAddress } from '../../svm/currency/token.js'
import type { ID } from '../types/id.js'
import { getChainIdAddressFromId, getIdFromChainIdAddress } from './id.js'

describe('getChainIdAddressFromId', () => {
  it('preserves EVM chainId and address types', () => {
    const id = '1:0xaa' as ID<EvmChainId, EvmAddress>

    expectTypeOf(getChainIdAddressFromId(id)).toEqualTypeOf<{
      chainId: EvmChainId
      address: EvmAddress
    }>()
  })

  it('preserves Solana chainId and address types', () => {
    const id = getIdFromChainIdAddress(
      SvmChainId.SOLANA,
      'So11111111111111111111111111111111111111112' as SvmAddress,
    )

    expectTypeOf(getChainIdAddressFromId(id)).not.toEqualTypeOf<{
      chainId: SvmChainId
      address: `${SvmAddress}`
    }>()

    expectTypeOf(getChainIdAddressFromId(id)).toEqualTypeOf<{
      chainId: SvmChainId
      address: SvmAddress
    }>()
  })
})
