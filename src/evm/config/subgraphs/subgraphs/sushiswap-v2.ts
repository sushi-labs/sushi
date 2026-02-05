import { EvmChainId } from '../../../chain/index.js'
import type { SushiSwapV2ChainId } from '../../features/sushiswap-v2.js'
import { getSubgraphUrlWrapper, wrapAsIdType } from '../get-subgraph-url.js'
import {
  SKALE_HOST,
  SUSHI_DEDICATED_GOLDSKY_HOST,
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
} as const satisfies Partial<Record<SushiSwapV2ChainId, string>>

const SUSHISWAP_V2_DECENTRALIZED_SUBGRAPH_IDS = {
  [EvmChainId.KATANA]: `FYBTPY5uYPZ3oXpEriw9Pzn8RH9S1m7tpNwBwaNMuTNq`,
} as const satisfies Partial<Record<SushiSwapV2ChainId, string>>

const SUSHISWAP_V2_OTHER_URLS = {
  [EvmChainId.ARBITRUM_NOVA]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/sushi-0m/v2-arbitrum-nova/gn`,
  [EvmChainId.FILECOIN]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/sushiswap/v2-filecoin/gn`,
  [EvmChainId.BLAST]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/sushiswap/v2-blast/gn`,
  [EvmChainId.SKALE_EUROPA]: `${SKALE_HOST}/sushi/v2-skale-europa`,
  [EvmChainId.ROOTSTOCK]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/sushiswap/v2-rootstock/gn`,
  [EvmChainId.HEMI]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/sushiswap/v2-hemi/gn`,
} as const satisfies Partial<Record<SushiSwapV2ChainId, string>>

export const getSushiSwapV2SubgraphUrl = getSubgraphUrlWrapper({
  decentralizedIds: {
    ...wrapAsIdType(SUSHISWAP_V2_DECENTRALIZED_DEPLOYMENT_IDS, 'deploymentId'),
    ...wrapAsIdType(SUSHISWAP_V2_DECENTRALIZED_SUBGRAPH_IDS, 'subgraphId'),
  },
  otherUrls: SUSHISWAP_V2_OTHER_URLS,
})<SushiSwapV2ChainId, 'PARTIAL'>()
