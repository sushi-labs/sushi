import { encodeFunctionData } from 'viem'
import { sushiswapV4CLPositionManagerAbi_initializePool } from '../../../../../abi/index.js'
import type { PoolKey } from '../../../types.js'
import { encodePoolKey } from '../../../utils/encodePoolKey.js'

export const encodeCLPositionManagerInitializePoolCalldata = (
  poolKey: PoolKey<'CL'>,
  sqrtPriceX96: bigint,
) => {
  return encodeFunctionData({
    abi: sushiswapV4CLPositionManagerAbi_initializePool,
    functionName: 'initializePool',
    args: [encodePoolKey(poolKey), sqrtPriceX96],
  })
}
