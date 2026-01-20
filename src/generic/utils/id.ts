import type { ChainId } from '../chain/chains.js'
import type { AddressFor } from '../types/for-chain.js'
import type { ID } from '../types/id.js'
import { getNativeAddress } from './native-address.js'
import { normalizeAddress } from './normalize-address.js'

export function getChainIdAddressFromId<
  TChainId extends ChainId,
  TAddress extends string,
>(
  id: ID<TChainId, TAddress>,
): {
  chainId: TChainId
  address: TAddress
} {
  const separatorIndex = id.indexOf(':')

  if (separatorIndex === -1) {
    throw new Error(
      `Invalid ID format: ${id}. Expected format is "chainId:address".`,
    )
  }

  const chainId = +id.slice(0, separatorIndex) as TChainId
  const address = id.slice(separatorIndex + 1) as TAddress

  if (!chainId || !address) {
    throw new Error(
      `Invalid ID format: ${id}. Expected format is "chainId:address".`,
    )
  }

  return { chainId, address }
}

export function getIdFromChainIdAddress<
  TChainId extends ChainId,
  TTranslateNative extends boolean = false,
>(
  chainId: TChainId,
  address: AddressFor<TChainId>,
  options: { translateNative?: TTranslateNative } = {},
) {
  if (!chainId || !address) {
    throw new Error(
      `Invalid chainId or address: ${chainId}, ${address}. Both must be provided.`,
    )
  }

  address = normalizeAddress(chainId, address)

  if (address === getNativeAddress(chainId) && options.translateNative) {
    address = 'NATIVE' as AddressFor<TChainId>
  }

  return `${chainId}:${address}` as TTranslateNative extends true
    ? ID<TChainId, AddressFor<TChainId> | 'NATIVE'>
    : ID<TChainId, AddressFor<TChainId>>
}
