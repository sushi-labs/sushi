import type { Type } from 'sushi/currency'
import { zeroAddress } from 'viem'
import { SUSHISWAP_V4_CL_POOL_MANAGER, type SushiSwapV4ChainId } from '../../../config/index.js'
import type { HookData, PoolKey } from '../types.js'

export function getPoolKey({
  chainId,
  currency0,
  currency1,
  feeAmount,
  tickSpacing,
  hook,
}: {
  chainId: SushiSwapV4ChainId
  currency0: Type
  currency1: Type
  feeAmount: number
  tickSpacing: number
  hook?: HookData
}) {
  return {
    currency0: currency0.isNative ? zeroAddress : currency0.wrapped.address,
    currency1: currency1.isNative ? zeroAddress : currency1.wrapped.address,
    hooks: hook?.address ?? zeroAddress,
    poolManager: SUSHISWAP_V4_CL_POOL_MANAGER[chainId],
    fee: feeAmount,
    parameters: {
      tickSpacing,
      ...(hook ? {hooksRegistration: hook.hooksRegistration} : {})
      ,
    },
  } satisfies PoolKey
}
