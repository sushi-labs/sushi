import type { EvmChainId } from '../../evm/chain/chains.js'
import type { EvmCurrency } from '../../evm/currency/currency.js'
import type { EvmNative } from '../../evm/currency/native.js'
import type {
  EvmAddress,
  EvmToken,
  EvmTxHash,
} from '../../evm/currency/token.js'
import type { EvmID } from '../../evm/types/id.js'
import type { MvmChainId } from '../../mvm/chain/chains.js'
import type {
  MvmAddress,
  MvmToken,
  MvmTxHash,
} from '../../mvm/currency/token.js'
import type { StellarAddress, StellarTxHash } from '../../stellar/address.js'
import type { StellarChainId } from '../../stellar/chain/chains.js'
import type { StellarCurrency } from '../../stellar/currency/currency.js'
import type { StellarToken } from '../../stellar/currency/token.js'
import type { StellarID } from '../../stellar/types/id.js'
import type { SvmChainId } from '../../svm/chain/chains.js'
import type { SvmCurrency } from '../../svm/currency/currency.js'
import type { SvmNative } from '../../svm/currency/native.js'
import type {
  SvmAddress,
  SvmToken,
  SvmTxHash,
} from '../../svm/currency/token.js'
import type { SvmID } from '../../svm/types/id.js'
import type { ChainId } from '../chain/chains.js'
import type { CurrencyMetadata } from '../currency/currency.js'

// Branch order (Evm, Svm, Mvm, Stellar) is kept identical across `TokenFor`,
// `NativeFor` and `CurrencyFor` so TypeScript can relate the conditional types
// branch-by-branch and prove `TokenFor<T>`/`NativeFor<T>` are assignable to
// `CurrencyFor<T>` for a generic `T`. The chain families are disjoint, so the
// order has no effect on the resolved type — only on relatability.
export type TokenFor<
  TChainId extends ChainId,
  Metadata extends CurrencyMetadata = CurrencyMetadata,
> = TChainId extends EvmChainId
  ? EvmToken<Metadata>
  : TChainId extends SvmChainId
    ? SvmToken<Metadata>
    : TChainId extends MvmChainId
      ? MvmToken<Metadata>
      : TChainId extends StellarChainId
        ? StellarToken<Metadata>
        : never

export type CurrencyFor<
  TChainId extends ChainId,
  Metadata extends CurrencyMetadata = CurrencyMetadata,
> = TChainId extends EvmChainId
  ? EvmCurrency<Metadata>
  : TChainId extends SvmChainId
    ? SvmCurrency<Metadata>
    : TChainId extends MvmChainId
      ? MvmToken<Metadata>
      : TChainId extends StellarChainId
        ? StellarCurrency<Metadata>
        : never

export type NativeChainId = EvmChainId | SvmChainId

export type NativeFor<
  TChainId extends NativeChainId,
  Metadata extends CurrencyMetadata = CurrencyMetadata,
> = TChainId extends EvmChainId
  ? EvmNative<Metadata>
  : TChainId extends SvmChainId
    ? SvmNative<Metadata>
    : never

export type AddressFor<TChainId extends ChainId> = TChainId extends EvmChainId
  ? EvmAddress
  : TChainId extends MvmChainId
    ? MvmAddress
    : TChainId extends SvmChainId
      ? SvmAddress
      : TChainId extends StellarChainId
        ? StellarAddress
        : never

export type TxHashFor<TChainId extends ChainId> = TChainId extends EvmChainId
  ? EvmTxHash
  : TChainId extends MvmChainId
    ? MvmTxHash
    : TChainId extends SvmChainId
      ? SvmTxHash
      : TChainId extends StellarChainId
        ? StellarTxHash
        : never

export type IDFor<
  TChainId extends EvmChainId | SvmChainId | StellarChainId,
  TIncludeNative extends boolean = false,
> = TChainId extends EvmChainId
  ? EvmID<TIncludeNative>
  : TChainId extends SvmChainId
    ? SvmID<TIncludeNative>
    : TChainId extends StellarChainId
      ? StellarID<TIncludeNative>
      : never
