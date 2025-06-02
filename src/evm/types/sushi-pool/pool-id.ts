import type { EvmChainId } from '../../chain/evm/index.js'
import type { Address } from '../address.js'
import type { ID } from '../id.js'
import type { SushiSwapProtocol } from './protocol.js'

export type PoolId = {
  id: ID
  address: Address
  chainId: EvmChainId

  protocol: SushiSwapProtocol
}
