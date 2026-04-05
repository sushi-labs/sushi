import invariant from 'tiny-invariant'
import { MAX_SAFE_INTEGER, TWO, ZERO } from './constants.js'

/**
 * Computes floor(sqrt(value))
 * @param value the value for which to compute the square root, rounded down
 */
export function sqrt(value: bigint): bigint {
  invariant(value >= ZERO, 'NEGATIVE')

  // rely on built in sqrt if possible
  if (value <= MAX_SAFE_INTEGER) {
    return BigInt(Math.floor(Math.sqrt(Number(value))))
  }

  // The integer e satisfies
  //
  //      2**(e-1) <= value < 2**e
  //
  // and we use a starting value of
  //
  //      z = 2**((e+1)/2)
  let z: bigint
  let x: bigint
  z = BigInt(2)**BigInt((value.toString(2).length + 1)/2)
  x = (z + value / z) / TWO
  while (x < z) {
    z = x
    x = (value / x + x) / TWO
  }
  return z
}
