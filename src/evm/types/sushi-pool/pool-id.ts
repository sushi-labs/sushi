import type { Address } from 'viem'
import type { ID } from '../id.js'
import type { SushiSwapProtocol } from './protocol.js'
import type { EvmChainId } from '~evm/chain/chains.js'

export type PoolId = {
  id: ID
  address: Address
  chainId: EvmChainId

  protocol: SushiSwapProtocol
}
