import { ChainId } from '../../../chain/id.js'
import { getSubgraphUrlWrapper } from '../get-subgraph-url.js'

export const getMasterChefV2SubgraphUrl = getSubgraphUrlWrapper({
  decentralizedIds: {
    [ChainId.ETHEREUM]: {
      type: 'deploymentId',
      id: 'QmTbcaVrmr3VBKNhNjrqkhLo2WtPBA7Ana9eqj4PD216K1',
    },
  },
  otherUrls: {},
})()
