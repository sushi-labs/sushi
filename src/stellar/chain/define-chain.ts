import { defineChain } from '../../generic/chain/define-chain.js'
import type {
  BlockExplorers,
  ChainDefinition,
  NetType,
} from '../../generic/chain/interface.js'
import { isStellarContractAddress } from '../address.js'
import type { StellarChainId, StellarChainKey } from './chains.js'

export type StellarChainType = 'stellar'

type StellarChainBase<
  TChainId extends number,
  TChainKey extends string,
> = ChainDefinition<
  StellarChainType,
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
  return defineChain('stellar', chain, {
    transaction: (url, input) => `${url}/tx/${input}`,
    account: (url, input) => {
      if (isStellarContractAddress(input)) {
        return `${url}/contract/${input}`
      }
      return `${url}/account/${input}`
    },
    token: (url, input) => `${url}/asset/${input}`,
  })
}
