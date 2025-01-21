import { EvmChainId } from '../../../chain/evm/index.js'
import type { FuroChainId } from '../../features/furo.js'
import { getSubgraphUrlWrapper, wrapAsIdType } from '../get-subgraph-url.js'
import {
  CORE_HOST,
  HAQQ_HOST,
  SUSHI_DEDICATED_GOLDSKY_HOST,
  THUNDERCORE_HOST,
} from '../hosts.js'

const FURO_DECENTRALIZED_IDS = {
  [EvmChainId.ETHEREUM]: `QmQLU8dEJcxYj7rVGbGWRYHrhKifbQKTtPRfKhHw1aszWh`,
  [EvmChainId.ARBITRUM]: `QmQV6TaRFgBdk4ykzpf6mfdWVB2GLVjkidJZ2YWctR2w2C`,
  [EvmChainId.AVALANCHE]: `QmbBFHznvVVj5FHA32nHCJ3EEbGBFV7gbnEJ7MvcfJSWRg`,
  [EvmChainId.BSC]: `QmVQ9jq4bBgfGKzKBL1AjYFGTqLEAYqTPUbs9YienYewpf`,
  [EvmChainId.FANTOM]: `QmUCx4QRvmDiP1fJaE8RQ72YkkXP9c62rckyhf9EPh87aj`,
  [EvmChainId.GNOSIS]: `Qmf7PkcBd251aKyxCcMPRBWKc76tZ8k1xmVMSZ5zKqoSbh`,
  [EvmChainId.HARMONY]: `Qma2FYbCR7iBQmGaGN4oLMB5TtnBcN9bgTttYyt3vD6xXX`,
  [EvmChainId.MOONBEAM]: `QmNwmGQw2vcK991B7MJCJgsZAS8Mt2fQZ41qrPMJFVKaAU`,
  [EvmChainId.MOONRIVER]: `QmdChdTYcr6YgfKHw6FCUtJsfZBEQkvsoAkiRAs1GcGWMZ`,
  [EvmChainId.OPTIMISM]: `QmajmWiw8tyhgJcGk69QiL2gEXqniM3PNPAaLjPh6dYfpf`,
  [EvmChainId.POLYGON]: `QmT25bz8HV5173wbZ21vcMR76R34BW7Bix4fES9iibBKKW`,
} as const satisfies Partial<Record<FuroChainId, string>>

const FURO_OTHER_URLS = {
  [EvmChainId.HAQQ]: `${HAQQ_HOST}/sushi/furo-haqq`,
  [EvmChainId.CORE]: `${CORE_HOST}/sushi-subgraphs/furo-core`,
  [EvmChainId.THUNDERCORE]: `${THUNDERCORE_HOST}/sushi-subgraphs/furo-thundercore`,
  [EvmChainId.BTTC]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/sushi-subgraphs/furo-bttc/gn`,
} as const satisfies Partial<Record<FuroChainId, string>>

export const getFuroSubgraphUrl = getSubgraphUrlWrapper({
  decentralizedIds: wrapAsIdType(FURO_DECENTRALIZED_IDS, 'deploymentId'),
  otherUrls: FURO_OTHER_URLS,
})<FuroChainId, 'COMPLETE'>()
