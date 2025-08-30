import { nativeAddress } from '../../evm/config/simple-constants.js'
import type { ChainId } from '../chain/chains.js'
import type { ID } from '../types/id.js'

export function getChainIdAddressFromId<
  TChainId extends ChainId,
  TAddress extends string,
>(
  id: ID<TChainId, TAddress>,
): {
  chainId: TChainId
  address: TAddress
} {
  const [chainId, address, ...rest] = id.split(':') as [TChainId, TAddress]

  if (rest.length > 0) {
    throw new Error(
      `Invalid ID format: ${id}. Expected format is "chainId:address".`,
    )
  }

  if (!chainId || !address) {
    throw new Error(
      `Invalid ID format: ${id}. Expected format is "chainId:address".`,
    )
  }

  return { chainId, address }
}

export function getIdFromChainIdAddress<
  TChainId extends ChainId,
  TAddress extends string,
  TTranslateNative extends boolean = false,
>(
  chainId: TChainId,
  address: TAddress,
  options: { translateNative?: TTranslateNative } = {},
) {
  if (!chainId || !address) {
    throw new Error(
      `Invalid chainId or address: ${chainId}, ${address}. Both must be provided.`,
    )
  }

  address = address.toLowerCase() as TAddress

  if (address === nativeAddress && options.translateNative) {
    address = 'NATIVE' as TAddress
  }

  return `${chainId}:${address}` as TTranslateNative extends true
    ? ID<TChainId, TAddress | 'NATIVE'>
    : ID<TChainId, TAddress>
}
