import { type Hex, encodeFunctionData } from 'viem'
import { sushiswapV4CLPoolManagerAbi_swap } from '../../../../../abi/index.js'
import type { PoolKey } from '../../../types.js'
import { encodePoolKey } from '../../../utils/encodePoolKey.js'

export type CLPoolSwapParams = {
  zeroForOne: boolean
  amountSpecified: bigint
  sqrtPriceLimitX96: bigint
}

export const encodeCLPoolSwapCalldata = (
  poolKey: PoolKey<'CL'>,
  swapParams: CLPoolSwapParams,
  hookData: Hex = '0x',
) => {
  return encodeFunctionData({
    abi: sushiswapV4CLPoolManagerAbi_swap,
    functionName: 'swap',
    args: [encodePoolKey(poolKey), swapParams, hookData],
  })
}
