/** `fee` flag marking a pool whose hook sets the LP fee. */
export const SUSHISWAP_V4_DYNAMIC_FEE_FLAG = 0x800000

/** The maximum static LP fee, in hundredths of a bip (100%). */
export const SUSHISWAP_V4_MAX_LP_FEE = 1_000_000

export const SUSHISWAP_V4_MIN_TICK_SPACING = 1
export const SUSHISWAP_V4_MAX_TICK_SPACING = 32_767

/** Bit offsets of each hook callback in a CL pool's `parameters`. */
export const SUSHISWAP_V4_CL_HOOKS_REGISTRATION_OFFSET = {
  beforeInitialize: 0,
  afterInitialize: 1,
  beforeAddLiquidity: 2,
  afterAddLiquidity: 3,
  beforeRemoveLiquidity: 4,
  afterRemoveLiquidity: 5,
  beforeSwap: 6,
  afterSwap: 7,
  beforeDonate: 8,
  afterDonate: 9,
  beforeSwapReturnDelta: 10,
  afterSwapReturnDelta: 11,
  afterAddLiquidityReturnDelta: 12,
  afterRemoveLiquidityReturnDelta: 13,
} as const

export type SushiSwapV4CLHooksRegistration = Partial<
  Record<keyof typeof SUSHISWAP_V4_CL_HOOKS_REGISTRATION_OFFSET, boolean>
>

/** Position manager actions, as in the periphery's `Actions` library. */
export const SushiSwapV4Action = {
  CL_INCREASE_LIQUIDITY: 0x00,
  CL_DECREASE_LIQUIDITY: 0x01,
  CL_MINT_POSITION: 0x02,
  CL_BURN_POSITION: 0x03,
  SETTLE_PAIR: 0x0d,
  TAKE_PAIR: 0x11,
  CLOSE_CURRENCY: 0x12,
  SWEEP: 0x14,
} as const

export type SushiSwapV4Action =
  (typeof SushiSwapV4Action)[keyof typeof SushiSwapV4Action]

/** Recipient placeholder the position manager resolves to the caller. */
export const SUSHISWAP_V4_MSG_SENDER =
  '0x0000000000000000000000000000000000000001'
