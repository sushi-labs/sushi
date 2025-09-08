import type { Replace } from '../../generic/types/replace.js'
import type { UnionToIntersection } from '../../generic/types/union-to-intersection.js'
import { defineKvmChain } from './define-chain.js'

const kadena = defineKvmChain({
  chainId: -3,
  key: 'kadena',
  shortName: 'kda',
  name: 'Kadena',
  blockExplorers: {
    default: {
      name: 'Kadena Explorer',
      url: 'https://explorer.chainweb.com/mainnet',
    },
  },
  netType: 'mainnet',
})

export const kvmChains = [kadena] as const

export const kvmChainIds = /* @__PURE__ */ kvmChains.map(
  (chain) => chain.chainId,
)

export type KvmChainId = (typeof kvmChainIds)[number]

type KvmChainIdMap = UnionToIntersection<
  (typeof kvmChains)[number] extends infer I
    ? I extends { key: infer K; chainId: infer C }
      ? K extends string
        ? { [key in K as Uppercase<Replace<key, '-', '_'>>]: C }
        : never
      : never
    : never
>

export const KvmChainId = /* @__PURE__ */ new Proxy<KvmChainIdMap>(
  {} as KvmChainIdMap,
  {
    get: (_: unknown, key: keyof KvmChainIdMap) => {
      const _key = key.toLowerCase().replace(/_/g, '-') as KvmChainKey
      const chain = kvmChains.find((chain) => chain.key === _key)

      if (!chain) return undefined

      return chain.chainId
    },
  },
)

export function isKvmChainId(chainId: number): chainId is KvmChainId {
  return kvmChains.some((chain) => chain.chainId === chainId)
}

export function getKvmChainById<C extends KvmChainId>(chainId: C) {
  return kvmChains.find((chain) => chain.chainId === chainId)! as Extract<
    (typeof kvmChains)[number],
    { chainId: C }
  >
}

// KvmMainnetChainId
export type KvmMainnetChainId = Extract<
  (typeof kvmChains)[number],
  { netType: 'mainnet' }
>['chainId']

export function isKvmMainnetChainId(
  chainId: number,
): chainId is KvmMainnetChainId {
  return kvmChains.some(
    (chain) => chain.chainId === chainId && chain.netType === 'mainnet',
  )
}

// KvmChainKey
export type KvmChainKey = (typeof kvmChains)[number]['key']

export function isKvmChainKey(key: string): key is KvmChainKey {
  return kvmChains.some((chain) => chain.key === key)
}

export function getKvmChainByKey<C extends KvmChainKey>(key: C) {
  return kvmChains.find((chain) => chain.key === key)! as Extract<
    (typeof kvmChains)[number],
    { key: C }
  >
}
