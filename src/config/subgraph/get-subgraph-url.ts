import type { ChainId } from '../../chain/index.js'
import {
  getDecentralizedHostByDeploymentId,
  getDecentralizedHostBySubgraphId,
} from './hosts.js'

type DecentralizedKey<IncludeKey extends boolean> = IncludeKey extends true
  ? {
      decentralizedKey: string
    }
  : {
      decentralizedKey?: string
    }

type Config<IncludeKey extends boolean> = DecentralizedKey<IncludeKey>

type Rest<IncludeKey extends boolean> = IncludeKey extends true
  ? [config: Config<IncludeKey>]
  : [config?: Config<IncludeKey>]

type Result<
  PASSED_CHAIN extends ChainId,
  SUPPORTED_CHAINS extends ChainId,
> = PASSED_CHAIN extends SUPPORTED_CHAINS ? string : string | undefined

function isIn<T extends object>(key: PropertyKey, obj: T): key is keyof T {
  return key in obj
}

type DecentralizedEntry = {
  type: 'subgraphId' | 'deploymentId'
  id: string
}

type _COMPLETENESS = 'COMPLETE' | 'PARTIAL'

// Double-wrap to allow of automatic DECENTRALIZED and OTHER type inference
function getSubgraphUrlWrapperWrapper<
  DECENTRALIZED extends ChainId,
  OTHER extends ChainId,
>(subgraphs: {
  decentralizedIds: Record<DECENTRALIZED, DecentralizedEntry>
  otherUrls: Record<OTHER, string>
}) {
  // CHAINS is the union of related chainIds
  // COMPLETENESS tells us if the list of subgraphs is complete or partial for the given chainIds
  function getSubgraphUrlWrapper<
    CHAINS extends COMPLETENESS extends 'COMPLETE'
      ? DECENTRALIZED | OTHER
      : ChainId,
    COMPLETENESS extends _COMPLETENESS,
  >() {
    // Handles the actual url lookup
    function getSubgraphUrl<PASSED_CHAIN extends CHAINS>(
      chainId: PASSED_CHAIN,
      // Require the decentralized key only if the subgraph is on decentralized network
      ...rest: Rest<[PASSED_CHAIN] extends [OTHER] ? false : true>
    ): Result<PASSED_CHAIN, DECENTRALIZED | OTHER> {
      const [config] = rest

      if (isIn(chainId, subgraphs.decentralizedIds)) {
        const _config = config as DecentralizedKey<true>

        const entry = subgraphs.decentralizedIds[chainId]
        if (entry.type === 'deploymentId') {
          return `${getDecentralizedHostByDeploymentId(
            _config.decentralizedKey,
          )}/${subgraphs.decentralizedIds[chainId].id}`
        }

        if (entry.type === 'subgraphId') {
          return `${getDecentralizedHostBySubgraphId(
            _config.decentralizedKey,
          )}/${subgraphs.decentralizedIds[chainId].id}`
        }

        throw new Error(`Invalid entry type: ${entry.type}`)
      }

      if (isIn(chainId, subgraphs.otherUrls)) {
        return subgraphs.otherUrls[chainId]
      }

      return undefined as Result<PASSED_CHAIN, DECENTRALIZED | OTHER>
    }

    return getSubgraphUrl
  }

  return getSubgraphUrlWrapper
}

export { getSubgraphUrlWrapperWrapper as getSubgraphUrlWrapper }

export function wrapAsIdType<CHAIN extends ChainId>(
  entries: Record<CHAIN, string>,
  type: DecentralizedEntry['type'],
) {
  const result: Partial<Record<CHAIN, DecentralizedEntry>> = {}

  for (const chainId in entries) {
    result[chainId as CHAIN] = {
      type: type,
      id: entries[chainId as CHAIN],
    }
  }

  return result as Record<CHAIN, DecentralizedEntry>
}
