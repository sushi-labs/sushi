import { isEvmChainId } from '../../evm/chain/chains.js'
import { evmNativeAddress } from '../../evm/config/simple-constants.js'
import { isKvmChainId } from '../../kvm/chain/chains.js'
import { kvmNativeAddress } from '../../kvm/config/simple-constants.js'
import { isMvmChainId } from '../../mvm/chain/chains.js'
import { mvmNativeAddress } from '../../mvm/config/simple-constants.js'
import { isStellarChainId } from '../../stellar/chain/chains.js'
import { stellarNativeAddress } from '../../stellar/config/simple-constants.js'
import { isSvmChainId } from '../../svm/chain/chains.js'
import { svmNativeAddress } from '../../svm/config/simple-constants.js'
import type { ChainId } from '../chain/chains.js'
import type { AddressFor } from '../types/for-chain.js'
import { assertNever } from './assert-never.js'

export function getNativeAddress<TChainId extends ChainId>(
  chainId: TChainId,
): AddressFor<TChainId> {
  if (isEvmChainId(chainId)) {
    return evmNativeAddress as AddressFor<TChainId>
  }

  if (isMvmChainId(chainId)) {
    return mvmNativeAddress as AddressFor<TChainId>
  }

  if (isKvmChainId(chainId)) {
    return kvmNativeAddress as AddressFor<TChainId>
  }

  if (isSvmChainId(chainId)) {
    return svmNativeAddress as AddressFor<TChainId>
  }

  if (isStellarChainId(chainId)) {
    return stellarNativeAddress as AddressFor<TChainId>
  }

  assertNever(chainId, `getNativeAddress, unsupported chainId: ${chainId}`)
}
