/**
 * Constants of the BinPool
 */

export const SCALE_OFFSET = 128n

export const SCALE = 1n << SCALE_OFFSET

export const PRECISION = BigInt(1e18)

export const SQUARED_PRECISION = BigInt(1e36)

export const BASIS_POINT_MAX = 10000n

export const REAL_ID_SHIFT = 1n << 23n

// Sum of liquidity shape
// for each bin liquidity shape, the sum of distributionX or distributionY is 1e18 - 1
export const BIN_SHAPE_DISTRIBUTION_SUM = BigInt(1e18)
