import type {
  BlockExplorers,
  Chain,
  NetType,
} from '../../generic/chain/interface.js'
import { isStellarContractAddress } from '../address.js'
import type { StellarChainId, StellarChainKey } from './chains.js'

export type StellarChainType = 'stellar'

type StellarChainBase<
  TChainId extends number,
  TChainKey extends string,
> = Chain<
  StellarChainType,
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

export type StellarChain = StellarChainBase<StellarChainId, StellarChainKey>

type StellarChainInput = Omit<
  StellarChainBase<number, string>,
  'type' | 'getTransactionUrl' | 'getAccountUrl' | 'getTokenUrl'
>

export function defineStellarChain<const T extends StellarChainInput>(
  chain: T,
) {
  return {
    ...chain,
    type: 'stellar' as const,

    getTransactionUrl: (input: string) =>
      `${chain.blockExplorers.default.url}/tx/${input}`,
    getAccountUrl: (input: string) => {
      if (isStellarContractAddress(input)) {
      return `${chain.blockExplorers.default.url}/contract/${input}`
      }
      return `${chain.blockExplorers.default.url}/account/${input}`
    },
    getTokenUrl: (input: string) =>
      `${chain.blockExplorers.default.url}/asset/${input}`,
  } as const satisfies StellarChainBase<number, string>
}
