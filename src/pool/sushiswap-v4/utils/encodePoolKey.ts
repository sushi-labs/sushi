import { zeroAddress } from 'viem'
import type { EncodedPoolKey, PoolKey } from '../types.js'
import { encodePoolParameters } from './encodePoolParameters.js'

/**
 * encode `PoolKey` to `EncodedPoolKey`
 *
 * @param poolKey PoolKey
 * @returns EncodedPoolKey
 */
export const encodePoolKey = (poolKey: PoolKey): EncodedPoolKey => {
  return {
    ...poolKey,
    hooks: poolKey.hooks ?? zeroAddress,
    parameters: encodePoolParameters(poolKey.parameters),
  }
}
