import { TronChainId } from './id.js'

export * from './id.js'

export const tronChainIds = Object.values(TronChainId)

export const TRON_TESTNET_CHAIN_IDS = [] as const
export type TronTestnetChainId = (typeof TRON_TESTNET_CHAIN_IDS)[number]

export const isTronChainId = (chainId: number): chainId is TronChainId =>
  Object.values(TronChainId).includes(chainId as TronChainId)

export const TronChainKey = {
  [TronChainId.TRON]: 'tron',
} as const satisfies Record<TronChainId, string>
export type TronChainKey = (typeof TronChainKey)[keyof typeof TronChainKey]

export const TronNetworkNameKey = Object.fromEntries(
  Object.entries(TronChainKey).map(([key, value]) => [value, Number(key)]),
) as { [key in TronChainKey]: TronChainId }

export const isTronNetworkNameKey = (key: string): key is TronChainKey =>
  Object.keys(TronNetworkNameKey).includes(key)
