import { encodeAbiParameters, keccak256, parseAbiParameters } from 'viem/utils'
import type { EvmChainId } from '../../../chain/chains.js'
import {
  SUSHISWAP_V3_INIT_CODE_HASH,
  type SushiSwapV3ChainId,
  type SushiSwapV3FeeAmount,
} from '../../../config/index.js'
import type { EvmAddress, EvmToken } from '../../../currency/token.js'
import { getCreate2Address } from '../../../utils/get-create-2-address.js'

type ComputeSushiSwapV3PoolAddressParams = {
  factoryAddress: EvmAddress
  fee: SushiSwapV3FeeAmount
  initCodeHashManualOverride?: EvmAddress | undefined
} & (
  | {
      tokenA: EvmToken
      tokenB: EvmToken
    }
  | {
      tokenA: EvmAddress
      tokenB: EvmAddress
      chainId: EvmChainId
    }
)

/**
 * Computes a pool address
 * @param factoryAddress The Uniswap V3 factory address
 * @param tokenA The first token of the pair, irrespective of sort order
 * @param tokenB The second token of the pair, irrespective of sort order
 * @param fee The fee tier of the pool
 * @param initCodeHashManualOverride Override the init code hash used to compute the pool address if necessary
 * @returns The pool address
 */
export function computeSushiSwapV3PoolAddress(
  params: ComputeSushiSwapV3PoolAddressParams,
): EvmAddress {
  if (typeof params.tokenA === 'string' && typeof params.tokenB === 'string') {
    // FIXME: We shouldn't even allow sending strings into here
    const {
      factoryAddress,
      tokenA,
      tokenB,
      fee,
      initCodeHashManualOverride,
      chainId,
    } = params

    return getCreate2Address({
      from: factoryAddress,
      salt: keccak256(
        encodeAbiParameters(parseAbiParameters('address, address, uint24'), [
          tokenA,
          tokenB,
          fee,
        ]),
      ),
      bytecodeHash:
        initCodeHashManualOverride ??
        SUSHISWAP_V3_INIT_CODE_HASH[chainId as SushiSwapV3ChainId],
      chainId,
    }).toLowerCase() as EvmAddress
  }

  const { factoryAddress, tokenA, tokenB, fee, initCodeHashManualOverride } =
    params
  const [token0, token1] = tokenA.sortsBefore(tokenB)
    ? [tokenA, tokenB]
    : [tokenB, tokenA] // does safety checks

  return getCreate2Address({
    from: factoryAddress,
    salt: keccak256(
      encodeAbiParameters(parseAbiParameters('address, address, uint24'), [
        token0.address,
        token1.address,
        fee,
      ]),
    ),
    bytecodeHash:
      initCodeHashManualOverride ??
      SUSHISWAP_V3_INIT_CODE_HASH[token0.chainId as SushiSwapV3ChainId],
    chainId: token0.chainId,
  }).toLowerCase() as EvmAddress
}
