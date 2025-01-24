import { EvmChainId } from '../../../chain/index.js'
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
  [EvmChainId.ETHEREUM]: `Qmc9SpuEmLpQEHMsS91gUn1ezxhMT6rZvtPmvJFcMFs4jf`,
  [EvmChainId.GNOSIS]: `QmSuECAqbS4rBjaiQxT6rDKGbXZrZf3pbaNoWaPybM8LPb`,
  [EvmChainId.POLYGON]: `QmW4KMXwa16mqLtcZP6pNPu8od4WBcDTZ88Cer3NWJHarY`,
  [EvmChainId.POLYGON_ZKEVM]: `QmPkSqnWiEkJHHfBgo3n3RkXSKpJ5K1a3jYMXTgUrtiaBd`,
  [EvmChainId.FANTOM]: `QmW23f8YMmvRaL97XScHWKtL2LJijJu52brHuXq73McrVA`,
  [EvmChainId.BSC]: `QmZhXTrZX9HTAzkHa4KYXffzzGBDMJhqSBkqKUDmhpay2o`,
  [EvmChainId.HARMONY]: `QmXByYZwFH59hUWUuYqz6Kh62wxn1QUaW2Dw9YgyzxnPG8`,
  [EvmChainId.AVALANCHE]: `QmcEuwgrisQJBiw17g67nR4o2zvMTXZKzBR436GeiEfRAu`,
  [EvmChainId.CELO]: `QmZVmmn6K9FLHXMT3KuFV754NyAXSLPidz9LCqabmRAQWd`,
  [EvmChainId.ARBITRUM]: `QmUGLeBFVtYiSoHX1ZdvwDDFYANtrwpXNa2g3XobfrcHfc`,
  [EvmChainId.MOONRIVER]: `QmahwQzHutiz9w9VJmfkDBtRrkyHJgxVDCGmP5KyL7n4py`,
  [EvmChainId.FUSE]: `Qmb5xV1EEk5uUr51mG3UrVxwqC4W3WGPEHV4bj69xRX6BX`,
  [EvmChainId.MOONBEAM]: `QmRd2AMHySTBE6y7UkvRm8vxuNmYqHHZ4G27J63JyWkt9h`,
  [EvmChainId.OPTIMISM]: `QmVie4YxCAuG5LPMbTgDNcop31BVsptbkCSKcCQXSg2XMh`,
  [EvmChainId.BOBA]: `QmZyzP3zWmgt3duVgTX3ZveumhJQwiDnpJhQUJDx4pToM9`,
  [EvmChainId.BASE]: `QmVvYAaZxH8NZTT7GP7rCWNa3c82MRNKxcqFUDTjrrT9Vm`,
  [EvmChainId.LINEA]: `QmbSc9Y7fLrp6xSceRuAdLcF3qASdP3iDFYWnBFSRPSABp`,
  [EvmChainId.SCROLL]: `QmeiBVERaEaBvDeXvNhSbCXVq1PxsshdKua5Y6b8Bqnuzu`,
  [EvmChainId.SONIC]: `QmdAhLuQAv9GfsWctJ8R36bYr6Gdp2GgUGSR2EDUNfb96h`,
  [EvmChainId.HEMI]: `QmaiDWUnDJ4sGaW8ANNPjype8FDYe1G3gseSTRotmr83CL`,
} as const satisfies Partial<Record<EvmChainId, string>>

const BLOCKS_OTHER_URLS = {
  // [EvmChainId.OKEX]: `${GRAPH_HOST}/okexchain-blocks/oec`,
  // [EvmChainId.HECO]: `${GRAPH_HOST}/hecoblocks/heco`,
  // [EvmChainId.KOVAN]: `${GRAPH_HOST}/blocklytics/kovan-blocks`,
  [EvmChainId.KAVA]: `${WAGMI_KAVA_HOST}/blocks`,
  [EvmChainId.METIS]: `${METIS_0XGRAPH_HOST}/sushiswap/blocks-metis`,
  // [EvmChainId.METIS]: `${WAGMI_METIS_HOST}/blocks`,
  [EvmChainId.ARBITRUM_NOVA]: `${SUSHI_GOLDSKY_HOST}/blocks/arbitrum-nova/gn`,
  [EvmChainId.BOBA_BNB]: `${SUSHI_GOLDSKY_HOST}/blocks/boba-bnb/gn`,
  [EvmChainId.BTTC]: `${SUSHI_GOLDSKY_HOST}/blocks/bttc-mainnet/gn`,
  [EvmChainId.THUNDERCORE]: `${THUNDERCORE_HOST}/sushiswap/blocks-thundercore`,
  [EvmChainId.CORE]: `${CORE_HOST}/sushiswap/blocks-core`,
  [EvmChainId.FILECOIN]: `${FILECOIN_HOST}/sushiswap/blocks`,
  [EvmChainId.HAQQ]: `${HAQQ_HOST}/sushi/blocks-haqq`,
  [EvmChainId.ZETACHAIN]: `${SUSHI_GOLDSKY_HOST}/blocks-zetachain/1.0.0/gn`,
  [EvmChainId.BLAST]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/sushiswap/blocks-blast/gn`,
  [EvmChainId.SKALE_EUROPA]: `${SKALE_HOST}/sushi/blocks-skale-europa`,
  [EvmChainId.ROOTSTOCK]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/sushiswap/blocks-rootstock/gn`,
} as const satisfies Partial<Record<EvmChainId, string>>

export const getBlocksSubgraphUrl = getSubgraphUrlWrapper({
  decentralizedIds: wrapAsIdType(BLOCKS_DECENTRALIZED_IDS, 'deploymentId'),
  otherUrls: BLOCKS_OTHER_URLS,
})<EvmChainId, 'PARTIAL'>()
