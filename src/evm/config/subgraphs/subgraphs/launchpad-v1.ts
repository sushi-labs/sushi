import { EvmChainId } from '../../../chain/index.js'
import type { LaunchpadV1ChainId } from '../../features/launchpad-v1.js'
import { getSubgraphUrlWrapper } from '../get-subgraph-url.js'
import { SUSHI_DEDICATED_GOLDSKY_HOST } from '../hosts.js'

const LAUNCHPAD_V1_OTHER_URLS = {
  [EvmChainId.ROBINHOOD]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/sushiswap/launchpad-robinhood-v2/gn`,
} as const satisfies Record<LaunchpadV1ChainId, string>

export const getLaunchpadV1SubgraphUrl = getSubgraphUrlWrapper({
  decentralizedIds: {},
  otherUrls: LAUNCHPAD_V1_OTHER_URLS,
})<LaunchpadV1ChainId, 'COMPLETE'>()
