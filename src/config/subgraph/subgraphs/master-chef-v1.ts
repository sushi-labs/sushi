import { ChainId } from '../../../chain/id.js'
import { getSubgraphUrlWrapper } from '../get-subgraph-url.js'

export const getMasterChefV1SubgraphUrl = getSubgraphUrlWrapper({
  decentralizedIds: {
    [ChainId.ETHEREUM]: {
      type: 'deploymentId',
      id: 'QmQdLeKXfkgjE35QmBNTeEac4Fa4SvqYZ9wWJF43Nwv8KH',
    },
  },
  otherUrls: {},
})()
