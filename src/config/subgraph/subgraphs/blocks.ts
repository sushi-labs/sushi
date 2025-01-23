import { ChainId } from '../../../chain/index.js'
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
  WAGMI_KAVA_HOST,
} from '../hosts.js'

const BLOCKS_DECENTRALIZED_IDS = {
  [ChainId.ETHEREUM]: `Qmc9SpuEmLpQEHMsS91gUn1ezxhMT6rZvtPmvJFcMFs4jf`,
  [ChainId.GNOSIS]: `QmSuECAqbS4rBjaiQxT6rDKGbXZrZf3pbaNoWaPybM8LPb`,
  [ChainId.POLYGON]: `QmW4KMXwa16mqLtcZP6pNPu8od4WBcDTZ88Cer3NWJHarY`,
  [ChainId.POLYGON_ZKEVM]: `QmPkSqnWiEkJHHfBgo3n3RkXSKpJ5K1a3jYMXTgUrtiaBd`,
  [ChainId.FANTOM]: `QmW23f8YMmvRaL97XScHWKtL2LJijJu52brHuXq73McrVA`,
  [ChainId.BSC]: `QmZhXTrZX9HTAzkHa4KYXffzzGBDMJhqSBkqKUDmhpay2o`,
  [ChainId.HARMONY]: `QmXByYZwFH59hUWUuYqz6Kh62wxn1QUaW2Dw9YgyzxnPG8`,
  [ChainId.AVALANCHE]: `QmcEuwgrisQJBiw17g67nR4o2zvMTXZKzBR436GeiEfRAu`,
  [ChainId.CELO]: `QmZVmmn6K9FLHXMT3KuFV754NyAXSLPidz9LCqabmRAQWd`,
  [ChainId.ARBITRUM]: `QmUGLeBFVtYiSoHX1ZdvwDDFYANtrwpXNa2g3XobfrcHfc`,
  [ChainId.MOONRIVER]: `QmahwQzHutiz9w9VJmfkDBtRrkyHJgxVDCGmP5KyL7n4py`,
  [ChainId.FUSE]: `Qmb5xV1EEk5uUr51mG3UrVxwqC4W3WGPEHV4bj69xRX6BX`,
  [ChainId.MOONBEAM]: `QmRd2AMHySTBE6y7UkvRm8vxuNmYqHHZ4G27J63JyWkt9h`,
  [ChainId.OPTIMISM]: `QmVie4YxCAuG5LPMbTgDNcop31BVsptbkCSKcCQXSg2XMh`,
  [ChainId.BOBA]: `QmZyzP3zWmgt3duVgTX3ZveumhJQwiDnpJhQUJDx4pToM9`,
  [ChainId.BASE]: `QmVvYAaZxH8NZTT7GP7rCWNa3c82MRNKxcqFUDTjrrT9Vm`,
  [ChainId.LINEA]: `QmbSc9Y7fLrp6xSceRuAdLcF3qASdP3iDFYWnBFSRPSABp`,
  [ChainId.SCROLL]: `QmeiBVERaEaBvDeXvNhSbCXVq1PxsshdKua5Y6b8Bqnuzu`,
  [ChainId.SONIC]: `QmdAhLuQAv9GfsWctJ8R36bYr6Gdp2GgUGSR2EDUNfb96h`,
  [ChainId.HEMI]: `QmaiDWUnDJ4sGaW8ANNPjype8FDYe1G3gseSTRotmr83CL`,
} as const satisfies Partial<Record<ChainId, string>>

const BLOCKS_OTHER_URLS = {
  // [ChainId.OKEX]: `${GRAPH_HOST}/okexchain-blocks/oec`,
  // [ChainId.HECO]: `${GRAPH_HOST}/hecoblocks/heco`,
  // [ChainId.KOVAN]: `${GRAPH_HOST}/blocklytics/kovan-blocks`,
  [ChainId.KAVA]: `${WAGMI_KAVA_HOST}/blocks`,
  [ChainId.METIS]: `${METIS_0XGRAPH_HOST}/sushiswap/blocks-metis`,
  // [ChainId.METIS]: `${WAGMI_METIS_HOST}/blocks`,
  [ChainId.ARBITRUM_NOVA]: `${SUSHI_GOLDSKY_HOST}/blocks/arbitrum-nova/gn`,
  [ChainId.BOBA_BNB]: `${SUSHI_GOLDSKY_HOST}/blocks/boba-bnb/gn`,
  [ChainId.BTTC]: `${SUSHI_GOLDSKY_HOST}/blocks/bttc-mainnet/gn`,
  [ChainId.THUNDERCORE]: `${THUNDERCORE_HOST}/sushiswap/blocks-thundercore`,
  [ChainId.CORE]: `${CORE_HOST}/sushiswap/blocks-core`,
  [ChainId.FILECOIN]: `${FILECOIN_HOST}/sushiswap/blocks`,
  [ChainId.HAQQ]: `${HAQQ_HOST}/sushi/blocks-haqq`,
  [ChainId.ZETACHAIN]: `${SUSHI_GOLDSKY_HOST}/blocks-zetachain/1.0.0/gn`,
  [ChainId.BLAST]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/sushiswap/blocks-blast/gn`,
  [ChainId.SKALE_EUROPA]: `${SKALE_HOST}/sushi/blocks-skale-europa`,
  [ChainId.ROOTSTOCK]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/sushiswap/blocks-rootstock/gn`,
} as const satisfies Partial<Record<ChainId, string>>

export const getBlocksSubgraphUrl = getSubgraphUrlWrapper({
  decentralizedIds: wrapAsIdType(BLOCKS_DECENTRALIZED_IDS, 'deploymentId'),
  otherUrls: BLOCKS_OTHER_URLS,
})<ChainId, 'PARTIAL'>()
