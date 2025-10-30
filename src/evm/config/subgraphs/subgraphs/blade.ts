import { EvmChainId } from '../../../../evm/chain/chains.js'
import type { BladeChainId } from '../../../config/features/blade.js'
import { getSubgraphUrlWrapper, wrapAsIdType } from '../get-subgraph-url.js'
import { SUSHI_DEDICATED_GOLDSKY_HOST } from '../hosts.js'

const BLADE_DECENTRALIZED_DEPLOYMENT_IDS = {} as const satisfies Partial<Record<BladeChainId, string>>

const BLADE_DECENTRALIZED_SUBGRAPH_IDS = {
  [EvmChainId.ETHEREUM]: '2BhN8mygHMmRkceMmod7CEEsGkcxh91ExRbEfRVkpVGM',
  [EvmChainId.ARBITRUM]: 'ATBQPRjT28GEK6UaBAzXy64x9kFkNk1r64CdgmDJ587W',
  [EvmChainId.BASE]: '8JiAx8TbKWBzZpxVMMdSJf77DyCWVt2RTNbXH8iYPg9Z',
  [EvmChainId.KATANA]: '2dqhcoLKbR7jLub7j1deLSguP5CE6doyVkJjWhtCRZEq',
  [EvmChainId.OPTIMISM]: 'Cu6atAfi6uR9mLMEBBjkhKSUUXHCobbB83ctdooexQ9f',
  [EvmChainId.BSC]: 'HgcnDXW5D4xpnmGSssZsCcuQudUsRbPYrYjnif84NyLt',
  [EvmChainId.POLYGON]: 'Brmf2gRdpLFsEF6YjSAMVrXqSfbhsaaWaWzdCYjE7iYY',
  [EvmChainId.POLYGON_ZKEVM]: 'HkSpNiuPdZu5nidNwtSdWty4KkKjgRMoJwTKsjZmtgco',
} as const satisfies Partial<Record<BladeChainId, string>>

const BLADE_OTHER_URLS = {
  [EvmChainId.MANTLE]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/blade/v3-mantle/gn`,
} as const satisfies Partial<Record<BladeChainId, string>>

export const getBladeSubgraphUrl = getSubgraphUrlWrapper({
  decentralizedIds: {
    ...wrapAsIdType(BLADE_DECENTRALIZED_DEPLOYMENT_IDS, 'deploymentId'),
    ...wrapAsIdType(BLADE_DECENTRALIZED_SUBGRAPH_IDS, 'subgraphId'),
  },
  otherUrls: BLADE_OTHER_URLS,
})<BladeChainId, 'COMPLETE'>()
