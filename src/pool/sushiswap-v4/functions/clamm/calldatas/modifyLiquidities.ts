import { type Hex, encodeFunctionData } from 'viem'
import { sushiswapV4CLPositionManagerAbi_modifyLiquidities } from '../../../../../abi/index.js'

export const encodeCLPositionModifyLiquidities = (
  calls: Hex,
  deadline: bigint,
) => {
  return encodeFunctionData({
    abi: sushiswapV4CLPositionManagerAbi_modifyLiquidities,
    functionName: 'modifyLiquidities',
    args: [calls, deadline],
  })
}
