export const MvmChainId = {
  APTOS: 'aptos',
} as const

export type MvmChainId = (typeof MvmChainId)[keyof typeof MvmChainId]
export const isMvmChainId = (chainId: string): chainId is MvmChainId =>
  Object.values(MvmChainId).includes(chainId as MvmChainId)
