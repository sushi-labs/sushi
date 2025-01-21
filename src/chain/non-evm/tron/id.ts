export const TronChainId = {
  TRON: -2,
} as const

export type TronChainId = (typeof TronChainId)[keyof typeof TronChainId]
