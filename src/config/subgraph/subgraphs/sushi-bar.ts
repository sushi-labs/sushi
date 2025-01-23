import { ChainId } from '../../../chain/id.js'
import { getSubgraphUrlWrapper } from '../get-subgraph-url.js'

export const getSushiBarSubgraphUrl = getSubgraphUrlWrapper({
  decentralizedIds: {
    [ChainId.ETHEREUM]: {
      type: 'deploymentId',
      id: 'QmWisRwB5h2fWMUdGbxQEdqMvVWAiZB1BxsCdoqcsn2Cij',
    },
  },
  otherUrls: {},
})()
