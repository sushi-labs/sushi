import { EvmChainId } from '../../../chain/index.js'
import { getSubgraphUrlWrapper } from '../get-subgraph-url.js'

export const getSushiBarSubgraphUrl = getSubgraphUrlWrapper({
  decentralizedIds: {
    [EvmChainId.ETHEREUM]: {
      type: 'deploymentId',
      id: 'QmWisRwB5h2fWMUdGbxQEdqMvVWAiZB1BxsCdoqcsn2Cij',
    },
  },
  otherUrls: {},
})()
