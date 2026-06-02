import {
  type EvmChainId,
  getEvmChainById,
  isEvmChainId,
} from '../../evm/chain/chains.js'
import { EvmNative } from '../../evm/currency/native.js'
import { EvmToken } from '../../evm/currency/token.js'
import { isMvmChainId, type MvmChainId } from '../../mvm/chain/chains.js'
import { MvmToken } from '../../mvm/currency/token.js'
import {
  isStellarChainId,
  type StellarChainId,
} from '../../stellar/chain/chains.js'
import { StellarToken } from '../../stellar/currency/token.js'
import {
  getSvmChainById,
  isSvmChainId,
  type SvmChainId,
} from '../../svm/chain/chains.js'
import { SvmNative } from '../../svm/currency/native.js'
import { SvmToken } from '../../svm/currency/token.js'
import type { ChainId } from '../chain/chains.js'
import type { NativeChainId, NativeFor, TokenFor } from '../types/for-chain.js'
import { assertNever } from '../utils/assert-never.js'
import type { CurrencyMetadata } from './currency.js'

type ConstructorData<T extends abstract new (...args: any) => any> =
  ConstructorParameters<T>[0] extends { chainId: infer TChainId }
    ? Omit<ConstructorParameters<T>[0], 'chainId'> & { chainId?: TChainId }
    : never

type EvmTokenConstructorData<TMetadata extends CurrencyMetadata> =
  ConstructorData<typeof EvmToken<TMetadata>>
type MvmTokenConstructorData<TMetadata extends CurrencyMetadata> =
  ConstructorData<typeof MvmToken<TMetadata>>
type SvmTokenConstructorData<TMetadata extends CurrencyMetadata> =
  ConstructorData<typeof SvmToken<TMetadata>>
type StellarTokenConstructorData<TMetadata extends CurrencyMetadata> =
  ConstructorData<typeof StellarToken<TMetadata>>

export type TokenConstructorDataFor<
  TChainId extends ChainId,
  TMetadata extends CurrencyMetadata = CurrencyMetadata,
> = TChainId extends EvmChainId
  ? EvmTokenConstructorData<TMetadata>
  : TChainId extends MvmChainId
    ? MvmTokenConstructorData<TMetadata>
    : TChainId extends SvmChainId
      ? SvmTokenConstructorData<TMetadata>
      : TChainId extends StellarChainId
        ? StellarTokenConstructorData<TMetadata>
        : never

export function getNativeFor<
  TChainId extends NativeChainId,
  TMetadata extends CurrencyMetadata,
>(chainId: TChainId, metadata: TMetadata): NativeFor<TChainId, TMetadata> {
  if (isEvmChainId(chainId)) {
    const chain = getEvmChainById(chainId)

    return new EvmNative({
      chainId,
      symbol: chain.viemChain.nativeCurrency.symbol,
      name: chain.viemChain.nativeCurrency.name,
      decimals: chain.viemChain.nativeCurrency.decimals,
      metadata,
    }) as NativeFor<TChainId, TMetadata>
  }

  if (isSvmChainId(chainId)) {
    const chain = getSvmChainById(chainId)

    return new SvmNative({
      chainId,
      symbol: chain.nativeCurrency.symbol,
      name: chain.nativeCurrency.name,
      decimals: chain.nativeCurrency.decimals,
      metadata,
    }) as NativeFor<TChainId, TMetadata>
  }

  assertNever(chainId, `getNativeFor, unsupported chainId: ${chainId}`)
}

export function getTokenFor<
  TChainId extends ChainId,
  TMetadata extends CurrencyMetadata = Record<string, unknown>,
>(
  chainId: TChainId,
  data: TokenConstructorDataFor<TChainId, TMetadata>,
): TokenFor<TChainId, TMetadata> {
  if (isEvmChainId(chainId)) {
    return new EvmToken({
      ...data,
      chainId,
    } as ConstructorParameters<typeof EvmToken<TMetadata>>[0]) as TokenFor<
      TChainId,
      TMetadata
    >
  }

  if (isMvmChainId(chainId)) {
    return new MvmToken({
      ...data,
      chainId,
    } as ConstructorParameters<typeof MvmToken<TMetadata>>[0]) as TokenFor<
      TChainId,
      TMetadata
    >
  }

  if (isSvmChainId(chainId)) {
    return new SvmToken({
      ...data,
      chainId,
    } as ConstructorParameters<typeof SvmToken<TMetadata>>[0]) as TokenFor<
      TChainId,
      TMetadata
    >
  }

  if (isStellarChainId(chainId)) {
    return new StellarToken({
      ...data,
      chainId,
    } as ConstructorParameters<typeof StellarToken<TMetadata>>[0]) as TokenFor<
      TChainId,
      TMetadata
    >
  }

  assertNever(chainId, `getTokenFor, unsupported chainId: ${chainId}`)
}
