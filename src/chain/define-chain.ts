import type { Chain } from 'viem'
import type { EvmChainId } from './evm/id.js'
import type { MvmChainId, TvmChainId } from './non-evm/index.js'

interface EvmChainInput extends Chain {
  type: 'evm'
  id: EvmChainId
  name: string
  blockExplorers: {
    default: { name: string; url: string }
  }
}

interface TvmChainInput {
  type: 'tvm'
  id: TvmChainId
  name: string
  blockExplorers: {
    default: { name: string; url: string }
  }
}

interface MvmChainInput {
  type: 'mvm'
  id: MvmChainId
  name: string
  blockExplorers: {
    default: { name: string; url: string }
  }
}

type CreateChainInput = EvmChainInput | TvmChainInput | MvmChainInput

export type EvmChainResult<T extends EvmChainInput> = Readonly<
  T & {
    getTransactionUrl: (input: `0x${string}`) => string
    getAccountUrl: (input: `0x${string}`) => string
  }
>

export type TvmChainResult<T extends TvmChainInput> = Readonly<
  T & {
    getTransactionUrl: (input: string) => string
    getAccountUrl: (input: `T${string}`) => string
  }
>

export type MvmChainResult<T extends MvmChainInput> = Readonly<
  T & {
    getTransactionUrl: (input: string) => string
    getAccountUrl: (input: string) => string
  }
>

export function defineChain<T extends EvmChainInput>(
  chain: T,
): EvmChainResult<T>
export function defineChain<T extends TvmChainInput>(
  chain: T,
): TvmChainResult<T>
export function defineChain<T extends MvmChainInput>(
  chain: T,
): MvmChainResult<T>

export function defineChain<T extends CreateChainInput>(chain: T) {
  if (chain.type === 'evm') {
    return {
      ...chain,
      getTransactionUrl: (input: `0x${string}`) =>
        `${chain.blockExplorers.default.url}/tx/${input}`,
      getAccountUrl: (input: `0x${string}`) =>
        `${chain.blockExplorers.default.url}/address/${input}`,
    } as const
  } else if (chain.type === 'tvm') {
    return {
      ...chain,
      getTransactionUrl: (input: string) =>
        `${chain.blockExplorers.default.url}/transaction/${input}`,
      getAccountUrl: (input: string) =>
        `${chain.blockExplorers.default.url}/address/${input}`,
    } as const
  } else if (chain.type === 'mvm') {
    return {
      ...chain,
      getTransactionUrl: (input: string) =>
        `${chain.blockExplorers.default.url}/txn/${input}`,
      getAccountUrl: (input: string) =>
        `${chain.blockExplorers.default.url}/account/${input}`,
    } as const
  } else {
    throw new Error('Unsupported chain type')
  }
}

export type ChainResult =
  | EvmChainResult<EvmChainInput>
  | TvmChainResult<TvmChainInput>
  | MvmChainResult<MvmChainInput>
