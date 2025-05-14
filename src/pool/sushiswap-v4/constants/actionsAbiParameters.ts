import {
  type AbiParameter,
  type AbiParameterKind,
  type AbiParameterToPrimitiveType,
  type Prettify,
  parseAbiParameters,
} from 'viem'
import {
  ABI_STRUCT_BIN_ADD_LIQUIDITY_FROM_DELTAS_PARAMS,
  ABI_STRUCT_BIN_ADD_LIQUIDITY_PARAMS,
  ABI_STRUCT_BIN_REMOVE_LIQUIDITY_PARAMS,
  ABI_STRUCT_BIN_SWAP_EXACT_INPUT_PARAMS,
  ABI_STRUCT_BIN_SWAP_EXACT_INPUT_SINGLE_PARAMS,
  ABI_STRUCT_BIN_SWAP_EXACT_OUTPUT_PARAMS,
  ABI_STRUCT_BIN_SWAP_EXACT_OUTPUT_SINGLE_PARAMS,
  ABI_STRUCT_CL_SWAP_EXACT_INPUT_PARAMS,
  ABI_STRUCT_CL_SWAP_EXACT_INPUT_SINGLE_PARAMS,
  ABI_STRUCT_CL_SWAP_EXACT_OUTPUT_PARAMS,
  ABI_STRUCT_CL_SWAP_EXACT_OUTPUT_SINGLE_PARAMS,
  ABI_STRUCT_POOL_KEY,
  ABI_STRUCT_POSITION_CONFIG,
} from './abiStructFragments.js'
import { ACTIONS } from './actions.js'

export const ACTIONS_ABI = {
  // 0x00
  [ACTIONS.CL_INCREASE_LIQUIDITY]: parseAbiParameters([
    'uint256 tokenId, uint128 liquidity, uint128 amount0Max, uint128 amount1Max, bytes hookData',
    ...ABI_STRUCT_POSITION_CONFIG,
  ]),
  // 0x01
  [ACTIONS.CL_DECREASE_LIQUIDITY]: parseAbiParameters(
    'uint256 tokenId, uint128 liquidity, uint128 amount0Min, uint128 amount1Min, bytes hookData',
  ),
  // 0x02
  [ACTIONS.CL_MINT_POSITION]: parseAbiParameters([
    'PositionConfig positionConfig, uint128 liquidity, uint128 amount0Max, uint128 amount1Max, address owner, bytes hookData',
    ...ABI_STRUCT_POSITION_CONFIG,
  ]),
  // 0x03
  [ACTIONS.CL_BURN_POSITION]: parseAbiParameters([
    'uint256 tokenId, PositionConfig config, uint128 amount0Min, uint128 amount1Min, bytes hookData',
    ...ABI_STRUCT_POSITION_CONFIG,
  ]),
  // 0x04
  [ACTIONS.CL_INCREASE_LIQUIDITY_FROM_DELTAS]: parseAbiParameters([
    'uint256 tokenId, uint128 amount0Max, uint128 amount1Max, bytes hookData',
  ]),
  // 0x05
  [ACTIONS.CL_MINT_POSITION_FROM_DELTAS]: parseAbiParameters([
    'PoolKey poolKey, int24 tickLower, int24 tickUpper, uint128 amount0Max, uint128 amount1Max, address owner, bytes hookData',
    ...ABI_STRUCT_POOL_KEY,
  ]),

  // 0x06
  [ACTIONS.CL_SWAP_EXACT_IN_SINGLE]: parseAbiParameters([
    'CLSwapExactInputSingleParams params',
    ...ABI_STRUCT_CL_SWAP_EXACT_INPUT_SINGLE_PARAMS,
  ]),
  // 0x07
  [ACTIONS.CL_SWAP_EXACT_IN]: parseAbiParameters([
    'CLSwapExactInputParams params',
    ...ABI_STRUCT_CL_SWAP_EXACT_INPUT_PARAMS,
  ]),
  // 0x08
  [ACTIONS.CL_SWAP_EXACT_OUT_SINGLE]: parseAbiParameters([
    'CLSwapExactOutputSingleParams params',
    ...ABI_STRUCT_CL_SWAP_EXACT_OUTPUT_SINGLE_PARAMS,
  ]),
  // 0x09
  [ACTIONS.CL_SWAP_EXACT_OUT]: parseAbiParameters([
    'CLSwapExactOutputParams params',
    ...ABI_STRUCT_CL_SWAP_EXACT_OUTPUT_PARAMS,
  ]),
  // [ACTIONS.CL_DONATE]: parseAbiParameters('NOT SUPPORTED'),

  // 0x0b
  [ACTIONS.SETTLE]: parseAbiParameters(
    'address currency, uint256 amount, bool payerIsUser',
  ),
  // 0x0c
  [ACTIONS.SETTLE_ALL]: parseAbiParameters(
    'address currency, uint256 maxAmount',
  ),
  // 0x0d
  [ACTIONS.SETTLE_PAIR]: parseAbiParameters(
    'address currency0, address currency1',
  ),

  // 0x0e
  [ACTIONS.TAKE]: parseAbiParameters(
    'address currency, address recipient, uint256 amount',
  ),
  // 0x0f
  [ACTIONS.TAKE_ALL]: parseAbiParameters('address currency, uint256 minAmount'),
  // 0x10
  [ACTIONS.TAKE_PORTION]: parseAbiParameters(
    'address currency, address recipient, uint256 bips',
  ),
  // 0x11
  [ACTIONS.TAKE_PAIR]: parseAbiParameters(
    'address currency0, address currency1, address to',
  ),

  // 0x12
  [ACTIONS.CLOSE_CURRENCY]: parseAbiParameters('address currency'),
  // 0x13
  [ACTIONS.CLEAR_OR_TAKE]: parseAbiParameters(
    'address currency, uint256 amountMax',
  ),
  // 0x14
  [ACTIONS.SWEEP]: parseAbiParameters('address currency, address to'),

  // 0x15
  [ACTIONS.WRAP]: parseAbiParameters('uint256 amount'),
  // 0x16
  [ACTIONS.UNWRAP]: parseAbiParameters('uint256 amount'),

  // 0x17
  // [ACTIONS.MINT_6909]: parseAbiParameters('NOT SUPPORTED'),
  // 0x18
  // [ACTIONS.BURN_6909]: parseAbiParameters('NOT SUPPORTED'),

  // 0x19
  [ACTIONS.BIN_ADD_LIQUIDITY]: parseAbiParameters([
    'BinAddLiquidityParams params',
    ...ABI_STRUCT_BIN_ADD_LIQUIDITY_PARAMS,
  ]),
  // 0x1a
  [ACTIONS.BIN_REMOVE_LIQUIDITY]: parseAbiParameters([
    'BinRemoveLiquidityParams params',
    ...ABI_STRUCT_BIN_REMOVE_LIQUIDITY_PARAMS,
  ]),

  // 0x1b
  [ACTIONS.BIN_ADD_LIQUIDITY_FROM_DELTAS]: parseAbiParameters([
    'BinAddLiquidityFromDeltasParams params',
    ...ABI_STRUCT_BIN_ADD_LIQUIDITY_FROM_DELTAS_PARAMS,
  ]),

  // 0x1c
  [ACTIONS.BIN_SWAP_EXACT_IN_SINGLE]: parseAbiParameters([
    'BinSwapExactInputSingleParams params',
    ...ABI_STRUCT_BIN_SWAP_EXACT_INPUT_SINGLE_PARAMS,
  ]),
  // 0x1d
  [ACTIONS.BIN_SWAP_EXACT_IN]: parseAbiParameters([
    'BinSwapExactInputParams params',
    ...ABI_STRUCT_BIN_SWAP_EXACT_INPUT_PARAMS,
  ]),
  // 0x1e
  [ACTIONS.BIN_SWAP_EXACT_OUT_SINGLE]: parseAbiParameters([
    'BinSwapExactOutputSingleParams params',
    ...ABI_STRUCT_BIN_SWAP_EXACT_OUTPUT_SINGLE_PARAMS,
  ]),
  // 0x1f
  [ACTIONS.BIN_SWAP_EXACT_OUT]: parseAbiParameters([
    'BinSwapExactOutputParams params',
    ...ABI_STRUCT_BIN_SWAP_EXACT_OUTPUT_PARAMS,
  ]),

  // [ACTIONS.BIN_DONATE]: parseAbiParameters('NOT SUPPORTED'),
}

type AbiParametersToPrimitiveTypes<
  TAbiParameters extends readonly AbiParameter[],
  TAbiParameterKind extends AbiParameterKind = AbiParameterKind,
> = Prettify<{
  [K in keyof TAbiParameters]: AbiParameterToPrimitiveType<
    TAbiParameters[K],
    TAbiParameterKind
  >
}>

export type SushiSwapV4ABIType = typeof ACTIONS_ABI
export type SushiSwapV4UsedAction = keyof SushiSwapV4ABIType
export type SushiSwapV4ABIParametersToValuesType<
  TAction extends SushiSwapV4UsedAction,
> = AbiParametersToPrimitiveTypes<SushiSwapV4ABIType[TAction]>
