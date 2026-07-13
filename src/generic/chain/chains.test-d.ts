import { expectTypeOf, test } from 'vitest'
import type { EvmChainId } from '../../evm/chain/chains.js'
import type { SvmChainId } from '../../svm/chain/chains.js'
import type { AddressFor, TxHashFor } from '../types/for-chain.js'
import { type ChainId, getChainById } from './chains.js'
import type { Chain, ChainDefinition } from './interface.js'

test('public Chain only accepts registered chain IDs and keys', () => {
  // @ts-expect-error 999999 and unknown are not registered
  expectTypeOf<Chain<'evm', 999999, 'unknown'>>()

  expectTypeOf<ChainDefinition<'evm', 999999, 'unknown'>>().not.toBeNever()
})

test('getChainById URL methods remain callable for generic chain IDs', () => {
  function getExplorerUrls<TChainId extends ChainId>(
    chainId: TChainId,
    address: AddressFor<TChainId>,
    txHash: TxHashFor<TChainId>,
  ) {
    const chain = getChainById(chainId)

    return {
      account: chain.getAccountUrl(address),
      token: chain.getTokenUrl(address),
      transaction: chain.getTransactionUrl(txHash),
    }
  }

  expectTypeOf(getExplorerUrls).toBeCallableWith(
    1 as EvmChainId | SvmChainId,
    'address' as AddressFor<EvmChainId | SvmChainId>,
    'hash' as TxHashFor<EvmChainId | SvmChainId>,
  )
})
