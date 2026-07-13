import { defineChain } from '../../generic/chain/define-chain.js'
import type {
  BlockExplorers,
  ChainDefinition,
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

type SvmChainBase<
  TChainId extends number,
  TChainKey extends string,
> = ChainDefinition<
  SvmChainType,
  TChainId,
  TChainKey,
  Readonly<string>,
  Readonly<string>,
  NetType,
  BlockExplorers,
  SvmAddress,
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
  return defineChain('svm', chain, {
    transaction: (url, input) => `${url}/tx/${input}`,
    account: (url, input) => `${url}/account/${input}`,
    token: (url, input) => `${url}/token/${input}`,
  })
}
