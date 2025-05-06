import { EvmChain } from './evm/index.js'
import { MvmChain } from './non-evm/mvm/index.js'
import { TvmChain } from './non-evm/tvm/index.js'

export const Chain = {
  ...EvmChain,
  ...MvmChain,
  ...TvmChain,
}