import type {
  BlockExplorers,
  ChainDefinition,
  ChainType,
  NetType,
} from './interface.js'

type ChainBase<
  TType extends ChainType,
  TAddress extends string,
> = ChainDefinition<
  TType,
  number,
  string,
  string,
  string,
  NetType,
  BlockExplorers,
  TAddress,
  string
>

export type ChainUrlBuilders<TAddress extends string> = {
  transaction: (baseUrl: string, input: string) => string
  account: (baseUrl: string, input: string) => string
  token: (baseUrl: string, input: TAddress) => string
}

export function defineChain<
  const TType extends ChainType,
  TAddress extends string,
  const T extends Omit<
    ChainBase<TType, TAddress>,
    'type' | 'getTransactionUrl' | 'getAccountUrl' | 'getTokenUrl'
  >,
>(type: TType, chain: T, urls: ChainUrlBuilders<TAddress>) {
  const baseUrl = chain.blockExplorers.default.url
  return {
    ...chain,
    type,
    getTransactionUrl: (input: string) => urls.transaction(baseUrl, input),
    getAccountUrl: (input: string) => urls.account(baseUrl, input),
    getTokenUrl: (input: TAddress) => urls.token(baseUrl, input),
  } as const satisfies ChainBase<TType, TAddress>
}
