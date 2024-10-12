import type { Address } from 'viem'
import type { ChainId } from '../chain/id.js'
import { request } from './request.js'

export async function getTokenPricesForChainId(chainId: ChainId) {
  return fetch(`https://api.sushi.com/price/v1/${chainId}`)
}

export async function getTokenPriceForChainId(
  chainId: ChainId,
  address: Address,
) {
  return request(`https://api.sushi.com/price/v1/${chainId}/${address}`)
}
