import { ChainId } from '../../../chain/index.js'
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
  [ChainId.ETHEREUM]: `QmQ2h69a3vnE6N3TN7Ys9K1vpjYiJSi8fexnj1pWpRc6uY`,
  [ChainId.AVALANCHE]: `QmfLnYXftuf2PNPoC3mMusey27KyJi4UUuY741Nz3vZQ3q`,
  [ChainId.ARBITRUM]: `QmV5qTnwjz65z6TH63DYngLr1gj52KQ6Lr6m8aeNj6yxxb`,
  [ChainId.BSC]: `QmUJcdUCSApCahz2ZtxEBwLqBX5YPfy3NNzHGUXyERAdmi`,
  [ChainId.CELO]: `QmWX1tYofCvtw675s6ccE8ovWDkuikRBkkLk4PQpT79jRD`,
  [ChainId.FANTOM]: `QmVNMMgTVAJ5f3GSAASS5eYsGrcudmsCrXJyF9j5v9d5eC`,
  [ChainId.FUSE]: `QmRcpZhksXHJjkAf7Kk9ngGQteWUNAEJ1VH3jttivdN2ft`,
  [ChainId.GNOSIS]: `QmUwneRXVUqTsPEZqScQytg257Rij3nSApe4pdDAtuG4s4`,
  [ChainId.MOONBEAM]: `QmWZpwizHCefGY3vBUJhDhaVHPUgYE8oAAyBy1T5HATbMb`,
  [ChainId.MOONRIVER]: `QmcRAdiUuYzZDauyM2q8FDucZaDVLgKPGsMyKn1ds4DXfm`,
  [ChainId.HARMONY]: `QmZkT9mzDf5YcbSti51BZGet7sKnNcYAjBBE9xQ3LWHqKC`,
  [ChainId.OPTIMISM]: `QmdMmVsnaVRxQyunaXrG1oFrpcUFp8iV3TcpRa3hVYaPUD`,
  [ChainId.BOBA]: `QmSuZ3L62PyVC4RjYFikoYZhyDMGMkPNUArVMaj9G73Dxw`,
  [ChainId.POLYGON]: `QmV4FT95YqNdbivbPmvjXRavdKu3FGkz41mjuqtvUvpRpc`,
  [ChainId.BASE]: `QmQfYe5Ygg9A3mAiuBZYj5a64bDKLF4gF6sezfhgxKvb9y`,
  [ChainId.SCROLL]: `QmecR8pDHLNaRGQtKxA1ZvSSyBh23haXPdYZppPzALQmzt`,
  [ChainId.LINEA]: `QmcrH1y6zx6wzTBL9cKVdA81fHkPzytcx5Gy1iVJLP1Vfw`,
  [ChainId.POLYGON_ZKEVM]: `QmQLtMYbTvxDHqc5oFH75N2b4DL3Czdv2jSCo6bk4UwKyf`,
} as const satisfies Partial<Record<SushiSwapV2ChainId, string>>

const SUSHISWAP_V2_DECENTRALIZED_SUBGRAPH_IDS = {
  [ChainId.SONIC]: `DiS2ZgxR2upUs1s21wviEaY7hwjRWyrphhoBgKNc1Boo`,
  [ChainId.HEMI]: `2Dt3D9Mkvhbp7YGRZ75GZUxcqH9vz5dbdiWkU7Sp7NNV`,
} as const satisfies Partial<Record<SushiSwapV2ChainId, string>>

const SUSHISWAP_V2_OTHER_URLS = {
  [ChainId.ARBITRUM_NOVA]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/sushi-0m/v2-arbitrum-nova/gn`,
  [ChainId.BOBA_BNB]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/sushi-0m/v2-boba-bnb/gn`,
  [ChainId.KAVA]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/sushi-v2/v2-kava/gn`,
  [ChainId.METIS]: `${METIS_0XGRAPH_HOST}/sushiswap/v2-metis`,
  [ChainId.BTTC]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/sushi-v2/v2-bttc/gn`,
  [ChainId.FILECOIN]: `${FILECOIN_HOST}/sushiswap/v2-filecoin`,
  [ChainId.ZETACHAIN]: `${SUSHI_GOLDSKY_HOST}/v2-zetachain/1.0.0/gn`,
  [ChainId.THUNDERCORE]: `${THUNDERCORE_HOST}/sushi-v2/v2-thundercore`,
  [ChainId.CORE]: `${CORE_HOST}/sushi-v2/v2-core`,
  [ChainId.HAQQ]: `${HAQQ_HOST}/sushi/v2-haqq`,
  [ChainId.BLAST]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/sushiswap/v2-blast/gn`,
  [ChainId.SKALE_EUROPA]: `${SKALE_HOST}/sushi/v2-skale-europa`,
  [ChainId.ROOTSTOCK]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/sushiswap/v2-rootstock/gn`,
  [ChainId.SEPOLIA]: '',
} as const satisfies Partial<Record<SushiSwapV2ChainId, string>>

export const getSushiSwapV2SubgraphUrl = getSubgraphUrlWrapper({
  decentralizedIds: {
    ...wrapAsIdType(SUSHISWAP_V2_DECENTRALIZED_DEPLOYMENT_IDS, 'deploymentId'),
    ...wrapAsIdType(SUSHISWAP_V2_DECENTRALIZED_SUBGRAPH_IDS, 'subgraphId'),
  },
  otherUrls: SUSHISWAP_V2_OTHER_URLS,
})<SushiSwapV2ChainId, 'COMPLETE'>()
