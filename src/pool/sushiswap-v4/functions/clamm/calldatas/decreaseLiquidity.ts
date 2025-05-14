import invariant from 'tiny-invariant'
import { type Address, type Hex, isAddressEqual, zeroAddress } from 'viem'
import { ACTIONS } from '../../../constants/actions.js'
import type { PoolKey } from '../../../types.js'
import { ActionsPlanner } from '../../../utils/ActionsPlanner.js'
import { encodeCLPositionModifyLiquidities } from './modifyLiquidities.js'

export const encodeCLPositionManagerDecreaseLiquidityCalldata = ({
  tokenId,
  poolKey,
  liquidity,
  amount0Min,
  amount1Min,
  wrapAddress,
  recipient,
  hookData,
  deadline,
}: {
  tokenId: bigint
  poolKey: PoolKey<'CL'>
  liquidity: bigint
  amount0Min: bigint
  amount1Min: bigint
  wrapAddress?: Address
  recipient?: Address
  hookData?: Hex
  deadline: bigint
}) => {
  const planner = new ActionsPlanner()
  planner.add(ACTIONS.CL_DECREASE_LIQUIDITY, [
    tokenId,
    liquidity,
    amount0Min,
    amount1Min,
    hookData ?? '0x',
  ])
  let calls: Hex
  if (wrapAddress && !isAddressEqual(wrapAddress, zeroAddress)) {
    invariant(
      recipient && !isAddressEqual(recipient, zeroAddress),
      'Invalid Wrap Config',
    )
    calls = planner.finalizeModifyLiquidityWithCloseWrap(
      poolKey,
      wrapAddress,
      recipient,
    )
  } else {
    calls = planner.finalizeModifyLiquidityWithClose(poolKey)
  }
  return encodeCLPositionModifyLiquidities(calls, deadline)
}
