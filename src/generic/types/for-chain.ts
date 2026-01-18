import type { EvmChainId } from '../../evm/chain/chains.js'
import type { EvmCurrency } from '../../evm/currency/currency.js'
import type { EvmAddress, EvmToken } from '../../evm/currency/token.js'
import type { EvmID } from '../../evm/types/id.js'
import type { KvmChainId } from '../../kvm/chain/chains.js'
import type { KvmToken, KvmTokenAddress } from '../../kvm/currency/token.js'
import type { MvmChainId } from '../../mvm/chain/chains.js'
import type { MvmAddress, MvmToken } from '../../mvm/currency/token.js'
import type { StellarAddress } from '../../stellar/address.js'
import type { StellarChainId } from '../../stellar/chain/chains.js'
import type { SvmChainId } from '../../svm/chain/chains.js'
import type { SvmCurrency } from '../../svm/currency/currency.js'
import type { SvmAddress, SvmToken } from '../../svm/currency/token.js'
import type { SvmID } from '../../svm/types/id.js'
import type { TvmChainId } from '../../tvm/chain/chains.js'
import type { TvmCurrency } from '../../tvm/currency/currency.js'
import type { TvmAddress, TvmToken } from '../../tvm/currency/token.js'
import type { ChainId } from '../chain/chains.js'
import type { CurrencyMetadata } from '../currency/currency.js'

export type TokenFor<
  TChainId extends Exclude<ChainId, StellarChainId>,
  Metadata extends CurrencyMetadata = CurrencyMetadata,
> = TChainId extends EvmChainId
  ? EvmToken<Metadata>
  : TChainId extends MvmChainId
    ? MvmToken<Metadata>
    : TChainId extends TvmChainId
      ? TvmToken<Metadata>
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
      : TChainId extends TvmChainId
        ? TvmCurrency<Metadata>
        : TChainId extends SvmChainId
          ? SvmCurrency<Metadata>
          : never

export type AddressFor<TChainId extends ChainId> = TChainId extends EvmChainId
  ? EvmAddress
  : TChainId extends MvmChainId
    ? MvmAddress
    : TChainId extends TvmChainId
      ? TvmAddress
      : TChainId extends KvmChainId
        ? KvmTokenAddress
        : TChainId extends SvmChainId
          ? SvmAddress
          : TChainId extends StellarChainId
            ? StellarAddress
            : never

export type IDFor<
  TChainId extends EvmChainId | SvmChainId,
  TIncludeNative extends boolean = false,
> = TChainId extends EvmChainId
  ? EvmID<TIncludeNative>
  : TChainId extends SvmChainId
    ? SvmID<TIncludeNative>
    : never
