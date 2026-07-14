import { describe, expect, expectTypeOf, it } from 'vitest'
import { EvmChainId } from '../../chain/index.js'
import { getSubgraphUrlWrapper } from './get-subgraph-url.js'
import { getBlocksSubgraphUrl } from './subgraphs/blocks.js'
import { getSushiSwapV3SubgraphUrl } from './subgraphs/sushiswap-v3.js'

describe('subgraph urls', () => {
  it('with subgraph id matches', () => {
    const actual = getSushiSwapV3SubgraphUrl(EvmChainId.ETHEREUM, {
      decentralizedKey: 'test',
    })
    const expected =
      'gateway-arbitrum.network.thegraph.com/api/test/deployments/id/QmP1FMFsU4wNcui1eezwuvBjxrbLPucKrKZ9Kftn34nULw'
    expectTypeOf(actual).toEqualTypeOf<string>()
    expect(actual).toEqual(expected)
  })

  it('partner hosted returns url', () => {
    const actual = getSushiSwapV3SubgraphUrl(EvmChainId.FILECOIN)
    const expected =
      'api.goldsky.com/api/public/project_clslspm3c0knv01wvgfb2fqyq/subgraphs/sushiswap/v3-filecoin/gn'
    expectTypeOf(actual).toEqualTypeOf<string>()
    expect(actual).toEqual(expected)
  })

  it('non-existent returns undefined', () => {
    const actual = getBlocksSubgraphUrl(EvmChainId.ZKSYNC_ERA, {
      decentralizedKey: 'test',
    })
    expect(actual).toBeUndefined()
  })

  it('derives immutable capabilities from both endpoint maps', () => {
    const resolver = getSubgraphUrlWrapper({
      decentralizedIds: {
        [EvmChainId.ETHEREUM]: { type: 'subgraphId', id: 'ethereum' },
        [EvmChainId.POLYGON]: { type: 'subgraphId', id: 'polygon' },
      },
      otherUrls: {
        [EvmChainId.POLYGON]: 'polygon',
        [EvmChainId.FILECOIN]: 'filecoin',
      },
    })<EvmChainId, 'PARTIAL'>()

    expect(resolver.chainIds).toEqual([
      EvmChainId.ETHEREUM,
      EvmChainId.POLYGON,
      EvmChainId.FILECOIN,
    ])
    expect(Object.isFrozen(resolver.chainIds)).toBe(true)
    expect(resolver.supportsChainId(EvmChainId.ETHEREUM)).toBe(true)
    expect(resolver.supportsChainId(EvmChainId.FILECOIN)).toBe(true)
    expect(resolver.supportsChainId(EvmChainId.ROBINHOOD)).toBe(false)
    const mutableChainIds = resolver.chainIds as EvmChainId[]
    expect(() => {
      mutableChainIds.push(EvmChainId.ROBINHOOD)
    }).toThrow(TypeError)
  })
})
