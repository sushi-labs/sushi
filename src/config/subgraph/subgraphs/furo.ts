import { ChainId } from '../../../chain/index.js'
import type { FuroChainId } from '../../features/furo.js'
import { getSubgraphUrlWrapper, wrapAsIdType } from '../get-subgraph-url.js'
import {
  CORE_HOST,
  HAQQ_HOST,
  SUSHI_DEDICATED_GOLDSKY_HOST,
  THUNDERCORE_HOST,
} from '../hosts.js'

const FURO_DECENTRALIZED_IDS = {
  [ChainId.ETHEREUM]: `QmQLU8dEJcxYj7rVGbGWRYHrhKifbQKTtPRfKhHw1aszWh`,
  [ChainId.ARBITRUM]: `QmQV6TaRFgBdk4ykzpf6mfdWVB2GLVjkidJZ2YWctR2w2C`,
  [ChainId.AVALANCHE]: `QmbBFHznvVVj5FHA32nHCJ3EEbGBFV7gbnEJ7MvcfJSWRg`,
  [ChainId.BSC]: `QmVQ9jq4bBgfGKzKBL1AjYFGTqLEAYqTPUbs9YienYewpf`,
  [ChainId.FANTOM]: `QmUCx4QRvmDiP1fJaE8RQ72YkkXP9c62rckyhf9EPh87aj`,
  [ChainId.GNOSIS]: `Qmf7PkcBd251aKyxCcMPRBWKc76tZ8k1xmVMSZ5zKqoSbh`,
  [ChainId.HARMONY]: `Qma2FYbCR7iBQmGaGN4oLMB5TtnBcN9bgTttYyt3vD6xXX`,
  [ChainId.MOONBEAM]: `QmNwmGQw2vcK991B7MJCJgsZAS8Mt2fQZ41qrPMJFVKaAU`,
  [ChainId.MOONRIVER]: `QmdChdTYcr6YgfKHw6FCUtJsfZBEQkvsoAkiRAs1GcGWMZ`,
  [ChainId.OPTIMISM]: `QmajmWiw8tyhgJcGk69QiL2gEXqniM3PNPAaLjPh6dYfpf`,
  [ChainId.POLYGON]: `QmT25bz8HV5173wbZ21vcMR76R34BW7Bix4fES9iibBKKW`,
} as const satisfies Partial<Record<FuroChainId, string>>

const FURO_OTHER_URLS = {
  [ChainId.HAQQ]: `${HAQQ_HOST}/sushi/furo-haqq`,
  [ChainId.CORE]: `${CORE_HOST}/sushi-subgraphs/furo-core`,
  [ChainId.THUNDERCORE]: `${THUNDERCORE_HOST}/sushi-subgraphs/furo-thundercore`,
  [ChainId.BTTC]: `${SUSHI_DEDICATED_GOLDSKY_HOST}/sushi-subgraphs/furo-bttc/gn`,
} as const satisfies Partial<Record<FuroChainId, string>>

export const getFuroSubgraphUrl = getSubgraphUrlWrapper({
  decentralizedIds: wrapAsIdType(FURO_DECENTRALIZED_IDS, 'deploymentId'),
  otherUrls: FURO_OTHER_URLS,
})<FuroChainId, 'COMPLETE'>()
