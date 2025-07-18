import type { Address } from 'viem'
import type { PoolId } from '../sushi-pool/pool-id.js'

export type SushiPositionBase = {
  user: Address
  unstakedBalance: bigint
  pool: PoolId
}
