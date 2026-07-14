import { expectTypeOf, test } from 'vitest'
import { EvmChainId } from '../../chain/index.js'
import {
  getBlocksSubgraphUrl,
  getSushiSwapV3SubgraphUrl,
  type SubgraphChainId,
} from '../../index.js'

test('resolver capabilities retain their configured chain union', () => {
  type BlocksSubgraphChainId = SubgraphChainId<typeof getBlocksSubgraphUrl>

  expectTypeOf(getBlocksSubgraphUrl.chainIds).toEqualTypeOf<
    readonly BlocksSubgraphChainId[]
  >()
  expectTypeOf<typeof EvmChainId.ETHEREUM>().toExtend<BlocksSubgraphChainId>()
  expectTypeOf<
    Extract<typeof EvmChainId.ROBINHOOD, BlocksSubgraphChainId>
  >().toBeNever()

  expectTypeOf(getSushiSwapV3SubgraphUrl.chainIds).toEqualTypeOf<
    readonly SubgraphChainId<typeof getSushiSwapV3SubgraphUrl>[]
  >()

  function cannotReplaceChainIds() {
    // @ts-expect-error Resolver capability metadata is readonly.
    getBlocksSubgraphUrl.chainIds = []
  }

  void cannotReplaceChainIds
})

test('supportsChainId narrows chain IDs and guarded lookup results', () => {
  const chainId = {} as EvmChainId

  if (getBlocksSubgraphUrl.supportsChainId(chainId)) {
    expectTypeOf(chainId).toEqualTypeOf<
      SubgraphChainId<typeof getBlocksSubgraphUrl>
    >()
    expectTypeOf(
      getBlocksSubgraphUrl(chainId, { decentralizedKey: 'test' }),
    ).toEqualTypeOf<string>()
  }
})

test('existing resolver call signatures remain unchanged', () => {
  expectTypeOf(
    getBlocksSubgraphUrl(EvmChainId.ROBINHOOD, {
      decentralizedKey: 'test',
    }),
  ).toEqualTypeOf<string | undefined>()
})
