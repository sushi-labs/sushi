import type { EvmToken } from '~evm/currency/token.js'
import type { PoolId } from './pool-id.js'
import type { PoolSwapFee } from './pool-swap-fee.js'

export type PoolBase<T extends PoolId = PoolId> = PoolSwapFee<T> & {
  name: string

  token0: EvmToken
  token1: EvmToken

  // twapEnabled: boolean

  reserve0: bigint
  reserve1: bigint
  liquidity: bigint

  liquidityUSD: number

  volumeUSD: number

  feesUSD: number

  token0Price: number
  token1Price: number

  txCount: number
}
