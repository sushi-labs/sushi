import { type Address, type Hex, encodeFunctionData, zeroAddress } from 'viem'
import { sushiswapV4CLPositionManagerAbi_modifyLiquidities } from '../../../../../abi/sushiswapV4CLPositionManagerAbi/index.js'
import { ACTIONS } from '../../../constants/actions.js'
import type {
  CLPositionConfig,
  EncodedCLPositionConfig,
} from '../../../types.js'
import { ActionsPlanner } from '../../../utils/ActionsPlanner.js'
import { encodePoolParameters } from '../../../utils/encodePoolParameters.js'

export const encodeCLPositionManagerMintCalldata = (
  positionConfig: CLPositionConfig,
  liquidity: bigint,
  recipient: Address,
  amount0Max: bigint,
  amount1Max: bigint,
  deadline: bigint,
  hookData: Hex = '0x',
) => {
  const planner = new ActionsPlanner()
  if (!positionConfig.poolKey.hooks) {
    positionConfig.poolKey.hooks = zeroAddress
  }

  const encodedPositionConfig: EncodedCLPositionConfig = {
    ...positionConfig,
    poolKey: {
      ...positionConfig.poolKey,
      parameters: encodePoolParameters(positionConfig.poolKey.parameters),
    },
  }

  planner.add(ACTIONS.CL_MINT_POSITION, [
    encodedPositionConfig,
    liquidity,
    amount0Max,
    amount1Max,
    recipient,
    hookData,
  ])
  const calls = planner.finalizeModifyLiquidityWithSettlePair(
    positionConfig.poolKey,
    recipient,
  )

  return encodeFunctionData({
    abi: sushiswapV4CLPositionManagerAbi_modifyLiquidities,
    functionName: 'modifyLiquidities',
    args: [calls, deadline],
  })
}
