import type { Address } from 'viem'
import type { EvmChainId } from '../../chain/chains.js'
import type { EvmID } from '../id.js'
import type { SushiSwapProtocol } from './protocol.js'

export type PoolId = {
  id: EvmID
  address: Address
  chainId: EvmChainId

  protocol: SushiSwapProtocol
}
