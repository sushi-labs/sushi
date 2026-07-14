import type { EvmChainId } from '../../chain/index.js'
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
  PASSED_CHAIN extends EvmChainId,
  SUPPORTED_CHAINS extends EvmChainId,
> = PASSED_CHAIN extends SUPPORTED_CHAINS ? string : string | undefined

function isIn<T extends object>(key: PropertyKey, obj: T): key is keyof T {
  return key in obj
}

type DecentralizedEntry = {
  type: 'subgraphId' | 'deploymentId'
  id: string
}

type _COMPLETENESS = 'COMPLETE' | 'PARTIAL'

export type SubgraphChainId<
  TResolver extends {
    readonly chainIds: readonly EvmChainId[]
  },
> = TResolver['chainIds'][number]

// Double-wrap to allow of automatic DECENTRALIZED and OTHER type inference
function getSubgraphUrlWrapperWrapper<
  DECENTRALIZED extends EvmChainId,
  OTHER extends EvmChainId,
>(subgraphs: {
  decentralizedIds: Record<DECENTRALIZED, DecentralizedEntry>
  otherUrls: Record<OTHER, string>
}) {
  // CHAINS is the union of related chainIds
  // COMPLETENESS tells us if the list of subgraphs is complete or partial for the given chainIds
  function getSubgraphUrlWrapper<
    CHAINS extends COMPLETENESS extends 'COMPLETE'
      ? DECENTRALIZED | OTHER
      : EvmChainId,
    COMPLETENESS extends _COMPLETENESS,
  >() {
    const chainIds = Object.freeze(
      Array.from(
        new Set([
          ...Object.keys(subgraphs.decentralizedIds).map(Number),
          ...Object.keys(subgraphs.otherUrls).map(Number),
        ]),
      ) as (DECENTRALIZED | OTHER)[],
    )
    const chainIdSet = new Set<EvmChainId>(chainIds)

    function supportsChainId(
      chainId: CHAINS,
    ): chainId is Extract<DECENTRALIZED | OTHER, CHAINS> {
      return chainIdSet.has(chainId)
    }

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

    const capabilities: {
      readonly chainIds: readonly (DECENTRALIZED | OTHER)[]
      supportsChainId: typeof supportsChainId
    } = {
      chainIds,
      supportsChainId,
    }

    return Object.assign(getSubgraphUrl, capabilities)
  }

  return getSubgraphUrlWrapper
}

export { getSubgraphUrlWrapperWrapper as getSubgraphUrlWrapper }

export function wrapAsIdType<CHAIN extends EvmChainId>(
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
