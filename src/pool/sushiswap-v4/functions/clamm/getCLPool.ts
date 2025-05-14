import {
  type GetPoolPrams,
  type SushiSwapV4PoolState,
  getPool,
} from '../getPool.js'

export interface SushiSwapV4CLPoolState extends SushiSwapV4PoolState {
  poolType: 'CL'
}

export const getCLPool = (
  params: Omit<GetPoolPrams, 'poolType'>,
): SushiSwapV4PoolState => {
  return getPool({
    ...params,
    poolType: 'CL',
  })
}
