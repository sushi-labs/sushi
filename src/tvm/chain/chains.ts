import type { Replace } from '../../generic/types/replace.js'
import type { UnionToIntersection } from '../../generic/types/union-to-intersection.js'
import { defineTvmChain } from './define-chain.js'

const tron = defineTvmChain({
  chainId: -2,
  name: 'Tron',
  shortName: 'trx',
  key: 'tron',
  blockExplorers: {
    default: { name: 'Tronscan', url: 'https://tronscan.io' },
  },
  netType: 'mainnet',
})

export const tvmChains = [tron] as const

// TvmChainId

export const tvmChainIds = /* @__PURE__ */ tvmChains.map(
  (chain) => chain.chainId,
)

export type TvmChainId = (typeof tvmChainIds)[number]

type TvmChainIdMap = UnionToIntersection<
  (typeof tvmChains)[number] extends infer I
    ? I extends { key: infer K; chainId: infer C }
      ? K extends string
        ? { [key in K as Uppercase<Replace<key, '-', '_'>>]: C }
        : never
      : never
    : never
>

export const TvmChainId = /* @__PURE__ */ new Proxy<TvmChainIdMap>(
  {} as TvmChainIdMap,
  {
    get: (_: unknown, key: keyof TvmChainIdMap) => {
      const _key = key.toLowerCase().replace(/_/g, '-') as TvmChainKey
      const chain = tvmChains.find((chain) => chain.key === _key)

      if (!chain) return undefined

      return chain.chainId
    },
  },
)

export function isTvmChainId(chainId: number): chainId is TvmChainId {
  return tvmChains.some((chain) => chain.chainId === chainId)
}

export function getTvmChainById<C extends TvmChainId>(chainId: C) {
  return tvmChains.find((chain) => chain.chainId === chainId)! as Extract<
    (typeof tvmChains)[number],
    { chainId: C }
  >
}

// TvmMainnetChainId

export type TvmMainnetChainId = Extract<
  (typeof tvmChains)[number],
  { netType: 'mainnet' }
>['chainId']

export function isTvmMainnetChainId(
  chainId: number,
): chainId is TvmMainnetChainId {
  return tvmChains.some(
    (chain) => chain.chainId === chainId && chain.netType === 'mainnet',
  )
}

// // TvmTestnetChainId

// export type TvmTestnetChainId = Extract<
//   (typeof tvmChains)[number],
//   { netType: 'testnet' }
// >['chainId']

// export function isTvmTestnetChainId(
//   chainId: number,
// ): chainId is TvmTestnetChainId {
//   return tvmChains.some(
//     (chain) => chain.chainId === chainId && chain.netType === 'testnet',
//   )
// }

// TvmChainKey

export type TvmChainKey = (typeof tvmChains)[number]['key']

export function isTvmChainKey(key: string): key is TvmChainKey {
  return tvmChains.some((chain) => chain.key === key)
}

export function getTvmChainByKey<C extends TvmChainKey>(key: C) {
  return tvmChains.find((chain) => chain.key === key)! as Extract<
    (typeof tvmChains)[number],
    { key: C }
  >
}
