import invariant from 'tiny-invariant'
import type { Address, Hex } from 'viem'
import { encodePacked, keccak256 } from 'viem/utils'
import {
  SUSHISWAP_V2_INIT_CODE_HASH,
  type SushiSwapV2ChainId,
} from '../../config/index.js'
import { getCreate2Address } from '~evm/utils/get-create-2-address.js'
import type { EvmToken } from '~evm/currency/token.js'

/**
 * Computes a pair address
 * @param factoryAddress The Uniswap V2 factory address
 * @param tokenA The first token of the pair, irrespective of sort order
 * @param tokenB The second token of the pair, irrespective of sort order
 * @param initCodeHashManualOverride Override the init code hash used to compute the pool address if necessary
 * @returns The pair address
 */
export const computeSushiSwapV2PoolAddress = ({
  factoryAddress,
  tokenA,
  tokenB,
  initCodeHashManualOverride,
}: {
  factoryAddress: Address
  tokenA: EvmToken
  tokenB: EvmToken
  initCodeHashManualOverride?: Hex
}): Address => {
  const [token0, token1] = tokenA.sortsBefore(tokenB)
    ? [tokenA, tokenB]
    : [tokenB, tokenA] // does safety checks

  invariant(token0.chainId === token1.chainId, 'CHAIN_ID')

  return getCreate2Address({
    from: factoryAddress,
    salt: keccak256(
      encodePacked(
        ['address', 'address'],
        [token0.address, token1.address],
      ) as Hex,
    ),
    bytecodeHash:
      initCodeHashManualOverride ??
      SUSHISWAP_V2_INIT_CODE_HASH[token0.chainId as SushiSwapV2ChainId],
    chainId: token0.chainId,
  })
}
