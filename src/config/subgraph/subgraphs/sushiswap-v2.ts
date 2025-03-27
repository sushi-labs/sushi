import { EvmChainId } from '../../../chain/evm/index.js'
import type { SushiSwapV2ChainId } from '../../features/sushiswap-v2.js'
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

const SUSHISWAP_V2_DECENTRALIZED_DEPLOYMENT_IDS = {
  [EvmChainId.ETHEREUM]: `QmQZhAvJahdB9YLBQFcE5MYUJNau7rWmTNVhyBPw8PnjUn`,
  [EvmChainId.AVALANCHE]: `QmadNP3fXrcba189BuSrT88Tw7YHhTtHWsdBTQhNpyaF6c`,
  [EvmChainId.ARBITRUM]: `QmfN96hDXYtgeLsBv5WjQY8FAwqBfBFoiq8gzsn9oApcoU`,
  [EvmChainId.BSC]: `QmQ3b4S6PSgvRkd5PhxtDPDQRybfmaRYxGVZCLbYJopoKJ`,
  [EvmChainId.CELO]: `QmNxrypMUwDagUwxcBDPPebNx4ZPZ3XGJ2cdaejAjXg735`,
  [EvmChainId.FANTOM]: `QmbitwNMFxEcJVtZyTcLYr2GrQSLg99rpZZmmD2m13xRp2`,
  [EvmChainId.GNOSIS]: `QmU7USviTB8LtJ9tkPjZLcretNnYyUWzwDy9N7zTupNYj2`,
  [EvmChainId.OPTIMISM]: `QmZWaFzzzs7CEzpVeLrNqW6e7oNxG8AnkJt9kUEV5rFzxn`,
  [EvmChainId.BOBA]: `QmYzLBMamDBWJWsUNFiRfq91w2H38SAf9jXyCYDTzhyHh3`,
  [EvmChainId.POLYGON]: `QmcFVSFXGgodMVUGLAdYdYPfohyMwWat8pfi5pHSDXgskU`,
  [EvmChainId.BASE]: `QmWZnioK8S9HL45kQqKFd67NxeqM1uEoVhYrrbcPDxuQSV`,
  [EvmChainId.SCROLL]: `QmZkX4zi2RzLsQKva29gE3uCcMuJVxXE3R11Ln1J3FY3f7`,
  [EvmChainId.LINEA]: `QmYzLBMamDBWJWsUNFiRfq91w2H38SAf9jXyCYDTzhyHh3`,
  [EvmChainId.SONIC]: `QmPwojaKQsJ3CFojVN9vXPfgBpymNBaVLMChMDo1biChff`,
  // Deprecated chains
  [EvmChainId.POLYGON_ZKEVM]: `QmQLtMYbTvxDHqc5oFH75N2b4DL3Czdv2jSCo6bk4UwKyf`,
  [EvmChainId.FUSE]: `QmRcpZhksXHJjkAf7Kk9ngGQteWUNAEJ1VH3jttivdN2ft`,
  [EvmChainId.MOONBEAM]: `QmWZpwizHCefGY3vBUJhDhaVHPUgYE8oAAyBy1T5HATbMb`,
  [EvmChainId.MOONRIVER]: `QmcRAdiUuYzZDauyM2q8FDucZaDVLgKPGsMyKn1ds4DXfm`,
  [EvmChainId.HARMONY]: `QmZkT9mzDf5YcbSti51BZGet7sKnNcYAjBBE9xQ3LWHqKC`,
} as const satisfies Partial<Record<SushiSwapV2ChainId, string>>

const SUSHISWAP_V2_DECENTRALIZED_SUBGRAPH_IDS = {
} as const satisfies Partial<Record<SushiSwapV2ChainId, string>>

const SUSHISWAP_V2_OTHER_URLS = {
  [EvmChainId.ARBITRUM_NOVA]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/sushi-0m/v2-arbitrum-nova/gn`,
  [EvmChainId.BOBA_BNB]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/sushi-0m/v2-boba-bnb/gn`,
  [EvmChainId.KAVA]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/sushi-v2/v2-kava/gn`,
  [EvmChainId.METIS]: `${METIS_0XGRAPH_HOST}/sushiswap/v2-metis/-/gn`,
  [EvmChainId.BTTC]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/sushi-v2/v2-bttc/gn`,
  [EvmChainId.FILECOIN]: `${FILECOIN_HOST}/sushiswap/v2-filecoin`,
  [EvmChainId.ZETACHAIN]: `${SUSHI_GOLDSKY_HOST}/v2-zetachain/1.0.0/gn`,
  [EvmChainId.THUNDERCORE]: `${THUNDERCORE_HOST}/sushi-v2/v2-thundercore`,
  [EvmChainId.CORE]: `${CORE_HOST}/sushi-v2/v2-core`,
  [EvmChainId.HAQQ]: `${HAQQ_HOST}/sushi/v2-haqq`,
  [EvmChainId.BLAST]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/sushiswap/v2-blast/gn`,
  [EvmChainId.SKALE_EUROPA]: `${SKALE_HOST}/sushi/v2-skale-europa`,
  [EvmChainId.ROOTSTOCK]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/sushiswap/v2-rootstock/gn`,
  [EvmChainId.HEMI]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/sushiswap/v2-hemi/gn`,
  [EvmChainId.SEPOLIA]: '',
} as const satisfies Partial<Record<SushiSwapV2ChainId, string>>

export const getSushiSwapV2SubgraphUrl = getSubgraphUrlWrapper({
  decentralizedIds: {
    ...wrapAsIdType(SUSHISWAP_V2_DECENTRALIZED_DEPLOYMENT_IDS, 'deploymentId'),
    ...wrapAsIdType(SUSHISWAP_V2_DECENTRALIZED_SUBGRAPH_IDS, 'subgraphId'),
  },
  otherUrls: SUSHISWAP_V2_OTHER_URLS,
})<SushiSwapV2ChainId, 'COMPLETE'>()
