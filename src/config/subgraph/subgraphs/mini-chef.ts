import { ChainId } from '../../../chain/index.js'
import type { MiniChefChainId } from '../../features/mini-chef.js'
import { getSubgraphUrlWrapper, wrapAsIdType } from '../get-subgraph-url.js'
import { METIS_0XGRAPH_HOST, SUSHI_DEDICATED_GOLDSKY_HOST } from '../hosts.js'

const MINICHEF_DECENTRALIZED_IDS = {
  [ChainId.POLYGON]: `QmRGvRxvfNgVNU9QcTDj6XpASfA3HaYCGJiKqRmthGdjm2`,
  [ChainId.GNOSIS]: `QmRjFd4SPZDpMdjkPQqgN9v4trWXpQoqikFrmqpBUMiTJY`,
  // [ChainId.HARMONY]: `xx`,// NO FIX has been deployed yet
  [ChainId.ARBITRUM]: `QmbcWZNLLCSmuQ474rYr4jCymN22jguT9hZtp4rZzA3T2w`,
  [ChainId.CELO]: `QmPpECMB4vnHe2SpkLQCFp7dumWfXUekhZBbfVAEM64BjS`,
  [ChainId.MOONRIVER]: `QmaZo8AP9HQPXrnVUP1outjfsb3xJW1PF9X6UHjzid1aYH`,
  [ChainId.FUSE]: `QmauqkgAJTjwfKDAvtY4siuPZF2oczg6jqWC9wMqw21yQH`,
  [ChainId.FANTOM]: `QmajRCaeDeftPiNKndmqCRMknKLNC6sFXBREWX4HHyfzv8`,
  [ChainId.MOONBEAM]: `QmVeQLQJzy1T21UtKncpLs8nNjRczKz5sUT94h515QhwuJ`,
  [ChainId.BOBA]: `QmZdYzMxLNHM5u8YjhoMdQUfNHDC4KxwBVAB3XAk9WSaui`,
  [ChainId.OPTIMISM]: `QmcTYTs3DCbxF97gyo1tq54Vkd9YUDcSjPNUB1rRKBotrM`,
  [ChainId.AVALANCHE]: `QmamfQF1cQMWgYVWM7vYq1yTL5fTrkr2ZYCAYR9rMsEWV5`,
  [ChainId.BSC]: `QmfFsgEPtw6mCkaaLxk2e52E7G2KryTzn6R1eTYoL3Mj1c`,
} as const satisfies Partial<Record<MiniChefChainId, string>>

const MINICHEF_OTHER_URLS = {
  [ChainId.KAVA]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/sushiswap/minichef-kava/gn`,
  [ChainId.METIS]: `${METIS_0XGRAPH_HOST}/sushiswap/minichef-metis`,
  [ChainId.ARBITRUM_NOVA]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/sushiswap/minichef-arbitrum-nova/gn`,
  [ChainId.BTTC]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/sushiswap/minichef-bttc/gn`,
} as const satisfies Partial<Record<MiniChefChainId, string>>

export const getMiniChefSubgraphUrl = getSubgraphUrlWrapper({
  decentralizedIds: wrapAsIdType(MINICHEF_DECENTRALIZED_IDS, 'deploymentId'),
  otherUrls: MINICHEF_OTHER_URLS,
})<MiniChefChainId, 'COMPLETE'>()
