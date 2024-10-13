import type { Address } from 'viem'
import type { ExtractorSupportedChainId } from '../config/features/extractor.js'

export async function getTokenPricesForChainId(
  chainId: ExtractorSupportedChainId,
) {
  return fetch(`https://api.sushi.com/price/v1/${chainId}`)
}

export async function getTokenPriceForChainId(
  chainId: ExtractorSupportedChainId,
  address: Address,
) {
  return fetch(`https://api.sushi.com/price/v1/${chainId}/${address}`)
}
