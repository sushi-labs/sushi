import invariant from 'tiny-invariant'
import {
  type Address,
  concat,
  encodeAbiParameters,
  encodeFunctionData,
  type Hex,
  numberToHex,
  zeroAddress,
} from 'viem'
import type { Percent } from '../../../generic/math/percent.js'
import { sushiSwapV4CLPositionManagerAbi_initializePool } from '../../abi/sushiSwapV4CLPositionManagerAbi/sushiSwapV4CLPositionManagerAbi_initializePool.js'
import { sushiSwapV4CLPositionManagerAbi_modifyLiquidities } from '../../abi/sushiSwapV4CLPositionManagerAbi/sushiSwapV4CLPositionManagerAbi_modifyLiquidities.js'
import { sushiSwapV4CLPositionManagerAbi_multicall } from '../../abi/sushiSwapV4CLPositionManagerAbi/sushiSwapV4CLPositionManagerAbi_multicall.js'
import { sushiSwapV4CLPositionManagerAbi_permitBatch } from '../../abi/sushiSwapV4CLPositionManagerAbi/sushiSwapV4CLPositionManagerAbi_permitBatch.js'
import type { Permit2PermitBatch } from '../../config/features/permit2.js'
import { SUSHISWAP_V4_MSG_SENDER, SushiSwapV4Action } from './constants.js'
import {
  type SushiSwapV4PoolKey,
  sushiSwapV4PoolKeyAbiParameter,
} from './pool-key.js'
import { SushiSwapV4Position } from './sushiswap-v4-position.js'

const ACTION_PARAMETERS = {
  [SushiSwapV4Action.CL_INCREASE_LIQUIDITY]: [
    { type: 'uint256' },
    { type: 'uint256' },
    { type: 'uint128' },
    { type: 'uint128' },
    { type: 'bytes' },
  ],
  [SushiSwapV4Action.CL_DECREASE_LIQUIDITY]: [
    { type: 'uint256' },
    { type: 'uint256' },
    { type: 'uint128' },
    { type: 'uint128' },
    { type: 'bytes' },
  ],
  [SushiSwapV4Action.CL_MINT_POSITION]: [
    sushiSwapV4PoolKeyAbiParameter,
    { type: 'int24' },
    { type: 'int24' },
    { type: 'uint256' },
    { type: 'uint128' },
    { type: 'uint128' },
    { type: 'address' },
    { type: 'bytes' },
  ],
  [SushiSwapV4Action.CL_BURN_POSITION]: [
    { type: 'uint256' },
    { type: 'uint128' },
    { type: 'uint128' },
    { type: 'bytes' },
  ],
  [SushiSwapV4Action.SETTLE_PAIR]: [{ type: 'address' }, { type: 'address' }],
  [SushiSwapV4Action.TAKE_PAIR]: [
    { type: 'address' },
    { type: 'address' },
    { type: 'address' },
  ],
  [SushiSwapV4Action.CLOSE_CURRENCY]: [{ type: 'address' }],
  [SushiSwapV4Action.SWEEP]: [{ type: 'address' }, { type: 'address' }],
} as const

/** Encodes the `(bytes actions, bytes[] params)` payload of `modifyLiquidities`. */
export class SushiSwapV4ActionsPlanner {
  private readonly actions: SushiSwapV4Action[] = []
  private readonly params: Hex[] = []

  public add<TAction extends SushiSwapV4Action>(
    action: TAction,
    params: Parameters<
      typeof encodeAbiParameters<(typeof ACTION_PARAMETERS)[TAction]>
    >[1],
  ): this {
    this.actions.push(action)
    this.params.push(encodeAbiParameters(ACTION_PARAMETERS[action], params))
    return this
  }

  public encode(): Hex {
    return encodeAbiParameters(
      [{ type: 'bytes' }, { type: 'bytes[]' }],
      [
        concat(this.actions.map((a) => numberToHex(a, { size: 1 }))),
        this.params,
      ],
    )
  }
}

export interface SushiSwapV4Permit2BatchSignature {
  owner: Address
  permitBatch: Permit2PermitBatch
  signature: Hex
}

export interface SushiSwapV4MethodParameters {
  calldata: Hex
  /** Native to send: the most of a native currency0 the call may settle. */
  value: bigint
}

function encodeModifyLiquidities(
  planner: SushiSwapV4ActionsPlanner,
  deadline: bigint,
) {
  return encodeFunctionData({
    abi: sushiSwapV4CLPositionManagerAbi_modifyLiquidities,
    functionName: 'modifyLiquidities',
    args: [planner.encode(), deadline],
  })
}

function encodeCalls(calls: Hex[]): Hex {
  invariant(calls.length > 0, 'CALLS')
  return calls.length === 1
    ? calls[0]!
    : encodeFunctionData({
        abi: sushiSwapV4CLPositionManagerAbi_multicall,
        functionName: 'multicall',
        args: [calls],
      })
}

/** Settles or takes both currencies' deltas with the caller. */
function closePair(
  planner: SushiSwapV4ActionsPlanner,
  poolKey: SushiSwapV4PoolKey,
) {
  planner.add(SushiSwapV4Action.CLOSE_CURRENCY, [poolKey.currency0])
  planner.add(SushiSwapV4Action.CLOSE_CURRENCY, [poolKey.currency1])
}

export interface SushiSwapV4AddLiquidityOptions {
  /** The liquidity to add, against the pool state it was computed at. */
  position: SushiSwapV4Position
  slippageTolerance: Percent
  deadline: bigint
  /** Increases this position; mints a new one to `recipient` when unset. */
  tokenId?: bigint
  /** The minted position's owner. */
  recipient?: Address
  /** Initializes the pool at the position's pool price first. */
  createPool?: boolean
  permit2?: SushiSwapV4Permit2BatchSignature
  hookData?: Hex
}

/**
 * Calldata to mint or increase a position. A native currency0 is paid from
 * `value`; whatever the pool does not take is swept back to the caller.
 */
export function addSushiSwapV4LiquidityCallParameters({
  position,
  slippageTolerance,
  deadline,
  tokenId,
  recipient,
  createPool = false,
  permit2,
  hookData = '0x',
}: SushiSwapV4AddLiquidityOptions): SushiSwapV4MethodParameters {
  invariant(position.liquidity > 0n, 'ZERO_LIQUIDITY')
  invariant(tokenId === undefined || !createPool, 'CREATE_POOL_INCREASE')
  invariant(tokenId !== undefined || recipient !== undefined, 'RECIPIENT')

  const { poolKey } = position.pool
  const { amount0, amount1 } =
    position.mintAmountsWithSlippage(slippageTolerance)
  const isNative = poolKey.currency0 === zeroAddress

  const calls: Hex[] = []

  if (createPool) {
    calls.push(
      encodeFunctionData({
        abi: sushiSwapV4CLPositionManagerAbi_initializePool,
        functionName: 'initializePool',
        args: [poolKey, position.pool.sqrtRatioX96],
      }),
    )
  }

  if (permit2) {
    calls.push(
      encodeFunctionData({
        abi: sushiSwapV4CLPositionManagerAbi_permitBatch,
        functionName: 'permitBatch',
        args: [permit2.owner, permit2.permitBatch, permit2.signature],
      }),
    )
  }

  const planner = new SushiSwapV4ActionsPlanner()

  if (tokenId === undefined) {
    planner.add(SushiSwapV4Action.CL_MINT_POSITION, [
      poolKey,
      position.tickLower,
      position.tickUpper,
      position.liquidity,
      amount0,
      amount1,
      recipient!,
      hookData,
    ])
    // A new position has no fees, so both deltas are debts
    planner.add(SushiSwapV4Action.SETTLE_PAIR, [
      poolKey.currency0,
      poolKey.currency1,
    ])
  } else {
    planner.add(SushiSwapV4Action.CL_INCREASE_LIQUIDITY, [
      tokenId,
      position.liquidity,
      amount0,
      amount1,
      hookData,
    ])
    // Accrued fees are credited first and may exceed what the increase costs
    closePair(planner, poolKey)
  }

  if (isNative) {
    planner.add(SushiSwapV4Action.SWEEP, [
      poolKey.currency0,
      SUSHISWAP_V4_MSG_SENDER,
    ])
  }

  calls.push(encodeModifyLiquidities(planner, deadline))

  return { calldata: encodeCalls(calls), value: isNative ? amount0 : 0n }
}

export interface SushiSwapV4RemoveLiquidityOptions {
  /** The whole position, at the current pool state. */
  position: SushiSwapV4Position
  tokenId: bigint
  liquidityPercentage: Percent
  slippageTolerance: Percent
  deadline: bigint
  /** Burns the position token; only when removing all liquidity. */
  burnToken?: boolean
  hookData?: Hex
}

/** Calldata to remove liquidity and collect the position's fees to the caller. */
export function removeSushiSwapV4LiquidityCallParameters({
  position,
  tokenId,
  liquidityPercentage,
  slippageTolerance,
  deadline,
  burnToken = false,
  hookData = '0x',
}: SushiSwapV4RemoveLiquidityOptions): SushiSwapV4MethodParameters {
  const liquidity = liquidityPercentage.mul(position.liquidity).quotient
  invariant(liquidity > 0n, 'ZERO_LIQUIDITY')
  invariant(!burnToken || liquidityPercentage.eq(1), 'CANNOT_BURN')

  const partial = new SushiSwapV4Position({
    pool: position.pool,
    tickLower: position.tickLower,
    tickUpper: position.tickUpper,
    liquidity,
  })
  const { amount0, amount1 } =
    partial.burnAmountsWithSlippage(slippageTolerance)

  const planner = new SushiSwapV4ActionsPlanner()
  if (burnToken) {
    planner.add(SushiSwapV4Action.CL_BURN_POSITION, [
      tokenId,
      amount0,
      amount1,
      hookData,
    ])
  } else {
    planner.add(SushiSwapV4Action.CL_DECREASE_LIQUIDITY, [
      tokenId,
      liquidity,
      amount0,
      amount1,
      hookData,
    ])
  }
  closePair(planner, position.pool.poolKey)

  return { calldata: encodeModifyLiquidities(planner, deadline), value: 0n }
}

/** Calldata to collect a position's fees to the caller. */
export function collectSushiSwapV4FeesCallParameters({
  tokenId,
  poolKey,
  deadline,
  hookData = '0x',
}: {
  tokenId: bigint
  poolKey: SushiSwapV4PoolKey
  deadline: bigint
  hookData?: Hex
}): SushiSwapV4MethodParameters {
  const planner = new SushiSwapV4ActionsPlanner()
  // Removing no liquidity only collects fees
  planner.add(SushiSwapV4Action.CL_DECREASE_LIQUIDITY, [
    tokenId,
    0n,
    0n,
    0n,
    hookData,
  ])
  closePair(planner, poolKey)

  return { calldata: encodeModifyLiquidities(planner, deadline), value: 0n }
}
