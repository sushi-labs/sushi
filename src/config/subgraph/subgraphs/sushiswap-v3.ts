import { EvmChainId } from '../../../chain/evm/index.js'
import type { SushiSwapV3ChainId } from '../../features/sushiswap-v3.js'
import { getSubgraphUrlWrapper, wrapAsIdType } from '../get-subgraph-url.js'
import {
  CORE_HOST,
  HAQQ_HOST,
  METIS_0XGRAPH_HOST,
  SUSHI_DEDICATED_GOLDSKY_HOST,
  SUSHI_GOLDSKY_HOST,
  THUNDERCORE_HOST,
} from '../hosts.js'

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

  // Deprecated chains
  // [EvmChainId.FUSE]: `QmakqW3KCpEXJGTSuyfXHGg6C8ppbrPdSqVXWj3Guor9zA`,
  // [EvmChainId.MOONRIVER]: `QmStbnz4sErrK1jzaU5iKAutA1Q2w47EsgAoFbdCiequtZ`,
  // [EvmChainId.POLYGON_ZKEVM]: `QmWH5ChjmF4Yp5Yhiaxczh5QwbG6HFSEi8bRwbKaUrJA6C`,
} as const satisfies Partial<Record<SushiSwapV3ChainId, string>>

const SUSHISWAP_V3_DECENTRALIZED_SUBGRAPH_IDS = {
  [EvmChainId.KATANA]: `2YG7eSFHx1Wm9SHKdcrM8HR23JQpVe8fNNdmDHMXyVYR`,
} as const satisfies Partial<Record<SushiSwapV3ChainId, string>>

const SUSHISWAP_V3_OTHER_URLS = {
  [EvmChainId.ARBITRUM_NOVA]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/sushi-v3/v3-arbitrum-nova/gn`,
  [EvmChainId.THUNDERCORE]: `${THUNDERCORE_HOST}/sushi-v3/v3-thundercore-2`,
  [EvmChainId.CORE]: `${CORE_HOST}/sushi-v3/v3-core-tvl-fix`,
  [EvmChainId.KAVA]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/sushi-v3/v3-kava/gn`,
  [EvmChainId.METIS]: `${METIS_0XGRAPH_HOST}/sushi-v3/v3-metis/v0.0.1/gn`,
  [EvmChainId.BTTC]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/sushi-v3/v3-bttc/gn`,
  [EvmChainId.FILECOIN]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/sushiswap/v3-filecoin/gn`,
  [EvmChainId.HAQQ]: `${HAQQ_HOST}/sushi/v3-haqq-2`,
  [EvmChainId.ZETACHAIN]: `${SUSHI_GOLDSKY_HOST}/v3-zetachain/1.0.0/gn`,
  [EvmChainId.BLAST]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/sushiswap/v3-blast/gn`,
  [EvmChainId.SKALE_EUROPA]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/sushiswap/v3-skale-europa-2/gn`,
  [EvmChainId.ROOTSTOCK]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/sushiswap/v3-rootstock-3/gn`,
  [EvmChainId.HEMI]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/sushiswap/v3-hemi/gn`,
  [EvmChainId.TATARA]: '',
} as const satisfies Partial<Record<SushiSwapV3ChainId, string>>

export const getSushiSwapV3SubgraphUrl = getSubgraphUrlWrapper({
  decentralizedIds: {
    ...wrapAsIdType(SUSHISWAP_V3_DECENTRALIZED_DEPLOYMENT_IDS, 'deploymentId'),
    ...wrapAsIdType(SUSHISWAP_V3_DECENTRALIZED_SUBGRAPH_IDS, 'subgraphId'),
  },
  otherUrls: SUSHISWAP_V3_OTHER_URLS,
})<SushiSwapV3ChainId, 'COMPLETE'>()

export const V3SubgraphTemplateMap: Record<SushiSwapV3ChainId, string> =
  Object.fromEntries(
    Object.entries({
      ...SUSHISWAP_V3_DECENTRALIZED_DEPLOYMENT_IDS,
      ...SUSHISWAP_V3_DECENTRALIZED_SUBGRAPH_IDS,
      ...SUSHISWAP_V3_OTHER_URLS,
    })
      .map(([chainId]) => {
        const url = getSushiSwapV3SubgraphUrl(
          Number(chainId) as SushiSwapV3ChainId,
          { decentralizedKey: '${GRAPH_KEY}' },
        )
        return [Number(chainId), url ? `https://${url}` : undefined]
      })
      .filter(([, url]) => !!url),
  ) as Record<SushiSwapV3ChainId, string>
