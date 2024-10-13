import type { Address } from 'viem'
import type { EvmChainId } from '../chain/evm/id.js'

export async function getTokenPricesForChainId(chainId: EvmChainId) {
  return fetch(`https://api.sushi.com/price/v1/${chainId}`)
}

export async function getTokenPriceForChainId(
  chainId: EvmChainId,
  address: Address,
) {
  return fetch(`https://api.sushi.com/price/v1/${chainId}/${address}`)
}
