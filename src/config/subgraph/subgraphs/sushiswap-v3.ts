import { ChainId } from '../../../chain/index.js'
import type { SushiSwapV3ChainId } from '../../features/sushiswap-v3.js'
import { getSubgraphUrlWrapper, wrapAsIdType } from '../get-subgraph-url.js'
import {
  CORE_HOST,
  FILECOIN_HOST,
  HAQQ_HOST,
  METIS_0XGRAPH_HOST,
  SKALE_HOST,
  SUSHI_DEDICATED_GOLDSKY_HOST,
  SUSHI_GOLDSKY_HOST,
  THUNDERCORE_HOST,
} from '../hosts.js'

const SUSHISWAP_V3_DECENTRALIZED_DEPLOYMENT_IDS = {
  [ChainId.ARBITRUM]: `QmS9GKBA49mDpWchU2Us1PJ7kmu4S7tWa4gAmRvE3HK42w`,
  [ChainId.AVALANCHE]: `Qmcdd4SGVwG9VY4itrXBnBPWBVsQvsxfzaib9bVny9C8jT`,
  [ChainId.BSC]: `QmXsPN4TD4PUhT1ZWd5d1mdQPePFNMdJwUr6guSh1z9ZzA`,
  [ChainId.BOBA]: `QmVbYM6wz7XnH32QzQLNBwyzx7r1HNsFP6jfUi22NRvvJu`,
  [ChainId.ETHEREUM]: `QmSDPnHzyW8yfnuhB423ssVY5r4bQrr5C1rXT8qMroNgmv`,
  [ChainId.FANTOM]: `QmQXFxg4dCxMqcobGQAtsNe4ufnG1KmjSVgtEdtxvYo4Lf`,
  [ChainId.FUSE]: `QmakqW3KCpEXJGTSuyfXHGg6C8ppbrPdSqVXWj3Guor9zA`,
  [ChainId.GNOSIS]: `QmS9uxga2rzpWyHKFATGYas6ntdHLpX7w45EKAatBTZJ25`,
  [ChainId.MOONRIVER]: `QmStbnz4sErrK1jzaU5iKAutA1Q2w47EsgAoFbdCiequtZ`,
  [ChainId.OPTIMISM]: `QmbT6ZsxJEZKUrbzLrAWV5EnQfSKZeYtZ265mQUaB552vK`,
  [ChainId.POLYGON]: `QmPbbjK9vtY69kSxMJRVLVz1dRzUBNwYbWTRYMiFzp9Tzm`,
  [ChainId.POLYGON_ZKEVM]: `QmWH5ChjmF4Yp5Yhiaxczh5QwbG6HFSEi8bRwbKaUrJA6C`,
  [ChainId.BASE]: `QmZ2R9ABG9ienaZdGyPLcDWDNDkG187RhXmh6fFuEtUaaS`,
  [ChainId.LINEA]: `QmNZ9ePvxGRDHAEhb7cLsb3AvtCCPJ3qAwh1CDvDn39RMa`,
  [ChainId.SCROLL]: `QmR6VP1qoF8nxhtMaGEg9VMmkaTDFqyeM8nJWkakP6nHes`,
} as const satisfies Partial<Record<SushiSwapV3ChainId, string>>

const SUSHISWAP_V3_DECENTRALIZED_SUBGRAPH_IDS = {
  [ChainId.SONIC]: `5ijXw9MafwFkXgoHmUiWsWHvRyYAL3RD4smnmBLmNPnw`,
  [ChainId.HEMI]: `GQU44ZBv8NpiBUxA6eLSDSdd7bs6TVop9dASKzrdirUv`,
} as const satisfies Partial<Record<SushiSwapV3ChainId, string>>

const SUSHISWAP_V3_OTHER_URLS = {
  [ChainId.ARBITRUM_NOVA]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/sushi-v3/v3-arbitrum-nova/gn`,
  [ChainId.THUNDERCORE]: `${THUNDERCORE_HOST}/sushi-v3/v3-thundercore-2`,
  [ChainId.CORE]: `${CORE_HOST}/sushi-v3/v3-core-tvl-fix`,
  [ChainId.KAVA]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/sushi-v3/v3-kava/gn`,
  [ChainId.METIS]: `${METIS_0XGRAPH_HOST}/sushi-v3/v3-metis/v0.0.1/gn`,
  [ChainId.BTTC]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/sushi-v3/v3-bttc/gn`,
  [ChainId.FILECOIN]: `${FILECOIN_HOST}/sushiswap/v3-filecoin`,
  [ChainId.HAQQ]: `${HAQQ_HOST}/sushi/v3-haqq-2`,
  [ChainId.ZETACHAIN]: `${SUSHI_GOLDSKY_HOST}/v3-zetachain/1.0.0/gn`,
  [ChainId.BLAST]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/sushiswap/v3-blast/gn`,
  [ChainId.SKALE_EUROPA]: `${SKALE_HOST}/sushi/v3-skale-europa`,
  [ChainId.ROOTSTOCK]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/sushiswap/v3-rootstock/gn`,
} as const satisfies Partial<Record<SushiSwapV3ChainId, string>>

export const getSushiSwapV3SubgraphUrl = getSubgraphUrlWrapper({
  decentralizedIds: {
    ...wrapAsIdType(SUSHISWAP_V3_DECENTRALIZED_DEPLOYMENT_IDS, 'deploymentId'),
    ...wrapAsIdType(SUSHISWAP_V3_DECENTRALIZED_SUBGRAPH_IDS, 'subgraphId'),
  },
  otherUrls: SUSHISWAP_V3_OTHER_URLS,
})<SushiSwapV3ChainId, 'COMPLETE'>()
