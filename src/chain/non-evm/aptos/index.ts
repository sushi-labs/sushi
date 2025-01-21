import { AptosChainId } from './id.js'

export * from './id.js'

export const aptosChainIds = Object.values(AptosChainId)

export const APTOS_TESTNET_CHAIN_IDS = [] as const
export type AptosTestnetChainId = (typeof APTOS_TESTNET_CHAIN_IDS)[number]

export const isAptosChainId = (chainId: number): chainId is AptosChainId =>
  Object.values(AptosChainId).includes(chainId as AptosChainId)

export const AptosChainKey = {
  [AptosChainId.APTOS]: 'aptos',
} as const satisfies Record<AptosChainId, string>
export type AptosChainKey = (typeof AptosChainKey)[keyof typeof AptosChainKey]

export const AptosNetworkNameKey = Object.fromEntries(
  Object.entries(AptosChainKey).map(([key, value]) => [value, Number(key)]),
) as { [key in AptosChainKey]: AptosChainId }

export const isAptosNetworkNameKey = (key: string): key is AptosChainKey =>
  Object.keys(AptosNetworkNameKey).includes(key)
