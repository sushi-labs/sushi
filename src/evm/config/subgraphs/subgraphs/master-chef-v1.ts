import { EvmChainId } from '../../../chain/index.js'
import { getSubgraphUrlWrapper } from '../get-subgraph-url.js'

export const getMasterChefV1SubgraphUrl = getSubgraphUrlWrapper({
  decentralizedIds: {
    [EvmChainId.ETHEREUM]: {
      type: 'deploymentId',
      id: 'QmQdLeKXfkgjE35QmBNTeEac4Fa4SvqYZ9wWJF43Nwv8KH',
    },
  },
  otherUrls: {},
})()
