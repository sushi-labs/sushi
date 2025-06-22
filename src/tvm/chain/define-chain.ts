import type {
  BlockExplorers,
  Chain,
  NetType,
} from '~generic/chain/interface.js'
import type { TvmChainId, TvmChainKey } from './chains.js'

export type TvmChainType = 'tvm'

type TvmChainBase<TChainId extends number, TChainKey extends string> = Chain<
  TvmChainType,
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

export type TvmChain = TvmChainBase<TvmChainId, TvmChainKey>

type TvmChainInput = Omit<
  TvmChainBase<number, string>,
  'type' | 'getTransactionUrl' | 'getAccountUrl'
>

export function defineTvmChain<const T extends TvmChainInput>(chain: T) {
  return {
    ...chain,
    type: 'tvm' as const,

    getTransactionUrl: (input: string) =>
      `${chain.blockExplorers.default.url}/txn/${input}`,
    getAccountUrl: (input: string) =>
      `${chain.blockExplorers.default.url}/acount/${input}`,
  } as const satisfies TvmChainBase<number, string>
}
