import type { Replace } from '~generic/types/replace.js'
import type { UnionToIntersection } from '~generic/types/union-to-intersection.js'
import { defineMvmChain } from './define-chain.js'

const aptos = defineMvmChain({
  chainId: -1,
  key: 'aptos',
  name: 'Aptos',
  blockExplorers: {
    default: { name: 'Aptos Explorer', url: 'https://explorer.aptoslabs.com' },
  },
  netType: 'mainnet',
})

export const mvmChains = [aptos] as const

// MvmChainId

export const mvmChainIds = /* @__PURE__ */ mvmChains.map(
  (chain) => chain.chainId,
)

export type MvmChainId = (typeof mvmChainIds)[number]

type MvmChainIdMap = UnionToIntersection<
  (typeof mvmChains)[number] extends infer I
    ? I extends { key: infer K; chainId: infer C }
      ? K extends string
        ? { [key in K as Uppercase<Replace<key, '-', '_'>>]: C }
        : never
      : never
    : never
>

export const MvmChainId = /* @__PURE__ */ new Proxy<MvmChainIdMap>(
  {} as MvmChainIdMap,
  {
    get: (_: unknown, key: keyof MvmChainIdMap) => {
      const _key = key.toLowerCase().replace(/_/g, '-') as MvmChainKey
      const chain = mvmChains.find((chain) => chain.key === _key)

      if (!chain) return undefined

      return chain.chainId
    },
  },
)

export function isMvmChainId(chainId: number): chainId is MvmChainId {
  return mvmChains.some((chain) => chain.chainId === chainId)
}

export function getMvmChainById<C extends MvmChainId>(chainId: C) {
  return mvmChains.find((chain) => chain.chainId === chainId)! as Extract<
    (typeof mvmChains)[number],
    { chainId: C }
  >
}

// MvmMainnetChainId
export type MvmMainnetChainId = Extract<
  (typeof mvmChains)[number],
  { netType: 'mainnet' }
>['chainId']

export function isMvmMainnetChainId(
  chainId: number,
): chainId is MvmMainnetChainId {
  return mvmChains.some(
    (chain) => chain.chainId === chainId && chain.netType === 'mainnet',
  )
}

// // MvmTestnetChainId

// export type MvmTestnetChainId = Extract<
//   (typeof mvmChains)[number],
//   { netType: 'testnet' }
// >['chainId']

// export function isMvmTestnetChainId(
//   chainId: number,
// ): chainId is MvmTestnetChainId {
//   return mvmChains.some(
//     (chain) => chain.chainId === chainId && chain.netType === 'testnet',
//   )
// }

// MvmChainKey

export type MvmChainKey = (typeof mvmChains)[number]['key']

export function isMvmChainKey(key: string): key is MvmChainKey {
  return mvmChains.some((chain) => chain.key === key)
}

export function getMvmChainByKey<C extends MvmChainKey>(key: C) {
  return mvmChains.find((chain) => chain.key === key)! as Extract<
    (typeof mvmChains)[number],
    { key: C }
  >
}
