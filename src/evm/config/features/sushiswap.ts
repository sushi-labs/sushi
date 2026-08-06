import {
  SUSHISWAP_V2_SUPPORTED_CHAIN_IDS,
  type SushiSwapV2ChainId,
} from './sushiswap-v2.js'
import {
  SUSHISWAP_V3_SUPPORTED_CHAIN_IDS,
  type SushiSwapV3ChainId,
} from './sushiswap-v3.js'
import {
  SUSHISWAP_V4_SUPPORTED_CHAIN_IDS,
  type SushiSwapV4ChainId,
} from './sushiswap-v4.js'

export const SUSHISWAP_SUPPORTED_CHAIN_IDS = Array.from(
  new Set([
    ...SUSHISWAP_V2_SUPPORTED_CHAIN_IDS,
    ...SUSHISWAP_V3_SUPPORTED_CHAIN_IDS,
    ...SUSHISWAP_V4_SUPPORTED_CHAIN_IDS,
  ]),
) as Readonly<(SushiSwapV2ChainId | SushiSwapV3ChainId | SushiSwapV4ChainId)[]>

export const SushiSwapChainIds = SUSHISWAP_SUPPORTED_CHAIN_IDS

export type SushiSwapChainId = (typeof SUSHISWAP_SUPPORTED_CHAIN_IDS)[number]

export function isSushiSwapChainId(
  chainId: number,
): chainId is SushiSwapChainId {
  return SUSHISWAP_SUPPORTED_CHAIN_IDS.includes(chainId as SushiSwapChainId)
}
