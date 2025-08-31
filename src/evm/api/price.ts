import type { Address } from 'viem'
import type { SwapApiSupportedChainId } from '../config/features/api.js'

export async function getPrices(
  chainId: SwapApiSupportedChainId,
): Promise<Record<Address, number>> {
  return fetch(`https://api.sushi.com/price/v1/${chainId}`).then((res) =>
    res.json(),
  )
}

export async function getPrice(
  chainId: SwapApiSupportedChainId,
  address: Address,
): Promise<number> {
  return fetch(`https://api.sushi.com/price/v1/${chainId}/${address}`).then(
    (res) => res.json(),
  )
}
