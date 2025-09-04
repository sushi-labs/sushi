import type { Replace } from '../../generic/types/replace.js'
import type { UnionToIntersection } from '../../generic/types/union-to-intersection.js'
import { defineChainwebChain } from './define-chain.js'

const kadena = defineChainwebChain({
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

export const chainwebChains = [kadena] as const

export const chainwebChainIds = /* @__PURE__ */ chainwebChains.map(
  (chain) => chain.chainId,
)

export type ChainwebChainId = (typeof chainwebChainIds)[number]

type ChainwebChainIdMap = UnionToIntersection<
  (typeof chainwebChains)[number] extends infer I
    ? I extends { key: infer K; chainId: infer C }
      ? K extends string
        ? { [key in K as Uppercase<Replace<key, '-', '_'>>]: C }
        : never
      : never
    : never
>

export const ChainwebChainId = /* @__PURE__ */ new Proxy<ChainwebChainIdMap>(
  {} as ChainwebChainIdMap,
  {
    get: (_: unknown, key: keyof ChainwebChainIdMap) => {
      const _key = key.toLowerCase().replace(/_/g, '-') as ChainwebChainKey
      const chain = chainwebChains.find((chain) => chain.key === _key)

      if (!chain) return undefined

      return chain.chainId
    },
  },
)

export function isChainwebChainId(chainId: number): chainId is ChainwebChainId {
  return chainwebChains.some((chain) => chain.chainId === chainId)
}

export function getMvmChainById<C extends ChainwebChainId>(chainId: C) {
  return chainwebChains.find((chain) => chain.chainId === chainId)! as Extract<
    (typeof chainwebChains)[number],
    { chainId: C }
  >
}

// ChainwebMainnetChainId
export type ChainwebMainnetChainId = Extract<
  (typeof chainwebChains)[number],
  { netType: 'mainnet' }
>['chainId']

export function isChainwebMainnetChainId(
  chainId: number,
): chainId is ChainwebMainnetChainId {
  return chainwebChains.some(
    (chain) => chain.chainId === chainId && chain.netType === 'mainnet',
  )
}

// ChainwebChainKey

export type ChainwebChainKey = (typeof chainwebChains)[number]['key']

export function isChainwebChainKey(key: string): key is ChainwebChainKey {
  return chainwebChains.some((chain) => chain.key === key)
}

export function getChainwebChainByKey<C extends ChainwebChainKey>(key: C) {
  return chainwebChains.find((chain) => chain.key === key)! as Extract<
    (typeof chainwebChains)[number],
    { key: C }
  >
}
