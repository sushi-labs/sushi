import { EvmChainId } from '../../chain/evm/index.js'

const MAX_FIRST_PARTIAL: Partial<Record<EvmChainId, number>> = {
  [EvmChainId.METIS]: 100,
}

export const MAX_FIRST = new Proxy(MAX_FIRST_PARTIAL, {
  get: (target, name: any) => {
    return name in target ? target[name as EvmChainId] : 1000
  },
}) as Record<EvmChainId, number>
