import type { EvmChainId } from '../chain/evm/index.js'
import type { Address } from './address.js'
import type { ID } from './id.js'

export type Token = {
  id: ID
  address: Address
  chainId: EvmChainId
  name: string
  symbol: string
  decimals: number
}
