import type { EvmChainId } from '~/evm/chain/chains.js'
import type { EvmAddress } from '~/evm/currency/token.js'
import type { SvmChainId } from '~/svm/chain/chains.js'
import type { SvmAddress } from '~/svm/currency/token.js'
import type { ChainId } from '../chain/chains.js'

export type AddressFor<TChainId extends ChainId> = TChainId extends EvmChainId
  ? EvmAddress
  : TChainId extends SvmChainId
    ? SvmAddress
    : never
