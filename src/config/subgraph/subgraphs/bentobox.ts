import { ChainId } from '../../../chain/index.js'
import type { BentoBoxChainId } from '../../features/bentobox.js'
import { SUSHI_DEDICATED_GOLDSKY_HOST } from '../hosts.js'
import { getSubgraphUrlWrapper, wrapAsIdType } from '../get-subgraph-url.js'

const BENTOBOX_DECENTRALIZED_IDS = {
  [ChainId.ETHEREUM]: `QmRLTuSKgS8GbioD9vfAmn9dUUm5uVPptUdFMS5LG4yzAA`,
  [ChainId.POLYGON]: `QmYyjZXjfUaqe359vzGgxe2ju1qJPiQM68pG2ipfNL8F7F`,
  [ChainId.AVALANCHE]: `QmY9S4TVSMX6bcjVnvRhntMUS6ppdv23ktNhLQkWm5PaVn`,
  [ChainId.BSC]: `QmdnkNhFRuDcshaD6RXTf4zSqHntUtnHGr2krUtbzfF9F7`,
  [ChainId.FANTOM]: `QmRqdvBLBWVw2JtnDj2JAtZnVkTt4DvGBuiFtphvVYAe9U`,
  [ChainId.GNOSIS]: `QmT3VpmrGD7bbPGT6aKqaK4yg3u73ryhgp5kEM2BVTEWFj`,
  [ChainId.ARBITRUM]: `QmdCukF6WX46K2Lgy4QJR8AyKQByc2NCRAUAyRxm9uA4uZ`,
  [ChainId.CELO]: `QmZC9vYPNAdew2U4qAYXCjBGwfrpwvxKRm3RE2njwzwgxE`,
  [ChainId.MOONRIVER]: `QmXU45n3iB7AKQWLwAMs2MaGkkMjqF7sF8QW32NxQKFLx9`,
  [ChainId.MOONBEAM]: `QmZG6wYBro1aU5Sg2V3J3n6omQcJCAZsmnMoJNp68Em4s2`,
  [ChainId.OPTIMISM]: `QmbQQsmYqNoVdWG9fpffvcqeg6zvwDjUxE3T65AB1Lmmha`,
  [ChainId.HARMONY]: `QmcHkq534QMFaGWsPqkeKeuGLwZwVKK7KRqZE3cKxaEojH`,
} as const satisfies Partial<Record<BentoBoxChainId, string>>

const BENTOBOX_OTHER_URLS = {
  [ChainId.BTTC]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/sushiswap/bentobox-bttc/gn`,
} as const satisfies Partial<Record<BentoBoxChainId, string>>

export const getBentoBoxSubgraphUrl = getSubgraphUrlWrapper({
  decentralizedIds: wrapAsIdType(BENTOBOX_DECENTRALIZED_IDS, 'deploymentId'),
  otherUrls: BENTOBOX_OTHER_URLS,
})<BentoBoxChainId, 'PARTIAL'>()
