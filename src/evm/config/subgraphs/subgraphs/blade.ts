import { EvmChainId } from '../../../../evm/chain/chains.js'
import type { BladeChainId } from '../../../config/features/blade.js'
import { getSubgraphUrlWrapper, wrapAsIdType } from '../get-subgraph-url.js'
import { SUSHI_DEDICATED_GOLDSKY_HOST } from '../hosts.js'

const BLADE_DECENTRALIZED_DEPLOYMENT_IDS = {
  [EvmChainId.POLYGON]: 'QmW7Rp8UXMnoHz3DAAaUNTbvFe71KrwR6hCRkJ5haiV6Yk',
  [EvmChainId.ARBITRUM]: 'Qmb3MJDypPkH95axcoCiejg8axYQbxqxmzNbGdVzKYUtbH',
  [EvmChainId.POLYGON_ZKEVM]: 'QmR3LJRrSbMaYoySh6LY9LKfS8QmnUANEU8XAGJLCHGWqb',
} as const satisfies Partial<Record<BladeChainId, string>>

const BLADE_DECENTRALIZED_SUBGRAPH_IDS = {
  [EvmChainId.BASE]: '8JiAx8TbKWBzZpxVMMdSJf77DyCWVt2RTNbXH8iYPg9Z',
  [EvmChainId.KATANA]: '5FVfCtKfap35bE1LQwddSxbantT1dygey74CgwDvMz97',
  [EvmChainId.OPTIMISM]: 'Cu6atAfi6uR9mLMEBBjkhKSUUXHCobbB83ctdooexQ9f',
} as const satisfies Partial<Record<BladeChainId, string>>

const BLADE_OTHER_URLS = {
  [EvmChainId.ETHEREUM]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/blade/v1-ethereum/gn`,
  [EvmChainId.MANTLE]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/blade/v2-mantle/gn`,
} as const satisfies Partial<Record<BladeChainId, string>>

export const getBladeSubgraphUrl = getSubgraphUrlWrapper({
  decentralizedIds: {
    ...wrapAsIdType(BLADE_DECENTRALIZED_DEPLOYMENT_IDS, 'deploymentId'),
    ...wrapAsIdType(BLADE_DECENTRALIZED_SUBGRAPH_IDS, 'subgraphId'),
  },
  otherUrls: BLADE_OTHER_URLS,
})<BladeChainId, 'COMPLETE'>()

export const BladeSubgraphTemplateMap: Record<BladeChainId, string> =
  Object.fromEntries(
    Object.entries({
      ...BLADE_DECENTRALIZED_DEPLOYMENT_IDS,
      ...BLADE_DECENTRALIZED_SUBGRAPH_IDS,
      ...BLADE_OTHER_URLS,
    })
      .map(([chainId]) => {
        const url = getBladeSubgraphUrl(Number(chainId) as BladeChainId, {
          decentralizedKey: '${GRAPH_KEY}',
        })
        return [Number(chainId), url ? `https://${url}` : undefined]
      })
      .filter(([, url]) => !!url),
  ) as Record<BladeChainId, string>
