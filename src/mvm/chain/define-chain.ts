import { defineChain } from '../../generic/chain/define-chain.js'
import type {
  BlockExplorers,
  ChainDefinition,
  NetType,
} from '../../generic/chain/interface.js'
import type { MvmChainId, MvmChainKey } from './chains.js'

export type MvmChainType = 'mvm'

type MvmChainBase<
  TChainId extends number,
  TChainKey extends string,
> = ChainDefinition<
  MvmChainType,
  TChainId,
  TChainKey,
  Readonly<string>,
  Readonly<string>,
  NetType,
  BlockExplorers,
  string,
  string
>

export type MvmChain = MvmChainBase<MvmChainId, MvmChainKey>

type MvmChainInput = Omit<
  MvmChainBase<number, string>,
  'type' | 'getTransactionUrl' | 'getAccountUrl' | 'getTokenUrl'
>

export function defineMvmChain<const T extends MvmChainInput>(chain: T) {
  return defineChain('mvm', chain, {
    transaction: (url, input) => `${url}/txn/${input}`,
    account: (url, input) => `${url}/account/${input}`,
    token: (url, input) => `${url}/coin/${input}`,
  })
}
