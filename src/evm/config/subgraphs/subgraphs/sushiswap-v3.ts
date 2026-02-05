import { EvmChainId } from '../../../chain/index.js'
import type { SushiSwapV3ChainId } from '../../features/sushiswap-v3.js'
import { getSubgraphUrlWrapper, wrapAsIdType } from '../get-subgraph-url.js'
import { SUSHI_DEDICATED_GOLDSKY_HOST } from '../hosts.js'

const SUSHISWAP_V3_DECENTRALIZED_DEPLOYMENT_IDS = {
  [EvmChainId.ARBITRUM]: `QmecewJ7QhNTKycFQjySoim7eDrZ53MaR754GbEPqqMGHy`,
  [EvmChainId.AVALANCHE]: `QmUyC7YYpRkh5M2S7BP2gM8t8wkm7NYNAKrspW4r6uimjM`,
  [EvmChainId.BSC]: `QmWQcbEg7J9gWBWfuqnknj5pdYZTp4U31JxQrmjWNEmpTM`,
  [EvmChainId.BOBA]: `QmWfj8AfwsnrsRzpHaGRu6awXapn1FZpKoCUQ7J6QQwMeR`,
  [EvmChainId.ETHEREUM]: `QmP1FMFsU4wNcui1eezwuvBjxrbLPucKrKZ9Kftn34nULw`,
  [EvmChainId.FANTOM]: `QmdqDrZZKzASkiY1UpCUXSYdzVrJ5ru1JrqxMHGd5Ag2yS`,
  [EvmChainId.GNOSIS]: `Qmadb2zb5P2avAy7zs454bLoEycfA6qzk61LwmDVJExUWg`,
  [EvmChainId.OPTIMISM]: `QmVHZfj6pWc7WSe4vY5epZVGGfggyVZt48voKVxf19Dc8U`,
  [EvmChainId.POLYGON]: `QmYAA8ymppZN4APXnqUhVNEnCwN1ZqHJyWsbmXuzpQ25Km`,
  [EvmChainId.BASE]: `QmZftpYFevNQgBPxyaZGoz3pfbtHVEzL1BrMojqTjfYV3g`,
  [EvmChainId.LINEA]: `QmVUWgFKqLABaX7QDaJFxXai2MZeZtqjvLuPqCrED8eJfN`,
  [EvmChainId.SCROLL]: `QmNqxqVfBETuMhV91BfquULGBLFvPZwr3ADVFTMgGZcqNf`,
  [EvmChainId.SONIC]: `Qmaa6gJsqzeSnDBjq4NnwerMGMSaSDLqRMDkrevGXwVUt1`,
} as const satisfies Partial<Record<SushiSwapV3ChainId, string>>

const SUSHISWAP_V3_DECENTRALIZED_SUBGRAPH_IDS = {
  [EvmChainId.KATANA]: `2YG7eSFHx1Wm9SHKdcrM8HR23JQpVe8fNNdmDHMXyVYR`,
} as const satisfies Partial<Record<SushiSwapV3ChainId, string>>

const SUSHISWAP_V3_OTHER_URLS = {
  [EvmChainId.ARBITRUM_NOVA]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/sushi-v3/v3-arbitrum-nova/gn`,
  [EvmChainId.FILECOIN]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/sushiswap/v3-filecoin/gn`,
  [EvmChainId.BLAST]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/sushiswap/v3-blast/gn`,
  [EvmChainId.SKALE_EUROPA]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/sushiswap/v3-skale-europa-2/gn`,
  [EvmChainId.ROOTSTOCK]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/sushiswap/v3-rootstock-3/gn`,
  [EvmChainId.HEMI]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/sushiswap/v3-hemi/gn`,
} as const satisfies Partial<Record<SushiSwapV3ChainId, string>>

export const getSushiSwapV3SubgraphUrl = getSubgraphUrlWrapper({
  decentralizedIds: {
    ...wrapAsIdType(SUSHISWAP_V3_DECENTRALIZED_DEPLOYMENT_IDS, 'deploymentId'),
    ...wrapAsIdType(SUSHISWAP_V3_DECENTRALIZED_SUBGRAPH_IDS, 'subgraphId'),
  },
  otherUrls: SUSHISWAP_V3_OTHER_URLS,
})<SushiSwapV3ChainId, 'PARTIAL'>()
