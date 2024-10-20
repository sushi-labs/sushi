import type { Address } from 'viem'
import type { ChainId } from '../chain/id.js'

export async function getPrices(chainId: ChainId) {
  return fetch(`https://api.sushi.com/price/v1/${chainId}`).then((res) =>
    res.json(),
  )
}

export async function getPrice(chainId: ChainId, address: Address) {
  return fetch(`https://api.sushi.com/price/v1/${chainId}/${address}`).then(
    (res) => res.json(),
  )
}
