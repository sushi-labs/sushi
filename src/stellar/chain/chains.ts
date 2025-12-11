import type { Replace } from '../../generic/types/replace.js'
import type { UnionToIntersection } from '../../generic/types/union-to-intersection.js'
import { defineStellarChain } from './define-chain.js'

const stellar = defineStellarChain({
  chainId: -4,
  name: 'Stellar',
  shortName: 'xlm',
  key: 'stellar',
  blockExplorers: {
    default: {
      name: 'StellarExpert',
      url: 'https://stellar.expert/explorer/public',
    },
  },
  netType: 'mainnet',
})

export const stellarChains = [stellar] as const

// StellarChainId

export const stellarChainIds = /* @__PURE__ */ stellarChains.map(
  (chain) => chain.chainId,
)

export type StellarChainId = (typeof stellarChainIds)[number]

type StellarChainIdMap = UnionToIntersection<
  (typeof stellarChains)[number] extends infer I
    ? I extends { key: infer K; chainId: infer C }
      ? K extends string
        ? { [key in K as Uppercase<Replace<key, '-', '_'>>]: C }
        : never
      : never
    : never
>

export const StellarChainId = /* @__PURE__ */ new Proxy<StellarChainIdMap>(
  {} as StellarChainIdMap,
  {
    get: (_: unknown, key: keyof StellarChainIdMap) => {
      const _key = key.toLowerCase().replace(/_/g, '-') as StellarChainKey
      const chain = stellarChains.find((chain) => chain.key === _key)

      if (!chain) return undefined

      return chain.chainId
    },
  },
)

export function isStellarChainId(chainId: number): chainId is StellarChainId {
  return stellarChains.some((chain) => chain.chainId === chainId)
}

export function getStellarChainById<C extends StellarChainId>(chainId: C) {
  return stellarChains.find((chain) => chain.chainId === chainId)! as Extract<
    (typeof stellarChains)[number],
    { chainId: C }
  >
}

// StellarMainnetChainId

export type StellarMainnetChainId = Extract<
  (typeof stellarChains)[number],
  { netType: 'mainnet' }
>['chainId']

export function isStellarMainnetChainId(
  chainId: number,
): chainId is StellarMainnetChainId {
  return stellarChains.some(
    (chain) => chain.chainId === chainId && chain.netType === 'mainnet',
  )
}

// // StellarTestnetChainId

// export type StellarTestnetChainId = Extract<
//   (typeof stellarChains)[number],
//   { netType: 'testnet' }
// >['chainId']

// export function isStellarTestnetChainId(
//   chainId: number,
// ): chainId is StellarTestnetChainId {
//   return stellarChains.some(
//     (chain) => chain.chainId === chainId && chain.netType === 'testnet',
//   )
// }

// StellarChainKey

export type StellarChainKey = (typeof stellarChains)[number]['key']

export function isStellarChainKey(key: string): key is StellarChainKey {
  return stellarChains.some((chain) => chain.key === key)
}

export function getStellarChainByKey<C extends StellarChainKey>(key: C) {
  return stellarChains.find((chain) => chain.key === key)! as Extract<
    (typeof stellarChains)[number],
    { key: C }
  >
}
