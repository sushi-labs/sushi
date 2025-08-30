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
>(chainId: TChainId, address: TAddress): ID<TChainId, TAddress> {
  if (!chainId || !address) {
    throw new Error(
      `Invalid chainId or address: ${chainId}, ${address}. Both must be provided.`,
    )
  }

  return `${chainId}:${address.toLowerCase()}` as ID<TChainId, TAddress>
}
