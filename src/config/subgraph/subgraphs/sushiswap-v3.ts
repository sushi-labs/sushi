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
  [EvmChainId.ARBITRUM]: `QmS9GKBA49mDpWchU2Us1PJ7kmu4S7tWa4gAmRvE3HK42w`,
  [EvmChainId.AVALANCHE]: `Qmcdd4SGVwG9VY4itrXBnBPWBVsQvsxfzaib9bVny9C8jT`,
  [EvmChainId.BSC]: `QmXsPN4TD4PUhT1ZWd5d1mdQPePFNMdJwUr6guSh1z9ZzA`,
  [EvmChainId.BOBA]: `QmVbYM6wz7XnH32QzQLNBwyzx7r1HNsFP6jfUi22NRvvJu`,
  [EvmChainId.ETHEREUM]: `QmP1FMFsU4wNcui1eezwuvBjxrbLPucKrKZ9Kftn34nULw`,
  [EvmChainId.FANTOM]: `QmQXFxg4dCxMqcobGQAtsNe4ufnG1KmjSVgtEdtxvYo4Lf`,
  [EvmChainId.GNOSIS]: `QmS9uxga2rzpWyHKFATGYas6ntdHLpX7w45EKAatBTZJ25`,
  [EvmChainId.OPTIMISM]: `QmbT6ZsxJEZKUrbzLrAWV5EnQfSKZeYtZ265mQUaB552vK`,
  [EvmChainId.POLYGON]: `QmfTAHYV86ymwV2Vm6kw9cNzTCmDhe9EWghQ3U3pD7jEGZ`,
  [EvmChainId.BASE]: `QmWWh7RgdXHcxaSwhJMpH1SB7D9rFZRGLZVwRfg2BPKsHt`,
  [EvmChainId.LINEA]: `QmNZ9ePvxGRDHAEhb7cLsb3AvtCCPJ3qAwh1CDvDn39RMa`,
  [EvmChainId.SCROLL]: `QmR6VP1qoF8nxhtMaGEg9VMmkaTDFqyeM8nJWkakP6nHes`,
  [EvmChainId.SONIC]: `Qmaa6gJsqzeSnDBjq4NnwerMGMSaSDLqRMDkrevGXwVUt1`,

  // Deprecated chains
  // [EvmChainId.FUSE]: `QmakqW3KCpEXJGTSuyfXHGg6C8ppbrPdSqVXWj3Guor9zA`,
  // [EvmChainId.MOONRIVER]: `QmStbnz4sErrK1jzaU5iKAutA1Q2w47EsgAoFbdCiequtZ`,
  // [EvmChainId.POLYGON_ZKEVM]: `QmWH5ChjmF4Yp5Yhiaxczh5QwbG6HFSEi8bRwbKaUrJA6C`,
} as const satisfies Partial<Record<SushiSwapV3ChainId, string>>

const SUSHISWAP_V3_DECENTRALIZED_SUBGRAPH_IDS = {} as const satisfies Partial<
  Record<SushiSwapV3ChainId, string>
>

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
  [EvmChainId.SKALE_EUROPA]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/sushiswap/v3-skale-europa/gn`,
  [EvmChainId.ROOTSTOCK]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/sushiswap/v3-rootstock-2/gn`,
  [EvmChainId.HEMI]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/sushiswap/v3-hemi/gn`,
} as const satisfies Partial<Record<SushiSwapV3ChainId, string>>

export const getSushiSwapV3SubgraphUrl = getSubgraphUrlWrapper({
  decentralizedIds: {
    ...wrapAsIdType(SUSHISWAP_V3_DECENTRALIZED_DEPLOYMENT_IDS, 'deploymentId'),
    ...wrapAsIdType(SUSHISWAP_V3_DECENTRALIZED_SUBGRAPH_IDS, 'subgraphId'),
  },
  otherUrls: SUSHISWAP_V3_OTHER_URLS,
})<SushiSwapV3ChainId, 'COMPLETE'>()
