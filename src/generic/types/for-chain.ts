import type { EvmChainId } from '../../evm/chain/chains.js'
import type { EvmCurrency } from '../../evm/currency/currency.js'
import type {
  EvmAddress,
  EvmToken,
  EvmTxHash,
} from '../../evm/currency/token.js'
import type { EvmID } from '../../evm/types/id.js'
import type { KvmChainId } from '../../kvm/chain/chains.js'
import type {
  KvmToken,
  KvmTokenAddress,
  KvmTxHash,
} from '../../kvm/currency/token.js'
import type { MvmChainId } from '../../mvm/chain/chains.js'
import type {
  MvmAddress,
  MvmToken,
  MvmTxHash,
} from '../../mvm/currency/token.js'
import type { StellarAddress, StellarTxHash } from '../../stellar/address.js'
import type { StellarChainId } from '../../stellar/chain/chains.js'
import type { SvmChainId } from '../../svm/chain/chains.js'
import type { SvmCurrency } from '../../svm/currency/currency.js'
import type {
  SvmAddress,
  SvmToken,
  SvmTxHash,
} from '../../svm/currency/token.js'
import type { SvmID } from '../../svm/types/id.js'
import type { ChainId } from '../chain/chains.js'
import type { CurrencyMetadata } from '../currency/currency.js'

export type TokenFor<
  TChainId extends Exclude<ChainId, StellarChainId>,
  Metadata extends CurrencyMetadata = CurrencyMetadata,
> = TChainId extends EvmChainId
  ? EvmToken<Metadata>
  : TChainId extends MvmChainId
    ? MvmToken<Metadata>
    : TChainId extends KvmChainId
      ? KvmToken<Metadata>
      : TChainId extends SvmChainId
        ? SvmToken<Metadata>
        : never

export type CurrencyFor<
  TChainId extends Exclude<ChainId, StellarChainId>,
  Metadata extends CurrencyMetadata = CurrencyMetadata,
> = TChainId extends EvmChainId
  ? EvmCurrency<Metadata>
  : TChainId extends MvmChainId
    ? MvmToken<Metadata>
    : TChainId extends KvmChainId
      ? KvmToken<Metadata>
      : TChainId extends SvmChainId
        ? SvmCurrency<Metadata>
        : never

export type AddressFor<TChainId extends ChainId> = TChainId extends EvmChainId
  ? EvmAddress
  : TChainId extends MvmChainId
    ? MvmAddress
    : TChainId extends KvmChainId
      ? KvmTokenAddress
      : TChainId extends SvmChainId
        ? SvmAddress
        : TChainId extends StellarChainId
          ? StellarAddress
          : never

export type TxHashFor<TChainId extends ChainId> = TChainId extends EvmChainId
  ? EvmTxHash
  : TChainId extends MvmChainId
    ? MvmTxHash
    : TChainId extends KvmChainId
      ? KvmTxHash
      : TChainId extends SvmChainId
        ? SvmTxHash
        : TChainId extends StellarChainId
          ? StellarTxHash
          : never

export type IDFor<
  TChainId extends EvmChainId | SvmChainId,
  TIncludeNative extends boolean = false,
> = TChainId extends EvmChainId
  ? EvmID<TIncludeNative>
  : TChainId extends SvmChainId
    ? SvmID<TIncludeNative>
    : never
