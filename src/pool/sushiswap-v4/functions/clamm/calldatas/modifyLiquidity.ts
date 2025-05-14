import { type Hex, encodeFunctionData } from 'viem'
import { sushiswapV4CLPoolManagerAbi_modifyLiquidity } from '../../../../../abi/index.js'
import type { PoolKey } from '../../../types.js'
import { encodePoolKey } from '../../../utils/encodePoolKey.js'

export type CLPoolModifyLiquidityParams = {
  tickLower: number
  tickUpper: number
  liquidityDelta: bigint
  salt: Hex
}

export const encodeCLPoolModifyLiquidityCalldata = (
  poolKey: PoolKey<'CL'>,
  params: CLPoolModifyLiquidityParams,
  hookData: Hex = '0x',
) => {
  return encodeFunctionData({
    abi: sushiswapV4CLPoolManagerAbi_modifyLiquidity,
    functionName: 'modifyLiquidity',
    args: [encodePoolKey(poolKey), params, hookData],
  })
}
