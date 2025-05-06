import { MvmChainId } from "./id.js"

export const MvmChainKey = {
    [MvmChainId.APTOS]: 'aptos',
  } as const satisfies Record<MvmChainId, string>
export type MvmChainKey = (typeof MvmChainId)[keyof typeof MvmChainId]