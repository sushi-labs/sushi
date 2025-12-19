import type {
  BlockExplorers,
  Chain,
  NetType,
} from '../../generic/chain/interface.js'
import type { SvmAddress } from '../currency/token.js'
import type { SvmChainId, SvmChainKey } from './chains.js'

export type SvmChainType = 'svm'

type SvmChainNativeCurrency = {
  name: string
  symbol: string
  decimals: number
}

type SvmChainBase<TChainId extends number, TChainKey extends string> = Chain<
  SvmChainType,
  // @ts-expect-error infinite loop
  TChainId,
  TChainKey,
  Readonly<string>,
  Readonly<string>,
  NetType,
  BlockExplorers,
  string,
  string
> & {
  nativeCurrency: SvmChainNativeCurrency
}

export type SvmChain = SvmChainBase<SvmChainId, SvmChainKey>

type SvmChainInput = Omit<
  SvmChainBase<number, string>,
  'type' | 'getTransactionUrl' | 'getAccountUrl' | 'getTokenUrl'
>

export function defineSvmChain<const T extends SvmChainInput>(chain: T) {
  return {
    ...chain,
    type: 'svm' as const,
    getTransactionUrl: (input: string) =>
      `${chain.blockExplorers.default.url}/tx/${input}`,
    getAccountUrl: (input: SvmAddress) =>
      `${chain.blockExplorers.default.url}/account/${input}`,
    getTokenUrl: (input: SvmAddress) =>
      `${chain.blockExplorers.default.url}/token/${input}`,
  } as const satisfies SvmChainBase<number, string>
}
