import { EvmChainId } from '../../../chain/evm/index.js'
import type { BentoBoxChainId } from '../../features/bentobox.js'
import { getSubgraphUrlWrapper, wrapAsIdType } from '../get-subgraph-url.js'
import { SUSHI_DEDICATED_GOLDSKY_HOST } from '../hosts.js'

const BENTOBOX_DECENTRALIZED_IDS = {
  [EvmChainId.ETHEREUM]: `QmRLTuSKgS8GbioD9vfAmn9dUUm5uVPptUdFMS5LG4yzAA`,
  [EvmChainId.POLYGON]: `QmYyjZXjfUaqe359vzGgxe2ju1qJPiQM68pG2ipfNL8F7F`,
  [EvmChainId.AVALANCHE]: `QmY9S4TVSMX6bcjVnvRhntMUS6ppdv23ktNhLQkWm5PaVn`,
  [EvmChainId.BSC]: `QmdnkNhFRuDcshaD6RXTf4zSqHntUtnHGr2krUtbzfF9F7`,
  [EvmChainId.FANTOM]: `QmRqdvBLBWVw2JtnDj2JAtZnVkTt4DvGBuiFtphvVYAe9U`,
  [EvmChainId.GNOSIS]: `QmT3VpmrGD7bbPGT6aKqaK4yg3u73ryhgp5kEM2BVTEWFj`,
  [EvmChainId.ARBITRUM]: `QmdCukF6WX46K2Lgy4QJR8AyKQByc2NCRAUAyRxm9uA4uZ`,
  [EvmChainId.CELO]: `QmZC9vYPNAdew2U4qAYXCjBGwfrpwvxKRm3RE2njwzwgxE`,
  [EvmChainId.MOONRIVER]: `QmXU45n3iB7AKQWLwAMs2MaGkkMjqF7sF8QW32NxQKFLx9`,
  [EvmChainId.MOONBEAM]: `QmZG6wYBro1aU5Sg2V3J3n6omQcJCAZsmnMoJNp68Em4s2`,
  [EvmChainId.OPTIMISM]: `QmbQQsmYqNoVdWG9fpffvcqeg6zvwDjUxE3T65AB1Lmmha`,
  [EvmChainId.HARMONY]: `QmcHkq534QMFaGWsPqkeKeuGLwZwVKK7KRqZE3cKxaEojH`,
} as const satisfies Partial<Record<BentoBoxChainId, string>>

const BENTOBOX_OTHER_URLS = {
  [EvmChainId.BTTC]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/sushiswap/bentobox-bttc/gn`,
} as const satisfies Partial<Record<BentoBoxChainId, string>>

export const getBentoBoxSubgraphUrl = getSubgraphUrlWrapper({
  decentralizedIds: wrapAsIdType(BENTOBOX_DECENTRALIZED_IDS, 'deploymentId'),
  otherUrls: BENTOBOX_OTHER_URLS,
})<BentoBoxChainId, 'PARTIAL'>()
