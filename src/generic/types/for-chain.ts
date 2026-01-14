import type { EvmCurrency } from '~/evm/currency/currency.js'
import type { SvmCurrency } from '~/svm/currency/currency.js'
import type { EvmChainId } from '../../evm/chain/chains.js'
import type { EvmAddress, EvmToken } from '../../evm/currency/token.js'
import type { SvmChainId } from '../../svm/chain/chains.js'
import type { SvmAddress, SvmToken } from '../../svm/currency/token.js'
import type { ChainId } from '../chain/chains.js'
import type { CurrencyMetadata } from '../currency/currency.js'

export type TokenFor<
  TChainId extends EvmChainId | SvmChainId,
  Metadata extends CurrencyMetadata = CurrencyMetadata,
> = TChainId extends EvmChainId
  ? EvmToken<Metadata>
  : TChainId extends SvmChainId
    ? SvmToken<Metadata>
    : never

export type CurrencyFor<
  TChainId extends EvmChainId | SvmChainId,
  Metadata extends CurrencyMetadata = CurrencyMetadata,
> = TChainId extends EvmChainId
  ? EvmCurrency<Metadata>
  : TChainId extends SvmChainId
    ? SvmCurrency<Metadata>
    : never

export type AddressFor<TChainId extends ChainId> = TChainId extends EvmChainId
  ? EvmAddress
  : TChainId extends SvmChainId
    ? SvmAddress
    : never
