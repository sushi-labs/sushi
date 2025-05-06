import { defineChain } from '../../define-chain.js'
import { MvmChainId } from './id.js'

export * from './id.js'
export * from './key.js'

const aptos = defineChain({
  type: 'mvm',
  id: MvmChainId.APTOS,
  name: 'Aptos',
  blockExplorers: {
    default: { name: 'Aptos Explorer', url: 'https://explorer.aptoslabs.com' }
  }
})

const chains = [
  aptos
] as const

export const mvmChains = Object.fromEntries(
  chains.map((chain) => [chain.id, chain]),
) as Record<MvmChainId, typeof chains[number]>

export default mvmChains