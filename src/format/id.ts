import { isEvmChainId } from '../chain/evm/index.js'
import type { Address } from '../types/address.js'
import type { ID } from '../types/id.js'
import { unsanitize } from './unsanitize.js'

export const getIdFromChainIdAddress = (
  chainId: string | number,
  address: Address,
) => `${chainId}:${address.toLowerCase()}` as ID

export const getChainIdAddressFromId = (id: string) => {
  const [_chainId, address] = unsanitize(id).split(':') as [string, Address]

  if (!_chainId || !address) throw new Error(`Invalid id: ${id}`)

  const chainId = Number(_chainId)

  if (!isEvmChainId(chainId)) throw new Error(`Invalid chainId: ${chainId}`)

  return { chainId, address }
}
