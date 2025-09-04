import type {
  BlockExplorers,
  Chain,
  NetType,
} from '../../generic/chain/interface.js'
import type { ChainwebChainId, ChainwebChainKey } from './chains.js'

export type ChainwebChainType = 'chainweb'

type ChainwebChainBase<
  TChainId extends number,
  TChainKey extends string,
> = Chain<
  ChainwebChainType,
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

export type ChainwebChain = ChainwebChainBase<ChainwebChainId, ChainwebChainKey>

type ChainwebChainInput = Omit<
  ChainwebChainBase<number, string>,
  'type' | 'getTransactionUrl' | 'getAccountUrl' | 'getTokenUrl' | 'networdId'
>

export function defineChainwebChain<const T extends ChainwebChainInput>(
  chain: T,
) {
  return {
    ...chain,
    type: 'chainweb' as const,
    getTransactionUrl: (input: string) =>
      `${chain.blockExplorers.default.url}/txdetail/${input}`,
    getAccountUrl: (input: string) =>
      `${chain.blockExplorers.default.url}/account/${input}`,
    getTokenUrl: (input: string) =>
      `${chain.blockExplorers.default.url}/account/${input}`,
  } as const satisfies ChainwebChainBase<number, string>
}
