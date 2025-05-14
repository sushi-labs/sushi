export enum ACTIONS {
  // liquidity actions
  CL_INCREASE_LIQUIDITY = 0x00,
  CL_DECREASE_LIQUIDITY = 0x01,
  CL_MINT_POSITION = 0x02,
  CL_BURN_POSITION = 0x03,
  CL_INCREASE_LIQUIDITY_FROM_DELTAS = 0x04,
  CL_MINT_POSITION_FROM_DELTAS = 0x05,

  // swapping
  CL_SWAP_EXACT_IN_SINGLE = 0x06,
  CL_SWAP_EXACT_IN = 0x07,
  CL_SWAP_EXACT_OUT_SINGLE = 0x08,
  CL_SWAP_EXACT_OUT = 0x09,

  // donate
  /// @dev this is not supported in the position manager or router
  CL_DONATE = 0x0a,

  // closing deltas on the pool manager
  // settling
  SETTLE = 0x0b,
  SETTLE_ALL = 0x0c,
  SETTLE_PAIR = 0x0d,
  // taking
  TAKE = 0x0e,
  TAKE_ALL = 0x0f,
  TAKE_PORTION = 0x10,
  TAKE_PAIR = 0x11,

  CLOSE_CURRENCY = 0x12,
  CLEAR_OR_TAKE = 0x13,
  SWEEP = 0x14,
  WRAP = 0x15,
  UNWRAP = 0x16,

  // minting/burning 6909s to close deltas
  /// @dev this is not supported in the position manager or router
  MINT_6909 = 0x17,
  BURN_6909 = 0x18,

  // bin-pool actions
  // liquidity actions
  BIN_ADD_LIQUIDITY = 0x19,
  BIN_REMOVE_LIQUIDITY = 0x1a,
  BIN_ADD_LIQUIDITY_FROM_DELTAS = 0x1b,
  // swapping
  BIN_SWAP_EXACT_IN_SINGLE = 0x1c,
  BIN_SWAP_EXACT_IN = 0x1d,
  BIN_SWAP_EXACT_OUT_SINGLE = 0x1e,
  BIN_SWAP_EXACT_OUT = 0x1f,
  // donate
  BIN_DONATE = 0x20,
}

export type Action = (typeof ACTIONS)[keyof typeof ACTIONS]

export const ACTION_CONSTANTS = {
  OPEN_DELTA: 0n,
  CONTRACT_BALANCE:
    '0x8000000000000000000000000000000000000000000000000000000000000000',
  MSG_SENDER: '0x0000000000000000000000000000000000000001',
  ADDRESS_THIS: '0x0000000000000000000000000000000000000002',
} as const
