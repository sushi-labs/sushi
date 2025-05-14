import { type MvmChainResult, defineChain } from '../../define-chain.js'
import { MvmChainId } from './id.js'

export * from './id.js'
export * from './key.js'

const aptos = defineChain({
  type: 'mvm',
  id: MvmChainId.APTOS,
  name: 'Aptos',
  blockExplorers: {
    default: { name: 'Aptos Explorer', url: 'https://explorer.aptoslabs.com' },
  },
})

const chains = [aptos]

export const MvmChain = Object.fromEntries(
  chains.map((chain) => [chain.id, chain]),
) as Record<MvmChainId, MvmChainResult>
