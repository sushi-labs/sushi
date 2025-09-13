// biome-ignore-all lint/suspicious/noTemplateCurlyInString: docs

import type { TestnetChainId } from 'sushi'
import {
  BLADE_SUPPORTED_CHAIN_IDS,
  // Blade
  type BladeChainId,
  // Blocks
  type EvmChainId,
  evmChainIds,
  getBladeSubgraphUrl,
  getBlocksSubgraphUrl,
  // V2
  getSushiSwapV2SubgraphUrl,
  // V3
  getSushiSwapV3SubgraphUrl,
  type SushiSwapV2ChainId,
  SushiSwapV2ChainIds,
  type SushiSwapV3ChainId,
  SushiSwapV3ChainIds,
} from 'sushi/evm'

export const V3SubgraphTemplateMap: Record<
  Exclude<SushiSwapV3ChainId, TestnetChainId>,
  string
> = Object.fromEntries(
  SushiSwapV3ChainIds.map((chainId) => {
    const url = getSushiSwapV3SubgraphUrl(chainId, {
      decentralizedKey: '${GRAPH_KEY}',
    })
    return [chainId, url ? `https://${url}` : undefined]
  }).filter(([, url]) => !!url),
) as Record<SushiSwapV3ChainId, string>

export const V2SubgraphTemplateMap: Record<
  Exclude<SushiSwapV2ChainId, TestnetChainId>,
  string
> = Object.fromEntries(
  SushiSwapV2ChainIds.map((chainId) => {
    const url = getSushiSwapV2SubgraphUrl(chainId, {
      decentralizedKey: '${GRAPH_KEY}',
    })
    return [chainId, url ? `https://${url}` : undefined]
  }).filter(([, url]) => !!url),
) as Record<SushiSwapV2ChainId, string>

export const BlocksSubgraphTemplateMap: Record<EvmChainId, string> =
  Object.fromEntries(
    evmChainIds
      .map((chainId) => {
        const url = getBlocksSubgraphUrl(chainId, {
          decentralizedKey: '${GRAPH_KEY}',
        })
        return [chainId, url ? `https://${url}` : undefined]
      })
      .filter(([, url]) => !!url),
  ) as Record<EvmChainId, string>

export const BladeSubgraphTemplateMap: Record<BladeChainId, string> =
  Object.fromEntries(
    BLADE_SUPPORTED_CHAIN_IDS.map((chainId) => {
      const url = getBladeSubgraphUrl(chainId, {
        decentralizedKey: '${GRAPH_KEY}',
      })
      return [chainId, url ? `https://${url}` : undefined]
    }).filter(([, url]) => !!url),
  ) as Record<BladeChainId, string>
