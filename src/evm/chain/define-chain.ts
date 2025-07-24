import type { Address, Hex, Chain as ViemChain } from 'viem'
import type {
  BlockExplorers,
  Chain,
  NetType,
} from '../../generic/chain/interface.js'
import type { EvmChainId, EvmChainKey } from '../chain/chains.js'
import type { EvmAddress } from '../currency/token.js'

export type EvmChainType = 'evm'

type EvmChainBase<TChainId extends number, TChainKey extends string> = Chain<
  EvmChainType,
  // @ts-ignore infinite loop
  TChainId,
  TChainKey,
  Readonly<string>,
  Readonly<string>,
  Readonly<NetType>,
  BlockExplorers,
  Address,
  Hex
> & {
  parentChainId: TChainId | undefined
  viemChain: ViemChain
}

export type EvmChain = EvmChainBase<EvmChainId, EvmChainKey>

type EvmChainInput<VC extends ViemChain> = Omit<
  EvmChainBase<number, string>,
  | 'chainId'
  | 'type'
  | 'viemChain'
  | 'chainId'
  | 'blockExplorers'
  | 'name'
  | 'nativeCurrency'
  | 'rpcUrls'
  | 'getTransactionUrl'
  | 'getAccountUrl'
  | 'getTokenUrl'
  | 'netType'
  | 'parentChainId'
> & {
  chainId?: number
  name?: string
  nativeCurrency?: ViemChain['nativeCurrency']
  rpcUrls?: ViemChain['rpcUrls']
  parentChainId?: number
} & (VC['blockExplorers'] extends BlockExplorers // Require BlockExplorers if viem is missing them
    ? {
        blockExplorers?: BlockExplorers
      }
    : {
        blockExplorers: BlockExplorers
      }) &
  // Require multicall3 if viem is missing it
  (NonNullable<VC['contracts']> extends Record<'multicall3', unknown>
    ? {
        contracts?: VC['contracts'] & {
          multicall3: {
            address: `0x${string}`
            blockCreated?: number
          }
        }
      }
    : {
        contracts: VC['contracts'] & {
          multicall3: {
            address: `0x${string}`
            blockCreated?: number
          }
        }
      })

type Fallback<T, V> = T extends NonNullable<T> ? T : V

/**
 *
 * @brief Defines an EVM chain object.
 *
 * @param viemChain A chain either imported from viem or defined using viem's defineChain
 * @param chain A chain object that mostly overrides properties from viemChain
 * @returns An EvmChain object
 *
 */
export function defineEvmChain<
  const V extends ViemChain,
  const T extends EvmChainInput<V>,
>(viemChain: V, chain: T) {
  const chainId = (chain.chainId || viemChain.id) as Fallback<
    T['chainId'],
    V['id']
  >
  const blockExplorers = (chain.blockExplorers ||
    viemChain.blockExplorers) as Fallback<
    T['blockExplorers'],
    V['blockExplorers']
  >
  const name = (chain.name || viemChain.name) as Fallback<T['name'], V['name']>
  const nativeCurrency = (chain.nativeCurrency ||
    viemChain.nativeCurrency) as Fallback<
    T['nativeCurrency'],
    V['nativeCurrency']
  >
  const rpcUrls = (chain.rpcUrls || viemChain.rpcUrls) as Fallback<
    T['rpcUrls'],
    V['rpcUrls']
  >
  const contracts = (chain.contracts || viemChain.contracts) as Fallback<
    T['contracts'],
    V['contracts']
  >

  const netType = (viemChain.testnet ? 'testnet' : 'mainnet') as Readonly<
    V['testnet'] extends true ? 'testnet' : 'mainnet'
  >

  // Typescript should catch this
  if (!blockExplorers) {
    throw new Error('defineEvmChain: blockExplorers is required')
  }

  // Typescript should catch this
  if (!contracts?.multicall3) {
    throw new Error('defineEvmChain: contracts->multicall3 is required')
  }

  return {
    type: 'evm',
    chainId,
    key: chain.key as T['key'],
    name,
    shortName: chain.shortName as T['shortName'],
    netType,
    blockExplorers,
    parentChainId: chain.parentChainId as Fallback<
      T['parentChainId'],
      undefined
    >,
    viemChain: {
      ...(viemChain as Omit<
        V,
        | 'id'
        | 'name'
        | 'nativeCurrency'
        | 'rpcUrls'
        | 'blockExplorers'
        | 'contracts'
      >),
      id: chainId,
      name: name,
      nativeCurrency: nativeCurrency,
      rpcUrls: rpcUrls,
      blockExplorers: blockExplorers,
      // Due to "satisfies"-related widening
      contracts: contracts as Fallback<T['contracts'], V['contracts']>,
    },

    getTransactionUrl: (input: EvmAddress) =>
      `${blockExplorers.default.url}/tx/${input}`,
    getAccountUrl: (input: EvmAddress) =>
      `${blockExplorers.default.url}/address/${input}`,
    getTokenUrl: (input: EvmAddress) =>
      `${blockExplorers.default.url}/token/${input}`,
  } as const satisfies EvmChainBase<number, string>
}
