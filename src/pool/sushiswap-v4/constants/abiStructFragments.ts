const composeABIFragment = (
  structString: string,
  relatedStructs: string[] = [],
) => {
  return [structString, ...relatedStructs].map((s) =>
    s.replace(/\n/g, '').trim(),
  )
}

export const ABI_STRUCT_POOL_KEY = composeABIFragment(`
  struct PoolKey {
    address currency0;
    address currency1;
    address hooks;
    address poolManager;
    uint24 fee;
    bytes32 parameters;
  }`)

export const ABI_STRUCT_PATH_KEY = composeABIFragment(`
  struct PathKey {
    address intermediateCurrency;
    uint24 fee;
    address hooks;
    address poolManager;
    bytes hookData;
    bytes32 parameters;
  }`)

export const ABI_STRUCT_POSITION_CONFIG = composeABIFragment(
  `
  struct PositionConfig {
    PoolKey poolKey;
    int24 tickLower;
    int24 tickUpper;
  }
  `,
  ABI_STRUCT_POOL_KEY,
)

export const ABI_STRUCT_CL_SWAP_EXACT_INPUT_SINGLE_PARAMS = composeABIFragment(
  `
  struct CLSwapExactInputSingleParams {
    PoolKey poolKey;
    bool zeroForOne;
    uint128 amountIn;
    uint128 amountOutMinimum;
    bytes hookData;
  }
  `,
  ABI_STRUCT_POOL_KEY,
)

export const ABI_STRUCT_CL_SWAP_EXACT_INPUT_PARAMS = composeABIFragment(
  `
  struct CLSwapExactInputParams {
    address currencyIn;
    PathKey[] path;
    uint128 amountIn;
    uint128 amountOutMinimum;
  }
    `,
  ABI_STRUCT_PATH_KEY,
)

export const ABI_STRUCT_CL_SWAP_EXACT_OUTPUT_SINGLE_PARAMS = composeABIFragment(
  `
  struct CLSwapExactOutputSingleParams {
    PoolKey poolKey;
    bool zeroForOne;
    uint128 amountOut;
    uint128 amountInMaximum;
    bytes hookData;
  }
    `,
  ABI_STRUCT_POOL_KEY,
)

export const ABI_STRUCT_CL_SWAP_EXACT_OUTPUT_PARAMS = composeABIFragment(
  `
  struct CLSwapExactOutputParams {
    address currencyOut;
    PathKey[] path;
    uint128 amountOut;
    uint128 amountInMaximum;
  }
    `,
  ABI_STRUCT_PATH_KEY,
)

export const ABI_STRUCT_BIN_ADD_LIQUIDITY_FROM_DELTAS_PARAMS =
  composeABIFragment(
    `
  struct BinAddLiquidityFromDeltasParams {
    PoolKey poolKey;
    uint128 amount0Max;
    uint128 amount1Max;
    uint256 activeIdDesired;
    uint256 idSlippage;
    int256[] deltaIds;
    uint256[] distributionX;
    uint256[] distributionY;
    address to;
    bytes hookData; 
  }
  `,
    ABI_STRUCT_POOL_KEY,
  )

export const ABI_STRUCT_BIN_ADD_LIQUIDITY_PARAMS = composeABIFragment(
  `
  struct BinAddLiquidityParams {
    PoolKey poolKey;
    uint128 amount0;
    uint128 amount1;
    uint128 amount0Max;
    uint128 amount1Max;
    uint256 activeIdDesired;
    uint256 idSlippage;
    int256[] deltaIds;
    uint256[] distributionX;
    uint256[] distributionY;
    address to;
    bytes hookData;
  }
    `,
  ABI_STRUCT_POOL_KEY,
)

export const ABI_STRUCT_BIN_REMOVE_LIQUIDITY_PARAMS = composeABIFragment(
  `
  struct BinRemoveLiquidityParams {
    PoolKey poolKey;
    uint128 amount0Min;
    uint128 amount1Min;
    uint256[] ids;
    uint256[] amounts;
    address from;
    bytes hookData;
  }
    `,
  ABI_STRUCT_POOL_KEY,
)

export const ABI_STRUCT_BIN_SWAP_EXACT_INPUT_SINGLE_PARAMS = composeABIFragment(
  `
  struct BinSwapExactInputSingleParams {
    PoolKey poolKey;
    bool zeroForOne;
    uint128 amountIn;
    uint128 amountOutMinimum;
    bytes hookData;
  }
    `,
  ABI_STRUCT_POOL_KEY,
)

export const ABI_STRUCT_BIN_SWAP_EXACT_INPUT_PARAMS = composeABIFragment(
  `
  struct BinSwapExactInputParams {
    address currencyIn;
    PathKey[] path;
    uint128 amountIn;
    uint128 amountOutMinimum;
  }
  `,
  ABI_STRUCT_PATH_KEY,
)

export const ABI_STRUCT_BIN_SWAP_EXACT_OUTPUT_SINGLE_PARAMS =
  composeABIFragment(
    `
  struct BinSwapExactOutputSingleParams {
    PoolKey poolKey;
    bool zeroForOne;
    uint128 amountOut;
    uint128 amountInMaximum;
    bytes hookData;
  }
    `,
    ABI_STRUCT_POOL_KEY,
  )

export const ABI_STRUCT_BIN_SWAP_EXACT_OUTPUT_PARAMS = composeABIFragment(
  `
  struct BinSwapExactOutputParams {
    address currencyOut;
    PathKey[] path;
    uint128 amountOut;
    uint128 amountInMaximum;
  }
  `,
  ABI_STRUCT_PATH_KEY,
)
