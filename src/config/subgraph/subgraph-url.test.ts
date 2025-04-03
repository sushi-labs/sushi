import { describe, expect, expectTypeOf, it } from 'vitest'
import { getSushiSwapV3SubgraphUrl } from './subgraphs/sushiswap-v3.js'

import { EvmChainId } from '../../chain/evm/index.js'
import { getBlocksSubgraphUrl } from './subgraphs/blocks.js'

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
})
