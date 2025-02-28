import type { Address } from 'viem'
import type { ExtractorSupportedChainId } from '../config/features/extractor.js'

export async function getPrices(
  chainId: ExtractorSupportedChainId,
): Promise<Record<Address, number>> {
  return fetch(`https://api.sushi.com/price/v1/${chainId}`).then((res) =>
    res.json(),
  )
}

export async function getPrice(
  chainId: ExtractorSupportedChainId,
  address: Address,
): Promise<number> {
  return fetch(`https://api.sushi.com/price/v1/${chainId}/${address}`).then(
    (res) => res.json(),
  )
}
