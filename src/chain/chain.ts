import type { ChainResult } from './define-chain.js'
import evmChains from './evm/index.js'
import type { ChainId } from './id.js'
import mvmChains from './non-evm/mvm/index.js'
import tvmChains from './non-evm/tvm/index.js'

export const Chain: Record<ChainId, ChainResult> = {
  ...evmChains,
  ...mvmChains,
  ...tvmChains,
}