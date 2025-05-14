import type { Address, Hex } from 'viem'
import type { CLPositionConfig, Permit2Signature } from '../../types.js'
import { encodeMulticall } from '../../utils/encodeMulticall.js'
import { encodePermit2 } from '../../utils/encodePermit2.js'
import { encodeCLPositionManagerIncreaseLiquidityCalldata } from './calldatas/increaseLiquidity.js'
import { encodeCLPositionManagerInitializePoolCalldata } from './calldatas/initializePool.js'
import { encodeCLPositionManagerMintCalldata } from './calldatas/mint.js'

export const addCLLiquidityMulticall = ({
  isInitialized,
  sqrtPriceX96,
  tokenId,
  positionConfig,
  liquidity,
  owner,
  recipient,
  amount0Max,
  amount1Max,
  deadline,
  modifyPositionHookData,
  token0Permit2Signature,
  token1Permit2Signature,
}: {
  isInitialized: boolean
  sqrtPriceX96: bigint
  tokenId?: bigint
  positionConfig: CLPositionConfig
  liquidity: bigint
  owner: Address
  recipient: Address
  amount0Max: bigint
  amount1Max: bigint
  deadline: bigint
  modifyPositionHookData: Hex
  token0Permit2Signature?: Permit2Signature
  token1Permit2Signature?: Permit2Signature
}) => {
  const calls: Hex[] = []

  if (!isInitialized) {
    calls.push(
      encodeCLPositionManagerInitializePoolCalldata(
        positionConfig.poolKey,
        sqrtPriceX96,
      ),
    )
  }
  if (token0Permit2Signature) {
    calls.push(encodePermit2(owner, token0Permit2Signature))
  }

  if (token1Permit2Signature) {
    calls.push(encodePermit2(owner, token1Permit2Signature))
  }

  // mint
  if (typeof tokenId === 'undefined') {
    calls.push(
      encodeCLPositionManagerMintCalldata(
        positionConfig,
        liquidity,
        recipient,
        amount0Max,
        amount1Max,
        deadline,
        modifyPositionHookData,
      ),
    )
  } else {
    // increase liquidity
    calls.push(
      encodeCLPositionManagerIncreaseLiquidityCalldata(
        tokenId,
        positionConfig,
        liquidity,
        amount0Max,
        amount1Max,
        modifyPositionHookData,
        deadline,
      ),
    )
  }

  return encodeMulticall(calls)
}
