import type { Replace } from '../../generic/types/replace.js'
import type { UnionToIntersection } from '../../generic/types/union-to-intersection.js'
import { defineSvmChain } from './define-chain.js'

const solana = defineSvmChain({
  chainId: -5,
  key: 'solana',
  shortName: 'sol',
  name: 'Solana',
  blockExplorers: {
    default: {
      name: 'Solscan',
      url: 'https://solscan.io',
    },
  },
  netType: 'mainnet',
  nativeCurrency: {
    name: 'Solana',
    symbol: 'SOL',
    decimals: 9,
  },
})

export const svmChains = [solana] as const

export const svmChainIds = /* @__PURE__ */ svmChains.map(
  (chain) => chain.chainId,
)

export type SvmChainId = (typeof svmChainIds)[number]

type SvmChainIdMap = UnionToIntersection<
  (typeof svmChains)[number] extends infer I
    ? I extends { key: infer K; chainId: infer C }
      ? K extends string
        ? { [key in K as Uppercase<Replace<key, '-', '_'>>]: C }
        : never
      : never
    : never
>

export const SvmChainId = /* @__PURE__ */ new Proxy<SvmChainIdMap>(
  {} as SvmChainIdMap,
  {
    get: (_: unknown, key: keyof SvmChainIdMap) => {
      const _key = key.toLowerCase().replace(/_/g, '-') as SvmChainKey
      const chain = svmChains.find((chain) => chain.key === _key)

      if (!chain) return undefined

      return chain.chainId
    },
  },
)

export function isSvmChainId(chainId: number): chainId is SvmChainId {
  return svmChains.some((chain) => chain.chainId === chainId)
}

export function getSvmChainById<C extends SvmChainId>(chainId: C) {
  return svmChains.find((chain) => chain.chainId === chainId)! as Extract<
    (typeof svmChains)[number],
    { chainId: C }
  >
}

// SvmMainnetChainId
export type SvmMainnetChainId = Extract<
  (typeof svmChains)[number],
  { netType: 'mainnet' }
>['chainId']

export function isSvmMainnetChainId(
  chainId: number,
): chainId is SvmMainnetChainId {
  return svmChains.some(
    (chain) => chain.chainId === chainId && chain.netType === 'mainnet',
  )
}

// SvmChainKey
export type SvmChainKey = (typeof svmChains)[number]['key']

export function isSvmChainKey(key: string): key is SvmChainKey {
  return svmChains.some((chain) => chain.key === key)
}

export function getSvmChainByKey<C extends SvmChainKey>(key: C) {
  return svmChains.find((chain) => chain.key === key)! as Extract<
    (typeof svmChains)[number],
    { key: C }
  >
}
