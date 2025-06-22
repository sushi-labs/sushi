import type {
  BlockExplorers,
  Chain,
  NetType,
} from '~generic/chain/interface.js'
import type { MvmChainId, MvmChainKey } from './chains.js'

export type MvmChainType = 'mvm'

type MvmChainBase<TChainId extends number, TChainKey extends string> = Chain<
  MvmChainType,
  // @ts-expect-error prevent infinite loop
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
  'type' | 'getTransactionUrl' | 'getAccountUrl'
>

export function defineMvmChain<const T extends MvmChainInput>(chain: T) {
  return {
    ...chain,
    type: 'mvm' as const,

    getTransactionUrl: (input: string) =>
      `${chain.blockExplorers.default.url}/txn/${input}`,
    getAccountUrl: (input: string) =>
      `${chain.blockExplorers.default.url}/acount/${input}`,
  } as const satisfies MvmChainBase<number, string>
}
