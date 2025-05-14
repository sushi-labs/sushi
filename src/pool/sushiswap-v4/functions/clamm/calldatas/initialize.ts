import { encodeFunctionData } from 'viem'
import { sushiswapV4CLPoolManagerAbi_initialize } from '../../../../../abi/index.js'
import type { PoolKey } from '../../../types.js'
import { encodePoolKey } from '../../../utils/encodePoolKey.js'

export const encodeCLPoolInitializeCalldata = (
  poolKey: PoolKey<'CL'>,
  sqrtPriceX96: bigint,
) => {
  return encodeFunctionData({
    abi: sushiswapV4CLPoolManagerAbi_initialize,
    functionName: 'initialize',
    args: [encodePoolKey(poolKey), sqrtPriceX96],
  })
}
