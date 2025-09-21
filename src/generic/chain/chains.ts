import { evmChains } from '../../evm/chain/index.js'
import { kvmChains } from '../../kvm/chain/chains.js'
import { mvmChains } from '../../mvm/chain/chains.js'
import { tvmChains } from '../../tvm/chain/chains.js'
import type { Replace } from '../types/replace.js'
import type { UnionToIntersection } from '../types/union-to-intersection.js'

export const chains = [
  ...evmChains,
  ...mvmChains,
  ...tvmChains,
  ...kvmChains,
] as const

// ChainId

export type ChainId = (typeof chains)[number]['chainId']

type ChainIdMap = UnionToIntersection<
  (typeof chains)[number] extends infer I
    ? I extends { key: infer K; chainId: infer C }
      ? K extends string
        ? { [key in K as Uppercase<Replace<key, '-', '_'>>]: C }
        : never
      : never
    : never
>

export const ChainId = /* @__PURE__ */ new Proxy<ChainIdMap>({} as ChainIdMap, {
  get: (_: unknown, key: keyof ChainIdMap) => {
    const _key = key.toLowerCase().replace(/_/g, '-') as ChainKey
    const chain = chains.find((chain) => chain.key === _key)

    if (!chain) return undefined

    return chain.chainId
  },
  ownKeys: () => chains.map((c) => c.key),
  getOwnPropertyDescriptor: () => {
    return { enumerable: true, configurable: true }
  },
})

export const chainIds = /* @__PURE__ */ chains.map((chain) => chain.chainId)

export function isChainId(chainId: number): chainId is ChainId {
  return chains.some((chain) => chain.chainId === chainId)
}

export function getChainById<C extends ChainId>(chainId: C) {
  return chains.find((chain) => chain.chainId === chainId)! as Extract<
    (typeof chains)[number],
    { chainId: C }
  >
}

// MainnetChainId

export type MainnetChainId = Extract<
  (typeof chains)[number],
  { netType: 'mainnet' }
>['chainId']

export function isMainnetChainId(chainId: number): chainId is MainnetChainId {
  return chains.some(
    (chain) => chain.chainId === chainId && chain.netType === 'mainnet',
  )
}

// TestnetChainId

export type TestnetChainId = Extract<
  (typeof chains)[number],
  { netType: 'testnet' }
>['chainId']

export function isTestnetChainId(chainId: number): chainId is TestnetChainId {
  return chains.some(
    (chain) => chain.chainId === chainId && chain.netType === 'testnet',
  )
}

// ChainKey

export type ChainKey = (typeof chains)[number]['key']

export function isChainKey(key: string): key is ChainKey {
  return chains.some((chain) => chain.key === key)
}

export function getChainByKey<C extends ChainKey>(key: C) {
  return chains.find((chain) => chain.key === key)! as Extract<
    (typeof chains)[number],
    { key: C }
  >
}
