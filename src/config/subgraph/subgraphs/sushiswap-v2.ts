import { EvmChainId } from '../../../chain/evm/index.js'
import type { SushiSwapV2ChainId } from '../../features/sushiswap-v2.js'
import { getSubgraphUrlWrapper, wrapAsIdType } from '../get-subgraph-url.js'
import {
  CORE_HOST,
  HAQQ_HOST,
  METIS_0XGRAPH_HOST,
  SKALE_HOST,
  SUSHI_DEDICATED_GOLDSKY_HOST,
  SUSHI_GOLDSKY_HOST,
  THUNDERCORE_HOST,
} from '../hosts.js'

const SUSHISWAP_V2_DECENTRALIZED_DEPLOYMENT_IDS = {
  [EvmChainId.ETHEREUM]: `QmaR2nAMF6dCHBL1eFNQ4F5nGpJQs7V11PZobJB2FgQtbt`,
  [EvmChainId.AVALANCHE]: `QmadNP3fXrcba189BuSrT88Tw7YHhTtHWsdBTQhNpyaF6c`,
  [EvmChainId.ARBITRUM]: `QmfN96hDXYtgeLsBv5WjQY8FAwqBfBFoiq8gzsn9oApcoU`,
  [EvmChainId.BSC]: `QmQ3b4S6PSgvRkd5PhxtDPDQRybfmaRYxGVZCLbYJopoKJ`,
  [EvmChainId.CELO]: `QmNxrypMUwDagUwxcBDPPebNx4ZPZ3XGJ2cdaejAjXg735`,
  [EvmChainId.FANTOM]: `QmbitwNMFxEcJVtZyTcLYr2GrQSLg99rpZZmmD2m13xRp2`,
  [EvmChainId.GNOSIS]: `QmU7USviTB8LtJ9tkPjZLcretNnYyUWzwDy9N7zTupNYj2`,
  [EvmChainId.OPTIMISM]: `QmZWaFzzzs7CEzpVeLrNqW6e7oNxG8AnkJt9kUEV5rFzxn`,
  [EvmChainId.BOBA]: `QmYzLBMamDBWJWsUNFiRfq91w2H38SAf9jXyCYDTzhyHh3`,
  [EvmChainId.POLYGON]: `QmcFVSFXGgodMVUGLAdYdYPfohyMwWat8pfi5pHSDXgskU`,
  [EvmChainId.BASE]: `QmQfYe5Ygg9A3mAiuBZYj5a64bDKLF4gF6sezfhgxKvb9y`,
  [EvmChainId.SCROLL]: `QmZkX4zi2RzLsQKva29gE3uCcMuJVxXE3R11Ln1J3FY3f7`,
  [EvmChainId.LINEA]: `QmWYpVMcyczvRvpzLpw5R7tKWouFLEzmufN55jnrNWmpth`,
  [EvmChainId.SONIC]: `QmTnVXE9wVJRDaxNdW1hnvzi8Cj1XBv3cMGXz6gHLacMVJ`,
  // Deprecated chains
  // [EvmChainId.POLYGON_ZKEVM]: `QmQLtMYbTvxDHqc5oFH75N2b4DL3Czdv2jSCo6bk4UwKyf`,
  // [EvmChainId.FUSE]: `QmRcpZhksXHJjkAf7Kk9ngGQteWUNAEJ1VH3jttivdN2ft`,
  // [EvmChainId.MOONBEAM]: `QmWZpwizHCefGY3vBUJhDhaVHPUgYE8oAAyBy1T5HATbMb`,
  // [EvmChainId.MOONRIVER]: `QmcRAdiUuYzZDauyM2q8FDucZaDVLgKPGsMyKn1ds4DXfm`,
  // [EvmChainId.HARMONY]: `QmZkT9mzDf5YcbSti51BZGet7sKnNcYAjBBE9xQ3LWHqKC`,
} as const satisfies Partial<Record<SushiSwapV2ChainId, string>>

const SUSHISWAP_V2_DECENTRALIZED_SUBGRAPH_IDS = {
  [EvmChainId.KATANA]: `FYBTPY5uYPZ3oXpEriw9Pzn8RH9S1m7tpNwBwaNMuTNq`,
} as const satisfies Partial<Record<SushiSwapV2ChainId, string>>

const SUSHISWAP_V2_OTHER_URLS = {
  [EvmChainId.ARBITRUM_NOVA]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/sushi-0m/v2-arbitrum-nova/gn`,
  [EvmChainId.BOBA_BNB]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/sushi-0m/v2-boba-bnb/gn`,
  [EvmChainId.KAVA]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/sushi-v2/v2-kava/gn`,
  [EvmChainId.METIS]: `${METIS_0XGRAPH_HOST}/sushiswap/v2-metis/-/gn`,
  [EvmChainId.BTTC]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/sushi-v2/v2-bttc/gn`,
  [EvmChainId.FILECOIN]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/sushiswap/v2-filecoin/gn`,
  [EvmChainId.ZETACHAIN]: `${SUSHI_GOLDSKY_HOST}/v2-zetachain/1.0.0/gn`,
  [EvmChainId.THUNDERCORE]: `${THUNDERCORE_HOST}/sushi-v2/v2-thundercore`,
  [EvmChainId.CORE]: `${CORE_HOST}/sushi-v2/v2-core`,
  [EvmChainId.HAQQ]: `${HAQQ_HOST}/sushi/v2-haqq`,
  [EvmChainId.BLAST]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/sushiswap/v2-blast/gn`,
  [EvmChainId.SKALE_EUROPA]: `${SKALE_HOST}/sushi/v2-skale-europa`,
  [EvmChainId.ROOTSTOCK]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/sushiswap/v2-rootstock/gn`,
  [EvmChainId.HEMI]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/sushiswap/v2-hemi/gn`,
  [EvmChainId.SEPOLIA]: '',
  [EvmChainId.TATARA]: '',
} as const satisfies Partial<Record<SushiSwapV2ChainId, string>>

export const getSushiSwapV2SubgraphUrl = getSubgraphUrlWrapper({
  decentralizedIds: {
    ...wrapAsIdType(SUSHISWAP_V2_DECENTRALIZED_DEPLOYMENT_IDS, 'deploymentId'),
    ...wrapAsIdType(SUSHISWAP_V2_DECENTRALIZED_SUBGRAPH_IDS, 'subgraphId'),
  },
  otherUrls: SUSHISWAP_V2_OTHER_URLS,
})<SushiSwapV2ChainId, 'COMPLETE'>()

export const V2SubgraphTemplateMap: Record<SushiSwapV2ChainId, string> =
  Object.fromEntries(
    Object.entries({
      ...SUSHISWAP_V2_DECENTRALIZED_DEPLOYMENT_IDS,
      ...SUSHISWAP_V2_DECENTRALIZED_SUBGRAPH_IDS,
      ...SUSHISWAP_V2_OTHER_URLS,
    })
      .map(([chainId]) => {
        const url = getSushiSwapV2SubgraphUrl(
          Number(chainId) as SushiSwapV2ChainId,
          { decentralizedKey: '${GRAPH_KEY}' },
        )
        return [Number(chainId), url ? `https://${url}` : undefined]
      })
      .filter(([, url]) => !!url),
  ) as Record<SushiSwapV2ChainId, string>
