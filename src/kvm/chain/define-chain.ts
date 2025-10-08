import type {
  BlockExplorers,
  Chain,
  NetType,
} from '../../generic/chain/interface.js'
import type { KvmChainId, KvmChainKey } from './chains.js'

export type KvmChainType = 'kvm'

type KvmChainBase<TChainId extends number, TChainKey extends string> = Chain<
  KvmChainType,
  // @ts-expect-error infinite loop
  TChainId,
  TChainKey,
  Readonly<string>,
  Readonly<string>,
  NetType,
  BlockExplorers,
  string,
  string
>

export type KvmChain = KvmChainBase<KvmChainId, KvmChainKey>

type KvmChainInput = Omit<
  KvmChainBase<number, string>,
  'type' | 'getTransactionUrl' | 'getAccountUrl' | 'getTokenUrl' | 'networdId'
>

export function defineKvmChain<const T extends KvmChainInput>(chain: T) {
  return {
    ...chain,
    type: 'kvm' as const,
    getTransactionUrl: (input: string) =>
      `${chain.blockExplorers.default.url}/transactions/${input}`,
    getAccountUrl: (input: string) =>
      `${chain.blockExplorers.default.url}/account/${input}`,
    getTokenUrl: (input: string) =>
      `${chain.blockExplorers.default.url}/token/${input}`,
  } as const satisfies KvmChainBase<number, string>
}
