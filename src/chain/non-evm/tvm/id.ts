export const TvmChainId = {
  TRON: "tron:728126428",
} as const

export type TvmChainId = (typeof TvmChainId)[keyof typeof TvmChainId]
export const isTvmChainId = (chainId: string): chainId is TvmChainId =>
  Object.values(TvmChainId).includes(chainId as TvmChainId)