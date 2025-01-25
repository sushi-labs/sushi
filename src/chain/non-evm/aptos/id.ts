export const AptosChainId = {
  APTOS: -1,
} as const

export type AptosChainId = (typeof AptosChainId)[keyof typeof AptosChainId]
