import { type Hex, encodeFunctionData } from 'viem'
import { sushiswapV4CLPoolManagerAbi_donate } from '../../../../../abi/index.js'
import type { PoolKey } from '../../../types.js'
import { encodePoolKey } from '../../../utils/encodePoolKey.js'

export const encodeCLPoolDonateCalldata = (
  poolKey: PoolKey<'CL'>,
  amount0: bigint,
  amount1: bigint,
  hookData: Hex = '0x',
) => {
  return encodeFunctionData({
    abi: sushiswapV4CLPoolManagerAbi_donate,
    functionName: 'donate',
    args: [encodePoolKey(poolKey), amount0, amount1, hookData],
  })
}
