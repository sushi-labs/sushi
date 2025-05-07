export const TvmChainId = {
  TRON: 'tron',
} as const

export type TvmChainId = (typeof TvmChainId)[keyof typeof TvmChainId]
export const isTvmChainId = (chainId: string): chainId is TvmChainId =>
  Object.values(TvmChainId).includes(chainId as TvmChainId)
