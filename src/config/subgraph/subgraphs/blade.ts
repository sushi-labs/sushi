import { EvmChainId } from '../../../chain/evm/index.js'
import type { BladeChainId } from '../../../config/features/blade.js'
import { getSubgraphUrlWrapper, wrapAsIdType } from '../get-subgraph-url.js'
import { SUSHI_DEDICATED_GOLDSKY_HOST } from '../hosts.js'

const BLADE_DECENTRALIZED_DEPLOYMENT_IDS = {
  [EvmChainId.POLYGON]: 'QmW7Rp8UXMnoHz3DAAaUNTbvFe71KrwR6hCRkJ5haiV6Yk',
  [EvmChainId.OPTIMISM]: 'QmUS5FA22qocHFHb1XDukygsGEv5x4S2UV3aa6keKKfJ9E',
  [EvmChainId.MOONBEAM]: 'QmUNGvL12xR12ML3bsZw4uG8DWNh2on5oDkECs9EU7s8Uu',
  [EvmChainId.ARBITRUM]: 'Qmb3MJDypPkH95axcoCiejg8axYQbxqxmzNbGdVzKYUtbH',
  [EvmChainId.BASE]: 'QmSY4Po9S5e9zucCc8RHEFjLSdDKTz3UDDrLeFJonFwvBV',
  [EvmChainId.POLYGON_ZKEVM]: 'QmR3LJRrSbMaYoySh6LY9LKfS8QmnUANEU8XAGJLCHGWqb',
  [EvmChainId.KATANA]: 'QmP1zV6CGTjm2EgcXer7xEo9Sbz1itpZKikrRqfhC6eZ9w',
} as const satisfies Partial<Record<BladeChainId, string>>

const BLADE_DECENTRALIZED_SUBGRAPH_IDS = {} as const satisfies Partial<
  Record<BladeChainId, string>
>

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
