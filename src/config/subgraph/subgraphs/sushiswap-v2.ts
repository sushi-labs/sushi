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
  [EvmChainId.ETHEREUM]: `QmQ2h69a3vnE6N3TN7Ys9K1vpjYiJSi8fexnj1pWpRc6uY`,
  [EvmChainId.AVALANCHE]: `QmfLnYXftuf2PNPoC3mMusey27KyJi4UUuY741Nz3vZQ3q`,
  [EvmChainId.ARBITRUM]: `QmV5qTnwjz65z6TH63DYngLr1gj52KQ6Lr6m8aeNj6yxxb`,
  [EvmChainId.BSC]: `QmUJcdUCSApCahz2ZtxEBwLqBX5YPfy3NNzHGUXyERAdmi`,
  [EvmChainId.CELO]: `QmWX1tYofCvtw675s6ccE8ovWDkuikRBkkLk4PQpT79jRD`,
  [EvmChainId.FANTOM]: `QmVNMMgTVAJ5f3GSAASS5eYsGrcudmsCrXJyF9j5v9d5eC`,
  [EvmChainId.FUSE]: `QmRcpZhksXHJjkAf7Kk9ngGQteWUNAEJ1VH3jttivdN2ft`,
  [EvmChainId.GNOSIS]: `QmUwneRXVUqTsPEZqScQytg257Rij3nSApe4pdDAtuG4s4`,
  [EvmChainId.MOONBEAM]: `QmWZpwizHCefGY3vBUJhDhaVHPUgYE8oAAyBy1T5HATbMb`,
  [EvmChainId.MOONRIVER]: `QmcRAdiUuYzZDauyM2q8FDucZaDVLgKPGsMyKn1ds4DXfm`,
  [EvmChainId.HARMONY]: `QmZkT9mzDf5YcbSti51BZGet7sKnNcYAjBBE9xQ3LWHqKC`,
  [EvmChainId.OPTIMISM]: `QmdMmVsnaVRxQyunaXrG1oFrpcUFp8iV3TcpRa3hVYaPUD`,
  [EvmChainId.BOBA]: `QmSuZ3L62PyVC4RjYFikoYZhyDMGMkPNUArVMaj9G73Dxw`,
  [EvmChainId.POLYGON]: `QmV4FT95YqNdbivbPmvjXRavdKu3FGkz41mjuqtvUvpRpc`,
  [EvmChainId.BASE]: `QmQfYe5Ygg9A3mAiuBZYj5a64bDKLF4gF6sezfhgxKvb9y`,
  [EvmChainId.SCROLL]: `QmecR8pDHLNaRGQtKxA1ZvSSyBh23haXPdYZppPzALQmzt`,
  [EvmChainId.LINEA]: `QmcrH1y6zx6wzTBL9cKVdA81fHkPzytcx5Gy1iVJLP1Vfw`,
  [EvmChainId.POLYGON_ZKEVM]: `QmQLtMYbTvxDHqc5oFH75N2b4DL3Czdv2jSCo6bk4UwKyf`,
} as const satisfies Partial<Record<SushiSwapV2ChainId, string>>

const SUSHISWAP_V2_DECENTRALIZED_SUBGRAPH_IDS = {
  [EvmChainId.SONIC]: `DiS2ZgxR2upUs1s21wviEaY7hwjRWyrphhoBgKNc1Boo`,
  [EvmChainId.HEMI]: `2Dt3D9Mkvhbp7YGRZ75GZUxcqH9vz5dbdiWkU7Sp7NNV`,
} as const satisfies Partial<Record<SushiSwapV2ChainId, string>>

const SUSHISWAP_V2_OTHER_URLS = {
  [EvmChainId.ARBITRUM_NOVA]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/sushi-0m/v2-arbitrum-nova/gn`,
  [EvmChainId.BOBA_BNB]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/sushi-0m/v2-boba-bnb/gn`,
  [EvmChainId.KAVA]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/sushi-v2/v2-kava/gn`,
  [EvmChainId.METIS]: `${METIS_0XGRAPH_HOST}/sushiswap/v2-metis`,
  [EvmChainId.BTTC]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/sushi-v2/v2-bttc/gn`,
  [EvmChainId.FILECOIN]: `${FILECOIN_HOST}/sushiswap/v2-filecoin`,
  [EvmChainId.ZETACHAIN]: `${SUSHI_GOLDSKY_HOST}/v2-zetachain/1.0.0/gn`,
  [EvmChainId.THUNDERCORE]: `${THUNDERCORE_HOST}/sushi-v2/v2-thundercore`,
  [EvmChainId.CORE]: `${CORE_HOST}/sushi-v2/v2-core`,
  [EvmChainId.HAQQ]: `${HAQQ_HOST}/sushi/v2-haqq`,
  [EvmChainId.BLAST]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/sushiswap/v2-blast/gn`,
  [EvmChainId.SKALE_EUROPA]: `${SKALE_HOST}/sushi/v2-skale-europa`,
  [EvmChainId.ROOTSTOCK]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/sushiswap/v2-rootstock/gn`,
  [EvmChainId.SEPOLIA]: '',
} as const satisfies Partial<Record<SushiSwapV2ChainId, string>>

export const getSushiSwapV2SubgraphUrl = getSubgraphUrlWrapper({
  decentralizedIds: {
    ...wrapAsIdType(SUSHISWAP_V2_DECENTRALIZED_DEPLOYMENT_IDS, 'deploymentId'),
    ...wrapAsIdType(SUSHISWAP_V2_DECENTRALIZED_SUBGRAPH_IDS, 'subgraphId'),
  },
  otherUrls: SUSHISWAP_V2_OTHER_URLS,
})<SushiSwapV2ChainId, 'COMPLETE'>()
