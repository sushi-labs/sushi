import type { EvmChainId } from '../../evm/chain/chains.js'
import { isEvmChainId } from '../../evm/chain/chains.js'
import { normalizeEvmAddress } from '../../evm/utils/normalize-address.js'
import type { KvmChainId } from '../../kvm/chain/chains.js'
import { isKvmChainId } from '../../kvm/chain/chains.js'
import { normalizeKvmAddress } from '../../kvm/utils/normalize-address.js'
import type { MvmChainId } from '../../mvm/chain/chains.js'
import { isMvmChainId } from '../../mvm/chain/chains.js'
import { normalizeMvmAddress } from '../../mvm/utils/normalize-address.js'
import type { StellarChainId } from '../../stellar/chain/chains.js'
import { isStellarChainId } from '../../stellar/chain/chains.js'
import { normalizeStellarAddress } from '../../stellar/utils/normalize-address.js'
import type { SvmChainId } from '../../svm/chain/chains.js'
import { isSvmChainId } from '../../svm/chain/chains.js'
import { normalizeSvmAddress } from '../../svm/utils/normalize-address.js'
import type { TvmChainId } from '../../tvm/chain/chains.js'
import { isTvmChainId } from '../../tvm/chain/chains.js'
import { normalizeTvmAddress } from '../../tvm/utils/normalize-address.js'
import type { ChainId } from '../chain/chains.js'
import type { AddressFor } from '../types/for-chain.js'
import { assertNever } from './assert-never.js'

export function normalizeAddress<TChainId extends ChainId>(
  chainId: TChainId,
  address: AddressFor<TChainId>,
): AddressFor<TChainId> {
  if (isEvmChainId(chainId)) {
    return normalizeEvmAddress(
      address as AddressFor<EvmChainId>,
    ) as AddressFor<TChainId>
  }

  if (isMvmChainId(chainId)) {
    return normalizeMvmAddress(
      address as AddressFor<MvmChainId>,
    ) as AddressFor<TChainId>
  }

  if (isTvmChainId(chainId)) {
    return normalizeTvmAddress(
      address as AddressFor<TvmChainId>,
    ) as AddressFor<TChainId>
  }

  if (isKvmChainId(chainId)) {
    return normalizeKvmAddress(
      address as AddressFor<KvmChainId>,
    ) as AddressFor<TChainId>
  }

  if (isSvmChainId(chainId)) {
    return normalizeSvmAddress(
      address as AddressFor<SvmChainId>,
    ) as AddressFor<TChainId>
  }

  if (isStellarChainId(chainId)) {
    return normalizeStellarAddress(
      address as AddressFor<StellarChainId>,
    ) as AddressFor<TChainId>
  }

  assertNever(chainId, `normalizeAddress, unsupported chainId: ${chainId}`)
}
