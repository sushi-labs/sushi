import type { EvmChainId } from '../../evm/chain/chains.js'
import { isEvmChainId } from '../../evm/chain/chains.js'
import { type EvmAddress, isEvmAddress } from '../../evm/currency/token.js'
import { normalizeEvmAddress } from '../../evm/utils/normalize-address.js'
import type { MvmChainId } from '../../mvm/chain/chains.js'
import { isMvmChainId } from '../../mvm/chain/chains.js'
import { isMvmAddress } from '../../mvm/currency/token.js'
import { normalizeMvmAddress } from '../../mvm/utils/normalize-address.js'
import { isStellarAddress, type StellarAddress } from '../../stellar/address.js'
import type { StellarChainId } from '../../stellar/chain/chains.js'
import { isStellarChainId } from '../../stellar/chain/chains.js'
import { normalizeStellarAddress } from '../../stellar/utils/normalize-address.js'
import type { SvmChainId } from '../../svm/chain/chains.js'
import { isSvmChainId } from '../../svm/chain/chains.js'
import { isSvmAddress, type SvmAddress } from '../../svm/currency/token.js'
import { normalizeSvmAddress } from '../../svm/utils/normalize-address.js'
import type { ChainId } from '../chain/chains.js'
import type { AddressFor } from '../types/for-chain.js'
import { assertNever } from './assert-never.js'

export function normalizeAddress<TAddress extends AddressFor<ChainId>>(
  address: TAddress,
): TAddress
export function normalizeAddress<
  TChainId extends ChainId,
  TAddress extends AddressFor<TChainId>,
>(chainId: TChainId, address: TAddress): TAddress
export function normalizeAddress(
  chainIdOrAddress: ChainId | AddressFor<ChainId>,
  address?: AddressFor<ChainId>,
): AddressFor<ChainId> {
  if (address === undefined) {
    if (typeof chainIdOrAddress !== 'string') {
      throw new Error(
        `normalizeAddress, unsupported address: ${chainIdOrAddress}`,
      )
    }

    return normalizeAddressByFormat(chainIdOrAddress)
  }

  return normalizeAddressByChainId(chainIdOrAddress as ChainId, address)
}

function normalizeAddressByChainId(
  chainId: ChainId,
  address: AddressFor<ChainId>,
) {
  if (isEvmChainId(chainId)) {
    return normalizeEvmAddress(address as AddressFor<EvmChainId>)
  }

  if (isMvmChainId(chainId)) {
    return normalizeMvmAddress(address as AddressFor<MvmChainId>)
  }

  if (isSvmChainId(chainId)) {
    return normalizeSvmAddress(address as AddressFor<SvmChainId>)
  }

  if (isStellarChainId(chainId)) {
    return normalizeStellarAddress(address as AddressFor<StellarChainId>)
  }

  assertNever(chainId, `normalizeAddress, unsupported chainId: ${chainId}`)
}

function normalizeAddressByFormat(
  address: AddressFor<ChainId>,
): AddressFor<ChainId> {
  if (isMvmAddress(address)) {
    return normalizeMvmAddress(address)
  }

  if (isEvmAddress(address)) {
    return normalizeEvmAddress(address as EvmAddress)
  }

  if (isSvmAddress(address)) {
    return normalizeSvmAddress(address as SvmAddress)
  }

  if (isStellarAddress(address.toUpperCase())) {
    return normalizeStellarAddress(address as StellarAddress)
  }

  throw new Error(`normalizeAddress, unsupported address: ${address}`)
}
