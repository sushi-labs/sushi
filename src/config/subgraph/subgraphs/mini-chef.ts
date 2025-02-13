import { EvmChainId } from '../../../chain/evm/index.js'
import type { MiniChefChainId } from '../../features/mini-chef.js'
import { getSubgraphUrlWrapper, wrapAsIdType } from '../get-subgraph-url.js'
import { METIS_0XGRAPH_HOST, SUSHI_DEDICATED_GOLDSKY_HOST } from '../hosts.js'

const MINICHEF_DECENTRALIZED_IDS = {
  [EvmChainId.POLYGON]: `QmRGvRxvfNgVNU9QcTDj6XpASfA3HaYCGJiKqRmthGdjm2`,
  [EvmChainId.GNOSIS]: `QmRjFd4SPZDpMdjkPQqgN9v4trWXpQoqikFrmqpBUMiTJY`,
  // [EvmChainId.HARMONY]: `xx`,// NO FIX has been deployed yet
  [EvmChainId.ARBITRUM]: `QmbcWZNLLCSmuQ474rYr4jCymN22jguT9hZtp4rZzA3T2w`,
  [EvmChainId.CELO]: `QmPpECMB4vnHe2SpkLQCFp7dumWfXUekhZBbfVAEM64BjS`,
  [EvmChainId.MOONRIVER]: `QmaZo8AP9HQPXrnVUP1outjfsb3xJW1PF9X6UHjzid1aYH`,
  [EvmChainId.FUSE]: `QmauqkgAJTjwfKDAvtY4siuPZF2oczg6jqWC9wMqw21yQH`,
  [EvmChainId.FANTOM]: `QmajRCaeDeftPiNKndmqCRMknKLNC6sFXBREWX4HHyfzv8`,
  [EvmChainId.MOONBEAM]: `QmVeQLQJzy1T21UtKncpLs8nNjRczKz5sUT94h515QhwuJ`,
  [EvmChainId.BOBA]: `QmZdYzMxLNHM5u8YjhoMdQUfNHDC4KxwBVAB3XAk9WSaui`,
  [EvmChainId.OPTIMISM]: `QmcTYTs3DCbxF97gyo1tq54Vkd9YUDcSjPNUB1rRKBotrM`,
  [EvmChainId.AVALANCHE]: `QmamfQF1cQMWgYVWM7vYq1yTL5fTrkr2ZYCAYR9rMsEWV5`,
  [EvmChainId.BSC]: `QmfFsgEPtw6mCkaaLxk2e52E7G2KryTzn6R1eTYoL3Mj1c`,
} as const satisfies Partial<Record<MiniChefChainId, string>>

const MINICHEF_OTHER_URLS = {
  [EvmChainId.KAVA]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/sushiswap/minichef-kava/gn`,
  [EvmChainId.METIS]: `${METIS_0XGRAPH_HOST}/sushiswap/minichef-metis`,
  [EvmChainId.ARBITRUM_NOVA]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/sushiswap/minichef-arbitrum-nova/gn`,
  [EvmChainId.BTTC]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/sushiswap/minichef-bttc/gn`,
} as const satisfies Partial<Record<MiniChefChainId, string>>

export const getMiniChefSubgraphUrl = getSubgraphUrlWrapper({
  decentralizedIds: wrapAsIdType(MINICHEF_DECENTRALIZED_IDS, 'deploymentId'),
  otherUrls: MINICHEF_OTHER_URLS,
})<MiniChefChainId, 'COMPLETE'>()
