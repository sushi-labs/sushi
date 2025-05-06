import { type TvmChainResult, defineChain } from '../../define-chain.js'
import { TvmChainId } from './id.js'

export * from './id.js'
export * from './key.js'

const tron = defineChain({
  type: 'tvm',
  id: TvmChainId.TRON,
  name: 'Tron',
  blockExplorers: {
    default: { name: 'Tronscan', url: 'https://tronscan.io' },
  },
})

const chains = [tron]

export const TvmChain = Object.fromEntries(
  chains.map((chain) => [chain.id, chain]),
) as Record<TvmChainId, TvmChainResult>
